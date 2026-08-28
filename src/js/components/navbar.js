/* ==========================================================================
   TOP NAVBAR COMPONENT (SEARCH, NOTIFICATIONS POPOVER, QUICK ACTIONS)
   ========================================================================== */

import { auth } from '../services/auth.js';
import { store } from '../services/store.js';
import { router } from '../services/router.js';
import { formatRelativeTime, escapeHtml } from '../utils/formatters.js';

export function renderNavbar(container) {
  const currentUser = store.state.currentUser || { name: 'Demo User', avatar: 'DU' };
  const notifications = store.state.notifications || [];
  const unreadCount = notifications.filter(n => !n.read).length;
  const currentTheme = store.state.settings?.theme || 'dark';

  container.innerHTML = `
    <header class="app-header">
      <div class="flex items-center gap-3">
        <button id="mobile-menu-btn" class="btn btn-ghost btn-icon" title="Toggle Menu" aria-label="Toggle Menu">
          <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </button>
        <div class="search-box flex items-center gap-2" style="position: relative; width: 280px;">
          <svg width="16" height="16" fill="none" stroke="var(--text-muted)" stroke-width="2" viewBox="0 0 24 24" style="position: absolute; left: 10px;"><circle cx="11" cy="11" r="8"></circle><path d="M21 21l-4.35-4.35"></path></svg>
          <input type="text" id="global-search-input" class="form-input" placeholder="Search tasks, projects..." style="padding-left: 34px; height: 38px; font-size: 13px;">
        </div>
      </div>

      <div class="flex items-center gap-3">
        <button id="quick-add-task-btn" class="btn btn-primary btn-sm">
          <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"></path></svg>
          <span>New Task</span>
        </button>

        <div class="notif-wrapper" style="position: relative;">
          <button id="notif-bell-btn" class="btn btn-ghost btn-icon" title="Notifications" aria-label="Notifications">
            <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0"></path></svg>
            ${unreadCount > 0 ? `<span class="badge badge-urgent pulse-badge" style="position: absolute; top: 4px; right: 4px; padding: 2px 5px; font-size: 10px;">${unreadCount}</span>` : ''}
          </button>
          
          <div id="notif-dropdown" class="card card-glass hidden" style="position: absolute; right: 0; top: 48px; width: 340px; z-index: 100; padding: var(--space-4);">
            <div class="flex items-center justify-between" style="margin-bottom: var(--space-3); border-bottom: 1px solid var(--border-color); padding-bottom: 8px;">
              <span class="font-semibold text-sm">Notifications</span>
              <button id="clear-notifs-btn" class="btn btn-ghost btn-xs text-muted" style="font-size: 11px;">Clear all</button>
            </div>
            <div id="notif-list-container" style="max-height: 280px; overflow-y: auto; display: flex; flex-direction: column; gap: 8px;">
              ${notifications.length === 0 ? '<div class="text-muted text-xs" style="text-align: center; padding: 16px 0;">No notifications</div>' : ''}
              ${notifications.map(n => `
                <div class="notif-item ${n.read ? 'read' : 'unread'}" data-id="${n.id}" style="padding: 8px; border-radius: var(--radius-sm); background: var(--bg-surface-elevated); cursor: pointer; border-left: 3px solid var(--color-${n.type || 'info'});">
                  <div class="font-medium text-xs">${escapeHtml(n.title)}</div>
                  <div class="text-xs text-muted" style="margin-top: 2px;">${escapeHtml(n.message)}</div>
                  <div class="text-xs text-subtle" style="font-size: 10px; margin-top: 4px;">${formatRelativeTime(n.timestamp)}</div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>

        <button id="theme-toggle-btn" class="btn btn-ghost btn-icon" title="Toggle Dark/Light Mode" aria-label="Toggle Theme">
          ${currentTheme === 'dark' 
            ? '<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"></circle><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"></path></svg>'
            : '<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path></svg>'
          }
        </button>

        <div class="user-menu-wrapper" style="position: relative;">
          <div id="user-menu-trigger" class="avatar avatar-sm" style="cursor: pointer;" title="${escapeHtml(currentUser.name)}">
            ${currentUser.avatar}
          </div>
          <div id="user-dropdown" class="card card-glass hidden" style="position: absolute; right: 0; top: 48px; width: 200px; z-index: 100; padding: var(--space-3);">
            <div style="padding: 4px 8px; border-bottom: 1px solid var(--border-color); margin-bottom: 6px;">
              <div class="font-semibold text-sm">${escapeHtml(currentUser.name)}</div>
              <div class="text-xs text-muted">${escapeHtml(currentUser.email)}</div>
            </div>
            <button id="nav-profile-btn" class="btn btn-ghost btn-sm" style="width: 100%; justify-content: flex-start;">Profile Settings</button>
            <button id="nav-logout-btn" class="btn btn-ghost btn-sm text-danger" style="width: 100%; justify-content: flex-start; color: var(--color-danger);">Log out</button>
          </div>
        </div>
      </div>
    </header>
  `;

  // Attach event listeners
  const notifBellBtn = container.querySelector('#notif-bell-btn');
  const notifDropdown = container.querySelector('#notif-dropdown');
  const clearNotifsBtn = container.querySelector('#clear-notifs-btn');
  const userMenuTrigger = container.querySelector('#user-menu-trigger');
  const userDropdown = container.querySelector('#user-dropdown');
  const quickAddBtn = container.querySelector('#quick-add-task-btn');
  const themeBtn = container.querySelector('#theme-toggle-btn');
  const searchInput = container.querySelector('#global-search-input');
  const profileBtn = container.querySelector('#nav-profile-btn');
  const logoutBtn = container.querySelector('#nav-logout-btn');

  notifBellBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    notifDropdown?.classList.toggle('hidden');
    userDropdown?.classList.add('hidden');
  });

  userMenuTrigger?.addEventListener('click', (e) => {
    e.stopPropagation();
    userDropdown?.classList.toggle('hidden');
    notifDropdown?.classList.add('hidden');
  });

  document.addEventListener('click', () => {
    notifDropdown?.classList.add('hidden');
    userDropdown?.classList.add('hidden');
  });

  clearNotifsBtn?.addEventListener('click', () => {
    store.clearNotifications();
  });

  quickAddBtn?.addEventListener('click', () => {
    store.emit('modal:open', { type: 'createTask' });
  });

  themeBtn?.addEventListener('click', () => {
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    store.state.settings.theme = newTheme;
    store.emit('theme:changed', newTheme);
    renderNavbar(container);
  });

  searchInput?.addEventListener('input', (e) => {
    store.setFilters({ searchQuery: e.target.value });
  });

  profileBtn?.addEventListener('click', () => {
    router.navigate('profile');
  });

  logoutBtn?.addEventListener('click', () => {
    auth.logout();
    router.navigate('login');
  });
}
