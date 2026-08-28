/* ==========================================================================
   TASKFLOW AUTOMATED SEED ENGINE (DEMO DATASET INITIALIZER)
   ========================================================================== */

import { CONFIG } from '../config.js';
import { storage } from './storage.js';

export class SeedService {
  static isSeeded() {
    const tasks = storage.getItem(CONFIG.STORAGE_KEYS.TASKS);
    return Array.isArray(tasks) && tasks.length > 0;
  }

  static seedAll(force = false) {
    if (!force && this.isSeeded()) return;

    // 1. Seed Demo User & Accounts
    const users = [
      {
        id: 'usr-demo',
        email: CONFIG.DEMO_USER.email,
        password: CONFIG.DEMO_USER.password,
        name: CONFIG.DEMO_USER.name,
        role: CONFIG.DEMO_USER.role,
        avatar: CONFIG.DEMO_USER.avatar,
        bio: 'Senior Product Lead orchestrating cross-functional teams and SaaS product strategy.',
        createdAt: new Date(Date.now() - 90 * 24 * 60 * 60 * 1000).toISOString()
      }
    ];

    // 2. Seed 5 Team Members
    const teamMembers = [
      { id: 'tm-1', name: 'Alex Morgan', email: 'alex.m@taskflow.com', role: 'Product Manager', avatar: 'AM', color: '#6366f1', activeTasksCount: 0 },
      { id: 'tm-2', name: 'Sarah Chen', email: 'sarah.c@taskflow.com', role: 'Lead Architect', avatar: 'SC', color: '#10b981', activeTasksCount: 0 },
      { id: 'tm-3', name: 'Marcus Vance', email: 'marcus.v@taskflow.com', role: 'Senior Frontend Engineer', avatar: 'MV', color: '#f59e0b', activeTasksCount: 0 },
      { id: 'tm-4', name: 'Elena Rostova', email: 'elena.r@taskflow.com', role: 'UI/UX Design Director', avatar: 'ER', color: '#ec4899', activeTasksCount: 0 },
      { id: 'tm-5', name: 'David Kim', email: 'david.k@taskflow.com', role: 'DevOps & Cloud Specialist', avatar: 'DK', color: '#8b5cf6', activeTasksCount: 0 }
    ];

    // 3. Seed 4 Realistic Projects
    const projects = [
      {
        id: 'proj-1',
        name: 'Enterprise Mobile App v2.0',
        description: 'Next-generation iOS & Android companion app for enterprise workflow automation and offline sync.',
        category: 'Mobile Development',
        color: '#6366f1',
        startDate: '2026-07-01',
        endDate: '2026-10-15',
        budgetHours: 320,
        status: 'active',
        members: ['tm-1', 'tm-2', 'tm-3', 'tm-4']
      },
      {
        id: 'proj-2',
        name: 'Cloud Infrastructure Migration',
        description: 'Migrating legacy monolithic microservices to Kubernetes clusters with automated CI/CD pipelines.',
        category: 'DevOps & Infra',
        color: '#8b5cf6',
        startDate: '2026-06-15',
        endDate: '2026-09-30',
        budgetHours: 240,
        status: 'active',
        members: ['tm-2', 'tm-5']
      },
      {
        id: 'proj-3',
        name: 'Design System & Component Library',
        description: 'Unified accessible design tokens, typography, dark mode guidelines, and reusable Web Component kit.',
        category: 'UI/UX Design',
        color: '#ec4899',
        startDate: '2026-08-01',
        endDate: '2026-11-01',
        budgetHours: 180,
        status: 'active',
        members: ['tm-1', 'tm-4', 'tm-3']
      },
      {
        id: 'proj-4',
        name: 'AI Analytics & Reporting Engine',
        description: 'Interactive real-time data dashboard featuring predictive velocity metrics and automated report exports.',
        category: 'Data Engineering',
        color: '#10b981',
        startDate: '2026-07-15',
        endDate: '2026-12-01',
        budgetHours: 400,
        status: 'active',
        members: ['tm-1', 'tm-2', 'tm-3', 'tm-5']
      }
    ];

    // 4. Seed 50+ Varied Tasks
    const statuses = ['backlog', 'todo', 'in_progress', 'review', 'done'];
    const priorities = ['low', 'medium', 'high', 'urgent'];
    const labelsPool = ['Frontend', 'Backend', 'UI Design', 'DevOps', 'Security', 'Database', 'Performance', 'API', 'BugFix', 'Feature'];

    const tasksTemplates = [
      { title: 'Design Glassmorphism Dashboard Layout', proj: 'proj-3', tag: 'UI Design', est: 12, act: 8, progress: 70 },
      { title: 'Configure OAuth2 Authentication & SSO', proj: 'proj-1', tag: 'Security', est: 16, act: 14, progress: 90 },
      { title: 'Setup Kubernetes Cluster Ingress Controller', proj: 'proj-2', tag: 'DevOps', est: 20, act: 20, progress: 100 },
      { title: 'Build Drag-and-Drop Kanban Board Module', proj: 'proj-1', tag: 'Frontend', est: 18, act: 15, progress: 85 },
      { title: 'Optimize LocalStorage Data Serialization', proj: 'proj-4', tag: 'Performance', est: 8, act: 6, progress: 100 },
      { title: 'Implement Real-time SVG Donut Charts', proj: 'proj-4', tag: 'Frontend', est: 14, act: 10, progress: 75 },
      { title: 'Develop Biometric TouchID / FaceID Login', proj: 'proj-1', tag: 'Feature', est: 24, act: 4, progress: 20 },
      { title: 'Migrate PostgreSQL Database to AWS RDS', proj: 'proj-2', tag: 'Database', est: 30, act: 18, progress: 60 },
      { title: 'Create Dark/Light Mode Theme Switcher', proj: 'proj-3', tag: 'UI Design', est: 6, act: 6, progress: 100 },
      { title: 'Write Vitest Automated Unit Test Suites', proj: 'proj-1', tag: 'Performance', est: 16, act: 12, progress: 80 }
    ];

    const tasks = [];
    let taskIdCounter = 100;
    const now = new Date();

    // Create 52 realistic tasks with random variations
    for (let i = 0; i < 52; i++) {
      const template = tasksTemplates[i % tasksTemplates.length];
      const projId = projects[i % projects.length].id;
      const assignee = teamMembers[i % teamMembers.length];
      const status = statuses[i % statuses.length];
      const priority = priorities[i % priorities.length];

      // Calculate realistic deadlines (some past, some today, some upcoming)
      const dayOffset = (i % 25) - 10;
      const dueDate = new Date(now.getTime() + dayOffset * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
      const createdAt = new Date(now.getTime() - (30 - i % 20) * 24 * 60 * 60 * 1000).toISOString();

      const task = {
        id: `tsk-${taskIdCounter++}`,
        projectId: projId,
        title: `${template.title} #${i + 1}`,
        description: `Implement enterprise requirements for ${template.title}. Ensure high availability, responsive styling, and accessibility WCAG AA compliance.`,
        assigneeId: assignee.id,
        assigneeName: assignee.name,
        assigneeAvatar: assignee.avatar,
        priority: priority,
        status: status,
        dueDate: dueDate,
        createdAt: createdAt,
        labels: [template.tag, labelsPool[(i + 3) % labelsPool.length]],
        estimatedHours: template.est + (i % 5),
        spentHours: status === 'done' ? template.est : Math.floor(template.est * (template.progress / 100)),
        progress: status === 'done' ? 100 : (status === 'backlog' ? 0 : template.progress),
        archived: false,
        checklist: [
          { id: 'chk-1', text: 'Initial design review & specification', completed: true },
          { id: 'chk-2', text: 'Core implementation & component logic', completed: status !== 'backlog' },
          { id: 'chk-3', text: 'Cross-browser testing & code optimization', completed: status === 'done' || status === 'review' }
        ],
        comments: [
          {
            id: `cmt-${i}-1`,
            authorName: assignee.name,
            authorAvatar: assignee.avatar,
            text: 'Refactored state management hooks for better reactivity performance.',
            timestamp: new Date(now.getTime() - (i % 5 + 1) * 3600 * 1000).toISOString()
          }
        ]
      };

      tasks.push(task);
    }

    // 5. Seed Initial System Notifications
    const notifications = [
      {
        id: 'notif-1',
        title: 'Task Assigned',
        message: 'You have been assigned to "Build Drag-and-Drop Kanban Board Module #4".',
        type: 'info',
        read: false,
        timestamp: new Date(now.getTime() - 15 * 60 * 1000).toISOString()
      },
      {
        id: 'notif-2',
        title: 'Deadline Approaching',
        message: '"Setup Kubernetes Cluster Ingress Controller #3" is due tomorrow!',
        type: 'warning',
        read: false,
        timestamp: new Date(now.getTime() - 2 * 3600 * 1000).toISOString()
      },
      {
        id: 'notif-3',
        title: 'Project Milestone Achieved',
        message: 'Enterprise Mobile App v2.0 completed 80% of targeted features!',
        type: 'success',
        read: true,
        timestamp: new Date(now.getTime() - 24 * 3600 * 1000).toISOString()
      }
    ];

    // Save everything to LocalStorage
    storage.setItem(CONFIG.STORAGE_KEYS.USERS, users);
    storage.setItem(CONFIG.STORAGE_KEYS.TEAM, teamMembers);
    storage.setItem(CONFIG.STORAGE_KEYS.PROJECTS, projects);
    storage.setItem(CONFIG.STORAGE_KEYS.TASKS, tasks);
    storage.setItem(CONFIG.STORAGE_KEYS.NOTIFICATIONS, notifications);
    storage.setItem(CONFIG.STORAGE_KEYS.SETTINGS, CONFIG.DEFAULT_SETTINGS);

    console.log('✅ TaskFlow Demo Dataset auto-seeded successfully with 52 tasks!');
  }
}
