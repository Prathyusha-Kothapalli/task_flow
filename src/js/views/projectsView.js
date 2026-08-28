/* ==========================================================================
   PROJECTS VIEW (PROJECT CARDS GRID & CREATION)
   ========================================================================== */

import { store } from '../services/store.js';
import { router } from '../services/router.js';
import { formatDate, escapeHtml } from '../utils/formatters.js';
import { toast } from '../components/toast.js';

export function renderProjectsView(container) {
  const state = store.getState();
  const projects = state.projects || [];
  const tasks = state.tasks || [];

  container.innerHTML = `
    <div class="animate-fade-in">
      <div class="flex items-center justify-between" style="margin-bottom: var(--space-6);">
        <div>
          <h1 class="font-bold text-2xl" style="letter-spacing: -0.5px;">Projects</h1>
          <p class="text-xs text-muted" style="margin-top: 2px;">Manage organizational initiatives, timelines, and budgets.</p>
        </div>
        <button id="add-proj-btn" class="btn btn-primary btn-sm">
          <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"></path></svg>
          <span>New Project</span>
        </button>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: var(--space-6);">
        ${projects.map(proj => {
          const projTasks = tasks.filter(t => t.projectId === proj.id);
          const doneTasks = projTasks.filter(t => t.status === 'done').length;
          const progressPct = projTasks.length > 0 ? Math.round((doneTasks / projTasks.length) * 100) : 0;

          return `
            <div class="card flex flex-col justify-between" style="border-top: 4px solid ${proj.color || 'var(--color-primary)'}; min-height: 220px;">
              <div>
                <div class="flex items-center justify-between" style="margin-bottom: 8px;">
                  <span class="badge" style="background: var(--bg-surface-elevated); color: var(--text-muted);">${escapeHtml(proj.category || 'General')}</span>
                  <button class="btn btn-ghost btn-xs delete-proj-btn" data-proj-id="${proj.id}" title="Delete Project" style="color: var(--color-danger);">&times;</button>
                </div>
                <h3 class="font-bold text-base" style="margin-bottom: 6px;">${escapeHtml(proj.name)}</h3>
                <p class="text-xs text-muted" style="margin-bottom: var(--space-4); display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">${escapeHtml(proj.description || '')}</p>
              </div>

              <div>
                <div class="flex justify-between items-center text-xs font-semibold" style="margin-bottom: 4px;">
                  <span>Task Progress</span>
                  <span>${doneTasks}/${projTasks.length} Tasks (${progressPct}%)</span>
                </div>
                <div class="progress-bar" style="margin-bottom: var(--space-4);"><div class="progress-fill" style="width: ${progressPct}%; background: ${proj.color || 'var(--color-primary)'};"></div></div>

                <div class="flex justify-between items-center text-xs text-muted" style="border-top: 1px solid var(--border-color); padding-top: 10px;">
                  <span>Due: ${formatDate(proj.endDate)}</span>
                  <button class="btn btn-secondary btn-xs open-proj-tasks-btn" data-proj-id="${proj.id}">View Tasks &rarr;</button>
                </div>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;

  // Attach event listeners
  container.querySelector('#add-proj-btn')?.addEventListener('click', () => {
    store.state.isModalOpen = true;
    store.state.activeModal = { type: 'createProject' };
    store.emit('modal:open');
  });

  container.querySelectorAll('.open-proj-tasks-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const projId = btn.getAttribute('data-proj-id');
      store.setFilters({ activeProjectId: projId });
      router.navigate('tasks');
    });
  });

  container.querySelectorAll('.delete-proj-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const projId = btn.getAttribute('data-proj-id');
      if (confirm('Are you sure you want to delete this project? Associated tasks will also be removed.')) {
        store.deleteProject(projId);
        toast.info('Project deleted');
      }
    });
  });
}
