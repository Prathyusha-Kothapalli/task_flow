/* ==========================================================================
   SIDEBAR NAVIGATION COMPONENT
   ========================================================================== */

import { store } from '../services/store.js';
import { router } from '../services/router.js';
import { escapeHtml } from '../utils/formatters.js';

export function renderSidebar(container) {
  const activeView = store.state.activeView || 'dashboard';
  const projects = store.state.projects || [];
  const activeProjectId = store.state.activeProjectId || 'all';

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="9" rx="1"></rect><rect x="14" y="3" width="7" height="5" rx="1"></rect><rect x="14" y="12" width="7" height="9" rx="1"></rect><rect x="3" y="16" width="7" height="5" rx="1"></rect></svg>' },
    { id: 'projects', label: 'Projects', icon: '<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"></path></svg>' },
    { id: 'tasks', label: 'All Tasks', icon: '<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9 11l3 3L22 4M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"></path></svg>' },
    { id: 'kanban', label: 'Kanban Board', icon: '<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4 3h4v18H4zm8 0h4v12h-4zm8 0h4v15h-4z"></path></svg>' },
    { id: 'calendar', label: 'Calendar', icon: '<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>' },
    { id: 'team', label: 'Team Members', icon: '<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"></path></svg>' },
    { id: 'reports', label: 'Reports & Analytics', icon: '<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>' },
    { id: 'settings', label: 'Settings', icon: '<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"></path></svg>' }
  ];

  container.innerHTML = `
    <aside class="app-sidebar">
      <div style="padding: var(--space-5) var(--space-6); display: flex; align-items: center; gap: 10px; border-bottom: 1px solid var(--border-color);">
        <div style="width: 32px; height: 32px; border-radius: var(--radius-md); background: var(--color-primary); display: flex; align-items: center; justify-content: center; color: #fff; font-weight: 700; font-size: 16px;">TF</div>
        <span class="font-bold text-lg" style="letter-spacing: -0.5px; background: linear-gradient(135deg, var(--text-main), var(--color-primary)); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">TaskFlow</span>
      </div>

      <div style="padding: var(--space-4) var(--space-3); flex-grow: 1;">
        <div class="text-xs font-semibold text-muted" style="padding: 0 var(--space-3); margin-bottom: 8px; letter-spacing: 0.5px;">MENU</div>
        <nav class="flex flex-col gap-1" style="margin-bottom: var(--space-6);">
          ${navItems.map(item => `
            <a href="#${item.id}" class="nav-item ${activeView === item.id ? 'active' : ''}" style="display: flex; align-items: center; gap: 12px; padding: 10px 12px; border-radius: var(--radius-md); font-size: 14px; font-weight: 500; color: ${activeView === item.id ? 'var(--color-primary)' : 'var(--text-muted)'}; background: ${activeView === item.id ? 'var(--color-primary-alpha-10)' : 'transparent'}; transition: all var(--transition-fast);">
              ${item.icon}
              <span>${item.label}</span>
            </a>
          `).join('')}
        </nav>

        <div class="text-xs font-semibold text-muted" style="padding: 0 var(--space-3); margin-bottom: 8px; letter-spacing: 0.5px;">PROJECTS</div>
        <div class="flex flex-col gap-1">
          <button class="project-filter-item ${activeProjectId === 'all' ? 'active' : ''}" data-proj-id="all" style="display: flex; align-items: center; gap: 10px; padding: 8px 12px; border-radius: var(--radius-md); font-size: 13px; color: var(--text-muted); width: 100%; text-align: left;">
            <span style="width: 8px; height: 8px; border-radius: 50%; background: var(--text-subtle);"></span>
            <span>All Projects</span>
          </button>
          ${projects.map(proj => `
            <button class="project-filter-item ${activeProjectId === proj.id ? 'active' : ''}" data-proj-id="${proj.id}" style="display: flex; align-items: center; gap: 10px; padding: 8px 12px; border-radius: var(--radius-md); font-size: 13px; color: ${activeProjectId === proj.id ? 'var(--text-main)' : 'var(--text-muted)'}; background: ${activeProjectId === proj.id ? 'var(--bg-surface-hover)' : 'transparent'}; width: 100%; text-align: left;">
              <span style="width: 8px; height: 8px; border-radius: 50%; background: ${proj.color || 'var(--color-primary)'};"></span>
              <span style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${escapeHtml(proj.name)}</span>
            </button>
          `).join('')}
        </div>
      </div>
    </aside>
  `;

  // Handle project quick filter click
  container.querySelectorAll('.project-filter-item').forEach(btn => {
    btn.addEventListener('click', () => {
      const projId = btn.getAttribute('data-proj-id');
      store.setFilters({ activeProjectId: projId });
      router.navigate('tasks');
    });
  });
}
