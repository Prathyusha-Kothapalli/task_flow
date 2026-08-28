/* ==========================================================================
   REACTIVE CENTRAL STORE & EVENT BUS
   ========================================================================== */

import { CONFIG } from '../config.js';
import { storage } from './storage.js';
import { SeedService } from './seed.js';

class Store {
  constructor() {
    this.listeners = new Map();
    this.state = {
      users: [],
      team: [],
      projects: [],
      tasks: [],
      notifications: [],
      settings: CONFIG.DEFAULT_SETTINGS,
      currentUser: null,
      activeView: 'dashboard',
      activeProjectId: 'all',
      searchQuery: '',
      filterStatus: 'all',
      filterPriority: 'all',
      filterAssignee: 'all',
      filterTag: 'all',
      sortBy: 'dueDate',
      sortOrder: 'asc',
      selectedTaskId: null,
      isDrawerOpen: false,
      isModalOpen: false,
      activeModal: null
    };

    this.init();
  }

  init() {
    // Check & seed demo data if missing
    SeedService.seedAll();

    // Load data from LocalStorage into reactive memory state
    this.state.users = storage.getItem(CONFIG.STORAGE_KEYS.USERS, []);
    this.state.team = storage.getItem(CONFIG.STORAGE_KEYS.TEAM, []);
    this.state.projects = storage.getItem(CONFIG.STORAGE_KEYS.PROJECTS, []);
    this.state.tasks = storage.getItem(CONFIG.STORAGE_KEYS.TASKS, []);
    this.state.notifications = storage.getItem(CONFIG.STORAGE_KEYS.NOTIFICATIONS, []);
    this.state.settings = storage.getItem(CONFIG.STORAGE_KEYS.SETTINGS, CONFIG.DEFAULT_SETTINGS);
    this.state.currentUser = storage.getItem(CONFIG.STORAGE_KEYS.SESSION, null);
  }

  // Pub/Sub Event Listener System
  subscribe(event, callback) {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, new Set());
    }
    this.listeners.get(event).add(callback);

    // Return unsubscribe function
    return () => {
      this.listeners.get(event)?.delete(callback);
    };
  }

  emit(event, data) {
    if (this.listeners.has(event)) {
      this.listeners.get(event).forEach(callback => callback(data));
    }
    // Also notify global state change subscribers
    if (event !== 'state:changed' && this.listeners.has('state:changed')) {
      this.listeners.get('state:changed').forEach(callback => callback({ event, data, state: this.state }));
    }
  }

  getState() {
    return { ...this.state };
  }

  // =========================================================================
  // TASK DISPATCHERS
  // =========================================================================
  addTask(taskData) {
    const newTask = {
      id: `tsk-${Date.now()}`,
      projectId: taskData.projectId || this.state.projects[0]?.id,
      title: taskData.title || 'Untitled Task',
      description: taskData.description || '',
      assigneeId: taskData.assigneeId || this.state.team[0]?.id,
      assigneeName: taskData.assigneeName || this.state.team[0]?.name,
      assigneeAvatar: taskData.assigneeAvatar || this.state.team[0]?.avatar,
      priority: taskData.priority || 'medium',
      status: taskData.status || 'todo',
      dueDate: taskData.dueDate || new Date().toISOString().split('T')[0],
      createdAt: new Date().toISOString(),
      labels: taskData.labels || ['Feature'],
      estimatedHours: Number(taskData.estimatedHours) || 8,
      spentHours: Number(taskData.spentHours) || 0,
      progress: Number(taskData.progress) || 0,
      archived: false,
      checklist: taskData.checklist || [],
      comments: taskData.comments || []
    };

    this.state.tasks = [newTask, ...this.state.tasks];
    storage.setItem(CONFIG.STORAGE_KEYS.TASKS, this.state.tasks);
    this.emit('tasks:updated', this.state.tasks);
    this.addNotification('Task Created', `New task "${newTask.title}" added.`, 'info');
    return newTask;
  }

  updateTask(taskId, updates) {
    let updatedTask = null;
    this.state.tasks = this.state.tasks.map(task => {
      if (task.id === taskId) {
        updatedTask = { ...task, ...updates };
        return updatedTask;
      }
      return task;
    });

    if (updatedTask) {
      storage.setItem(CONFIG.STORAGE_KEYS.TASKS, this.state.tasks);
      this.emit('tasks:updated', this.state.tasks);
      if (this.state.selectedTaskId === taskId) {
        this.emit('task:selected', updatedTask);
      }
    }
    return updatedTask;
  }

  deleteTask(taskId) {
    const taskToDelete = this.state.tasks.find(t => t.id === taskId);
    this.state.tasks = this.state.tasks.filter(task => task.id !== taskId);
    storage.setItem(CONFIG.STORAGE_KEYS.TASKS, this.state.tasks);
    this.emit('tasks:updated', this.state.tasks);
    if (this.state.selectedTaskId === taskId) {
      this.closeDrawer();
    }
    if (taskToDelete) {
      this.addNotification('Task Deleted', `Task "${taskToDelete.title}" removed.`, 'warning');
    }
  }

  updateTaskStatus(taskId, newStatus) {
    const task = this.state.tasks.find(t => t.id === taskId);
    if (!task) return;

    const progress = newStatus === 'done' ? 100 : (newStatus === 'backlog' ? 0 : task.progress);
    this.updateTask(taskId, { status: newStatus, progress });
  }

  addCommentToTask(taskId, commentText) {
    const task = this.state.tasks.find(t => t.id === taskId);
    if (!task) return;

    const currentUser = this.state.currentUser || CONFIG.DEMO_USER;
    const newComment = {
      id: `cmt-${Date.now()}`,
      authorName: currentUser.name,
      authorAvatar: currentUser.avatar,
      text: commentText,
      timestamp: new Date().toISOString()
    };

    const updatedComments = [...(task.comments || []), newComment];
    this.updateTask(taskId, { comments: updatedComments });
  }

  // =========================================================================
  // PROJECT DISPATCHERS
  // =========================================================================
  addProject(projectData) {
    const newProject = {
      id: `proj-${Date.now()}`,
      name: projectData.name,
      description: projectData.description || '',
      category: projectData.category || 'General',
      color: projectData.color || '#6366f1',
      startDate: projectData.startDate || new Date().toISOString().split('T')[0],
      endDate: projectData.endDate || new Date(Date.now() + 30 * 24 * 3600 * 1000).toISOString().split('T')[0],
      budgetHours: Number(projectData.budgetHours) || 100,
      status: 'active',
      members: projectData.members || ['tm-1']
    };

    this.state.projects = [newProject, ...this.state.projects];
    storage.setItem(CONFIG.STORAGE_KEYS.PROJECTS, this.state.projects);
    this.emit('projects:updated', this.state.projects);
    this.addNotification('Project Created', `Project "${newProject.name}" created.`, 'success');
    return newProject;
  }

  deleteProject(projectId) {
    this.state.projects = this.state.projects.filter(p => p.id !== projectId);
    this.state.tasks = this.state.tasks.filter(t => t.projectId !== projectId);
    storage.setItem(CONFIG.STORAGE_KEYS.PROJECTS, this.state.projects);
    storage.setItem(CONFIG.STORAGE_KEYS.TASKS, this.state.tasks);
    this.emit('projects:updated', this.state.projects);
    this.emit('tasks:updated', this.state.tasks);
  }

  // =========================================================================
  // NOTIFICATION DISPATCHERS
  // =========================================================================
  addNotification(title, message, type = 'info') {
    const newNotif = {
      id: `notif-${Date.now()}`,
      title,
      message,
      type,
      read: false,
      timestamp: new Date().toISOString()
    };
    this.state.notifications = [newNotif, ...this.state.notifications];
    storage.setItem(CONFIG.STORAGE_KEYS.NOTIFICATIONS, this.state.notifications);
    this.emit('notifications:updated', this.state.notifications);
  }

  markNotificationRead(notifId) {
    this.state.notifications = this.state.notifications.map(n => n.id === notifId ? { ...n, read: true } : n);
    storage.setItem(CONFIG.STORAGE_KEYS.NOTIFICATIONS, this.state.notifications);
    this.emit('notifications:updated', this.state.notifications);
  }

  clearNotifications() {
    this.state.notifications = [];
    storage.setItem(CONFIG.STORAGE_KEYS.NOTIFICATIONS, []);
    this.emit('notifications:updated', []);
  }

  // =========================================================================
  // UI STATE & DRAWER / MODAL DISPATCHERS
  // =========================================================================
  openTaskDrawer(taskId) {
    this.state.selectedTaskId = taskId;
    this.state.isDrawerOpen = true;
    const task = this.state.tasks.find(t => t.id === taskId);
    this.emit('drawer:opened', task);
  }

  closeDrawer() {
    this.state.selectedTaskId = null;
    this.state.isDrawerOpen = false;
    this.emit('drawer:closed');
  }

  setFilters(filters) {
    this.state = { ...this.state, ...filters };
    this.emit('filters:changed', this.state);
  }

  resetDemoData() {
    SeedService.seedAll(true);
    this.init();
    this.emit('data:reset');
    this.addNotification('System Reset', 'Demo data re-seeded successfully.', 'info');
  }
}

export const store = new Store();
