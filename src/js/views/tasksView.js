/* ==========================================================================
   TASKS TABLE / GRID VIEW (MULTI-CRITERIA FILTERS, SORTING, SEARCH)
   ========================================================================== */

import { store } from '../services/store.js';
import { formatDate, getPriorityBadge, getStatusBadge, escapeHtml } from '../utils/formatters.js';

export function renderTasksView(container) {
  const state = store.getState();
  let tasks = [...(state.tasks || [])];
  const projects = state.projects || [];
  const team = state.team || [];

  // 1. Filter by Project
  if (state.activeProjectId && state.activeProjectId !== 'all') {
    tasks = tasks.filter(t => t.projectId === state.activeProjectId);
  }

  // 2. Filter by Status
  if (state.filterStatus && state.filterStatus !== 'all') {
    tasks = tasks.filter(t => t.status === state.filterStatus);
  }

  // 3. Filter by Priority
  if (state.filterPriority && state.filterPriority !== 'all') {
    tasks = tasks.filter(t => t.priority === state.filterPriority);
  }

  // 4. Filter by Assignee
  if (state.filterAssignee && state.filterAssignee !== 'all') {
    tasks = tasks.filter(t => t.assigneeId === state.filterAssignee);
  }

  // 5. Search Filter
  if (state.searchQuery) {
    const q = state.searchQuery.toLowerCase();
    tasks = tasks.filter(t => t.title.toLowerCase().includes(q) || (t.description || '').toLowerCase().includes(q));
  }

  // 6. Sorting
  tasks.sort((a, b) => {
    if (state.sortBy === 'dueDate') {
      return (a.dueDate || '').localeCompare(b.dueDate || '');
    } else if (state.sortBy === 'priority') {
      const pWeights = { urgent: 4, high: 3, medium: 2, low: 1 };
      return (pWeights[b.priority] || 0) - (pWeights[a.priority] || 0);
    } else if (state.sortBy === 'title') {
      return a.title.localeCompare(b.title);
    } else if (state.sortBy === 'progress') {
      return (b.progress || 0) - (a.progress || 0);
    }
    return 0;
  });

  container.innerHTML = `
    <div class="animate-fade-in">
      <div class="flex items-center justify-between" style="margin-bottom: var(--space-6);">
        <div>
          <h1 class="font-bold text-2xl" style="letter-spacing: -0.5px;">All Tasks (${tasks.length})</h1>
          <p class="text-xs text-muted" style="margin-top: 2px;">Search, filter, and track granular work items across projects.</p>
        </div>
        <button id="tasks-add-btn" class="btn btn-primary btn-sm">
          <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"></path></svg>
          <span>New Task</span>
        </button>
      </div>

      <!-- Filters & Controls Bar -->
      <div class="card" style="padding: var(--space-4); margin-bottom: var(--space-6);">
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: var(--space-3);">
          <div>
            <label class="form-label text-xs text-muted">Project</label>
            <select id="filter-proj-select" class="form-select text-xs">
              <option value="all" ${state.activeProjectId === 'all' ? 'selected' : ''}>All Projects</option>
              ${projects.map(p => `<option value="${p.id}" ${state.activeProjectId === p.id ? 'selected' : ''}>${p.name}</option>`).join('')}
            </select>
          </div>
          <div>
            <label class="form-label text-xs text-muted">Status</label>
            <select id="filter-status-select" class="form-select text-xs">
              <option value="all" ${state.filterStatus === 'all' ? 'selected' : ''}>All Statuses</option>
              <option value="backlog" ${state.filterStatus === 'backlog' ? 'selected' : ''}>Backlog</option>
              <option value="todo" ${state.filterStatus === 'todo' ? 'selected' : ''}>To Do</option>
              <option value="in_progress" ${state.filterStatus === 'in_progress' ? 'selected' : ''}>In Progress</option>
              <option value="review" ${state.filterStatus === 'review' ? 'selected' : ''}>Review</option>
              <option value="done" ${state.filterStatus === 'done' ? 'selected' : ''}>Done</option>
            </select>
          </div>
          <div>
            <label class="form-label text-xs text-muted">Priority</label>
            <select id="filter-priority-select" class="form-select text-xs">
              <option value="all" ${state.filterPriority === 'all' ? 'selected' : ''}>All Priorities</option>
              <option value="low" ${state.filterPriority === 'low' ? 'selected' : ''}>Low</option>
              <option value="medium" ${state.filterPriority === 'medium' ? 'selected' : ''}>Medium</option>
              <option value="high" ${state.filterPriority === 'high' ? 'selected' : ''}>High</option>
              <option value="urgent" ${state.filterPriority === 'urgent' ? 'selected' : ''}>Urgent</option>
            </select>
          </div>
          <div>
            <label class="form-label text-xs text-muted">Assignee</label>
            <select id="filter-assignee-select" class="form-select text-xs">
              <option value="all" ${state.filterAssignee === 'all' ? 'selected' : ''}>All Team</option>
              ${team.map(m => `<option value="${m.id}" ${state.filterAssignee === m.id ? 'selected' : ''}>${m.name}</option>`).join('')}
            </select>
          </div>
          <div>
            <label class="form-label text-xs text-muted">Sort By</label>
            <select id="sort-by-select" class="form-select text-xs">
              <option value="dueDate" ${state.sortBy === 'dueDate' ? 'selected' : ''}>Due Date</option>
              <option value="priority" ${state.sortBy === 'priority' ? 'selected' : ''}>Priority</option>
              <option value="title" ${state.sortBy === 'title' ? 'selected' : ''}>Title A-Z</option>
              <option value="progress" ${state.sortBy === 'progress' ? 'selected' : ''}>Progress %</option>
            </select>
          </div>
        </div>
      </div>

      <!-- Task Table Container -->
      <div class="card" style="padding: 0; overflow-x: auto;">
        <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 13px;">
          <thead>
            <tr style="border-bottom: 1px solid var(--border-color); background: var(--bg-surface-elevated); color: var(--text-muted); font-weight: 600;">
              <th style="padding: 12px 16px;">Task Title</th>
              <th style="padding: 12px 16px;">Project</th>
              <th style="padding: 12px 16px;">Assignee</th>
              <th style="padding: 12px 16px;">Priority</th>
              <th style="padding: 12px 16px;">Status</th>
              <th style="padding: 12px 16px;">Due Date</th>
              <th style="padding: 12px 16px;">Progress</th>
            </tr>
          </thead>
          <tbody>
            ${tasks.length === 0 ? `
              <tr>
                <td colspan="7" style="text-align: center; padding: 40px; color: var(--text-muted);">
                  No tasks found matching your filter criteria.
                </td>
              </tr>
            ` : ''}
            ${tasks.map(t => {
              const proj = projects.find(p => p.id === t.projectId) || { name: 'General', color: '#6366f1' };
              return `
                <tr class="task-table-row" data-task-id="${t.id}" style="border-bottom: 1px solid var(--border-color); cursor: pointer; transition: background var(--transition-fast);">
                  <td style="padding: 12px 16px; font-weight: 600;">${escapeHtml(t.title)}</td>
                  <td style="padding: 12px 16px;">
                    <span class="badge" style="background: var(--bg-surface-elevated); color: var(--text-muted); border-left: 3px solid ${proj.color};">
                      ${escapeHtml(proj.name)}
                    </span>
                  </td>
                  <td style="padding: 12px 16px;">
                    <div class="flex items-center gap-2">
                      <div class="avatar avatar-sm">${t.assigneeAvatar || 'UA'}</div>
                      <span>${escapeHtml(t.assigneeName || 'Unassigned')}</span>
                    </div>
                  </td>
                  <td style="padding: 12px 16px;">${getPriorityBadge(t.priority)}</td>
                  <td style="padding: 12px 16px;">${getStatusBadge(t.status)}</td>
                  <td style="padding: 12px 16px; color: var(--text-muted);">${formatDate(t.dueDate)}</td>
                  <td style="padding: 12px 16px; width: 140px;">
                    <div class="flex items-center gap-2">
                      <div class="progress-bar" style="flex-grow: 1;"><div class="progress-fill" style="width: ${t.progress || 0}%;"></div></div>
                      <span style="font-size: 11px; color: var(--text-muted);">${t.progress || 0}%</span>
                    </div>
                  </td>
                </tr>
              `;
            }).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;

  // Attach event listeners
  container.querySelector('#tasks-add-btn')?.addEventListener('click', () => {
    store.state.isModalOpen = true;
    store.state.activeModal = { type: 'createTask' };
    store.emit('modal:open');
  });

  container.querySelector('#filter-proj-select')?.addEventListener('change', (e) => {
    store.setFilters({ activeProjectId: e.target.value });
  });
  container.querySelector('#filter-status-select')?.addEventListener('change', (e) => {
    store.setFilters({ filterStatus: e.target.value });
  });
  container.querySelector('#filter-priority-select')?.addEventListener('change', (e) => {
    store.setFilters({ filterPriority: e.target.value });
  });
  container.querySelector('#filter-assignee-select')?.addEventListener('change', (e) => {
    store.setFilters({ filterAssignee: e.target.value });
  });
  container.querySelector('#sort-by-select')?.addEventListener('change', (e) => {
    store.setFilters({ sortBy: e.target.value });
  });

  container.querySelectorAll('.task-table-row').forEach(row => {
    row.addEventListener('click', () => {
      const taskId = row.getAttribute('data-task-id');
      store.openTaskDrawer(taskId);
    });
  });
}
