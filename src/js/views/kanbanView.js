/* ==========================================================================
   KANBAN BOARD VIEW (5 COLUMNS & HTML5 + TOUCH DRAG AND DROP)
   ========================================================================== */

import { store } from '../services/store.js';
import { getPriorityBadge, formatDate, escapeHtml } from '../utils/formatters.js';

export function renderKanbanView(container) {
  const state = store.getState();
  let tasks = [...(state.tasks || [])];
  const projects = state.projects || [];

  if (state.activeProjectId && state.activeProjectId !== 'all') {
    tasks = tasks.filter(t => t.projectId === state.activeProjectId);
  }

  const columns = [
    { id: 'backlog', title: 'Backlog', color: '#94a3b8' },
    { id: 'todo', title: 'To Do', color: '#3b82f6' },
    { id: 'in_progress', title: 'In Progress', color: '#f59e0b' },
    { id: 'review', title: 'Review', color: '#8b5cf6' },
    { id: 'done', title: 'Done', color: '#10b981' }
  ];

  container.innerHTML = `
    <div class="animate-fade-in flex flex-col" style="height: calc(100vh - 120px);">
      <div class="flex items-center justify-between" style="margin-bottom: var(--space-4);">
        <div>
          <h1 class="font-bold text-2xl" style="letter-spacing: -0.5px;">Kanban Board</h1>
          <p class="text-xs text-muted" style="margin-top: 2px;">Drag and drop tasks between stages to update project status instantly.</p>
        </div>
        <button id="kanban-add-btn" class="btn btn-primary btn-sm">
          <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"></path></svg>
          <span>New Task</span>
        </button>
      </div>

      <!-- Columns Container -->
      <div class="kanban-board">
        ${columns.map(col => {
          const colTasks = tasks.filter(t => t.status === col.id);
          const colHours = colTasks.reduce((sum, t) => sum + (Number(t.estimatedHours) || 0), 0);

          return `
            <div class="kanban-column" data-status-id="${col.id}">
              <div class="kanban-column-header">
                <div class="flex items-center gap-2">
                  <span style="width: 10px; height: 10px; border-radius: 50%; background: ${col.color};"></span>
                  <span class="font-bold text-sm">${col.title}</span>
                  <span class="badge" style="background: var(--bg-surface-elevated); color: var(--text-muted); font-size: 11px;">${colTasks.length}</span>
                </div>
                <span class="text-xs text-muted font-medium">${colHours}h</span>
              </div>

              <div class="kanban-cards-container" data-status-id="${col.id}">
                ${colTasks.map(t => {
                  const proj = projects.find(p => p.id === t.projectId) || { name: 'General', color: '#6366f1' };
                  return `
                    <div class="kanban-card" draggable="true" data-task-id="${t.id}">
                      <div class="flex items-center justify-between" style="margin-bottom: 8px;">
                        <span class="badge" style="background: var(--bg-surface-hover); color: var(--text-muted); border-left: 3px solid ${proj.color};">
                          ${escapeHtml(proj.name)}
                        </span>
                        ${getPriorityBadge(t.priority)}
                      </div>
                      <h4 class="font-semibold text-sm" style="margin-bottom: 8px; line-height: 1.3;">${escapeHtml(t.title)}</h4>
                      
                      <div class="flex items-center justify-between" style="margin-top: 12px; font-size: 11px; color: var(--text-muted);">
                        <div class="flex items-center gap-1">
                          <div class="avatar avatar-sm">${t.assigneeAvatar || 'UA'}</div>
                          <span>${escapeHtml(t.assigneeName || '')}</span>
                        </div>
                        <span>${formatDate(t.dueDate)}</span>
                      </div>
                    </div>
                  `;
                }).join('')}
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;

  // Attach drag and drop listeners
  let draggedTaskId = null;

  container.querySelectorAll('.kanban-card').forEach(card => {
    card.addEventListener('dragstart', (e) => {
      draggedTaskId = card.getAttribute('data-task-id');
      card.classList.add('dragging');
      e.dataTransfer.setData('text/plain', draggedTaskId);
      e.dataTransfer.effectAllowed = 'move';
    });

    card.addEventListener('dragend', () => {
      card.classList.remove('dragging');
      draggedTaskId = null;
    });

    card.addEventListener('click', () => {
      const taskId = card.getAttribute('data-task-id');
      store.openTaskDrawer(taskId);
    });
  });

  container.querySelectorAll('.kanban-column').forEach(col => {
    col.addEventListener('dragover', (e) => {
      e.preventDefault();
      e.dataTransfer.dropEffect = 'move';
      col.classList.add('drag-over');
    });

    col.addEventListener('dragleave', () => {
      col.classList.remove('drag-over');
    });

    col.addEventListener('drop', (e) => {
      e.preventDefault();
      col.classList.remove('drag-over');
      const targetStatus = col.getAttribute('data-status-id');
      if (draggedTaskId && targetStatus) {
        store.updateTaskStatus(draggedTaskId, targetStatus);
      }
    });
  });

  container.querySelector('#kanban-add-btn')?.addEventListener('click', () => {
    store.state.isModalOpen = true;
    store.state.activeModal = { type: 'createTask' };
    store.emit('modal:open');
  });
}
