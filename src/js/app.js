/* ==========================================================================
   TASKFLOW SaaS APPLICATION ENTRYPOINT
   ========================================================================== */

import { auth } from './services/auth.js';
import { store } from './services/store.js';
import { router } from './services/router.js';

import { renderNavbar } from './components/navbar.js';
import { renderSidebar } from './components/sidebar.js';
import { renderModal } from './components/modal.js';
import { renderDrawer } from './components/drawer.js';

import { renderAuthView } from './views/authView.js';
import { renderDashboardView } from './views/dashboardView.js';
import { renderProjectsView } from './views/projectsView.js';
import { renderTasksView } from './views/tasksView.js';
import { renderKanbanView } from './views/kanbanView.js';
import { renderCalendarView } from './views/calendarView.js';
import { renderTeamView } from './views/teamView.js';
import { renderReportsView } from './views/reportsView.js';
import { renderProfileView } from './views/profileView.js';
import { renderSettingsView } from './views/settingsView.js';

class App {
  constructor() {
    this.appRoot = document.querySelector('#app-root');
    this.modalRoot = document.querySelector('#modal-root');
    this.drawerRoot = document.querySelector('#drawer-root');
  }

  init() {
    // 1. Setup Theme & Accent settings from store
    const settings = store.state.settings;
    if (settings) {
      document.documentElement.setAttribute('data-theme', settings.theme || 'dark');
      document.documentElement.setAttribute('data-accent', settings.accent || 'indigo');
    }

    // 2. Register Client-Side SPA Routes
    router.addRoute('login', () => this.renderAuth(false));
    router.addRoute('register', () => this.renderAuth(true));
    router.addRoute('dashboard', () => this.renderMainLayout(renderDashboardView));
    router.addRoute('projects', () => this.renderMainLayout(renderProjectsView));
    router.addRoute('tasks', () => this.renderMainLayout(renderTasksView));
    router.addRoute('kanban', () => this.renderMainLayout(renderKanbanView));
    router.addRoute('calendar', () => this.renderMainLayout(renderCalendarView));
    router.addRoute('team', () => this.renderMainLayout(renderTeamView));
    router.addRoute('reports', () => this.renderMainLayout(renderReportsView));
    router.addRoute('profile', () => this.renderMainLayout(renderProfileView));
    router.addRoute('settings', () => this.renderMainLayout(renderSettingsView));

    // 3. Subscribe to Store State Changes for dynamic re-renders
    store.subscribe('state:changed', () => this.updateUI());
    store.subscribe('modal:open', () => renderModal(this.modalRoot));
    store.subscribe('drawer:opened', () => renderDrawer(this.drawerRoot));
    store.subscribe('drawer:closed', () => renderDrawer(this.drawerRoot));

    // 4. Initialize Router
    router.init();
  }

  renderAuth(isRegister = false) {
    renderAuthView(this.appRoot, isRegister);
    this.modalRoot.innerHTML = '';
    this.drawerRoot.innerHTML = '';
  }

  renderMainLayout(viewRenderer) {
    if (!auth.isAuthenticated()) {
      router.navigate('login');
      return;
    }

    this.appRoot.innerHTML = `
      <div class="main-layout">
        <div id="sidebar-container"></div>
        <div id="navbar-container"></div>
        <main class="app-main" id="view-container"></main>
      </div>
    `;

    renderNavbar(document.querySelector('#navbar-container'));
    renderSidebar(document.querySelector('#sidebar-container'));
    viewRenderer(document.querySelector('#view-container'));

    renderModal(this.modalRoot);
    renderDrawer(this.drawerRoot);
  }

  updateUI() {
    if (!auth.isAuthenticated()) return;

    const navContainer = document.querySelector('#navbar-container');
    const sideContainer = document.querySelector('#sidebar-container');
    const viewContainer = document.querySelector('#view-container');

    if (navContainer) renderNavbar(navContainer);
    if (sideContainer) renderSidebar(sideContainer);
    
    // Re-render current active view
    const current = store.state.activeView;
    const renderers = {
      dashboard: renderDashboardView,
      projects: renderProjectsView,
      tasks: renderTasksView,
      kanban: renderKanbanView,
      calendar: renderCalendarView,
      team: renderTeamView,
      reports: renderReportsView,
      profile: renderProfileView,
      settings: renderSettingsView
    };

    if (viewContainer && renderers[current]) {
      renderers[current](viewContainer);
    }

    renderModal(this.modalRoot);
    renderDrawer(this.drawerRoot);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const app = new App();
  app.init();
});
