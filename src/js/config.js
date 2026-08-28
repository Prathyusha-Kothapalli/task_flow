/* ==========================================================================
   TASKFLOW APPLICATION CONFIGURATION & CONSTANTS
   ========================================================================== */

export const CONFIG = {
  APP_NAME: 'TaskFlow',
  VERSION: '1.0.0',
  STORAGE_KEYS: {
    USERS: 'taskflow_users',
    PROJECTS: 'taskflow_projects',
    TASKS: 'taskflow_tasks',
    TEAM: 'taskflow_team',
    NOTIFICATIONS: 'taskflow_notifications',
    SESSION: 'taskflow_session',
    SETTINGS: 'taskflow_settings'
  },
  DEFAULT_SETTINGS: {
    theme: 'dark',
    accent: 'indigo',
    notificationsEnabled: true,
    compactView: false
  },
  DEMO_USER: {
    email: 'demo@taskflow.com',
    password: 'Demo@123',
    name: 'Alex Morgan',
    role: 'Product Manager',
    avatar: 'AM'
  },
  TASK_STATUSES: {
    BACKLOG: 'backlog',
    TODO: 'todo',
    IN_PROGRESS: 'in_progress',
    REVIEW: 'review',
    DONE: 'done'
  },
  TASK_PRIORITIES: {
    LOW: 'low',
    MEDIUM: 'medium',
    HIGH: 'high',
    URGENT: 'urgent'
  }
};
