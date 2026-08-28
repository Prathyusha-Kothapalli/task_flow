/* ==========================================================================
   TASK DETAIL SLIDE-OVER DRAWER COMPONENT
   ========================================================================== */

import { store } from '../services/store.js';
import { formatDate, formatRelativeTime, getPriorityBadge, getStatusBadge, escapeHtml } from '../utils/formatters.js';
import { toast } from './toast.js';

export function renderDrawer(container) {
  const isDrawerOpen = store.state.isDrawerOpen;
  const taskId = store.state.selectedTaskId;
  const task = store.state.tasks.find(t => t.id === taskId);
  const team = store.state.team || [];
  const projects = store.state.projects || [];

  if (!isDrawerOpen || !task) {
    container.innerHTML = `
      <div class="drawer-backdrop">
        <div class="drawer-panel"></div>
      </div>
    `;
    return;
  }

  const project = projects.find(p => p.id === task.projectId) || { name: 'General' };
  const checklistCompleted = (task.checklist || []).filter(c => c.completed).length;
  const checklistTotal = (task.checklist || []).length;
  const checklistPct = checklistTotal > 0 ? Math.round((checklistCompleted / checklistTotal) * 100) : 0;

  container.innerHTML = `
    <div class="drawer-backdrop open">
      <div class="drawer-panel animate-fade-in">
        <!-- Header -->
        <div class="drawer-header" style="padding: var(--space-4) var(--space-6); border-bottom: 1px solid var(--border-color); display: flex; align-items: center; justify-content: space-between; background: var(--bg-surface-elevated);">
          <div class="flex items-center gap-2">
            <span class="badge" style="background: ${project.color || 'var(--color-primary)'}; color: #fff;">${escapeHtml(project.name)}</span>
            <span class="text-xs text-muted">ID: ${task.id}</span>
          </div>
          <button id="close-drawer-btn" class="btn btn-ghost btn-icon">&times;</button>
        </div>

        <!-- Body -->
        <div class="drawer-body" style="padding: var(--space-6); overflow-y: auto; flex-grow: 1;">
          <input type="text" id="drawer-task-title" class="form-input" value="${escapeHtml(task.title)}" style="font-size: 18px; font-weight: 700; background: transparent; border: 1px transparent solid; padding: 4px 0; margin-bottom: 12px;">

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-4); margin-bottom: var(--space-6); background: var(--bg-surface-elevated); padding: var(--space-4); border-radius: var(--radius-md);">
            <div>
              <label class="form-label text-xs text-muted">Status</label>
              <select id="drawer-status-select" class="form-select text-xs font-semibold">
                <option value="backlog" ${task.status === 'backlog' ? 'selected' : ''}>Backlog</option>
                <option value="todo" ${task.status === 'todo' ? 'selected' : ''}>To Do</option>
                <option value="in_progress" ${task.status === 'in_progress' ? 'selected' : ''}>In Progress</option>
                <option value="review" ${task.status === 'review' ? 'selected' : ''}>Review</option>
                <option value="done" ${task.status === 'done' ? 'selected' : ''}>Done</option>
              </select>
            </div>
            <div>
              <label class="form-label text-xs text-muted">Priority</label>
              <select id="drawer-priority-select" class="form-select text-xs font-semibold">
                <option value="low" ${task.priority === 'low' ? 'selected' : ''}>Low</option>
                <option value="medium" ${task.priority === 'medium' ? 'selected' : ''}>Medium</option>
                <option value="high" ${task.priority === 'high' ? 'selected' : ''}>High</option>
                <option value="urgent" ${task.priority === 'urgent' ? 'selected' : ''}>Urgent</option>
              </select>
            </div>
            <div>
              <label class="form-label text-xs text-muted">Assignee</label>
              <select id="drawer-assignee-select" class="form-select text-xs">
                ${team.map(m => `
                  <option value="${m.id}" ${task.assigneeId === m.id ? 'selected' : ''}>${escapeHtml(m.name)} (${escapeHtml(m.role)})</option>
                `).join('')}
              </select>
            </div>
            <div>
              <label class="form-label text-xs text-muted">Due Date</label>
              <input type="date" id="drawer-due-date" class="form-input text-xs" value="${task.dueDate || ''}">
            </div>
          </div>

          <!-- Description -->
          <div class="form-group">
            <label class="form-label">Description</label>
            <textarea id="drawer-description" class="form-textarea" rows="3">${escapeHtml(task.description || '')}</textarea>
          </div>

          <!-- Hours & Progress -->
          <div style="margin-bottom: var(--space-6); background: var(--bg-surface-elevated); padding: var(--space-4); border-radius: var(--radius-md);">
            <div class="flex justify-between items-center text-xs font-semibold" style="margin-bottom: 6px;">
              <span>Progress Tracker</span>
              <span>${task.progress || 0}% Completed</span>
            </div>
            <input type="range" id="drawer-progress-slider" min="0" max="100" value="${task.progress || 0}" style="width: 100%; margin-bottom: 12px; accent-color: var(--color-primary);">
            <div class="flex gap-4">
              <div style="flex: 1;">
                <label class="form-label text-xs text-muted">Est. Hours</label>
                <input type="number" id="drawer-est-hours" class="form-input text-xs" value="${task.estimatedHours || 0}">
              </div>
              <div style="flex: 1;">
                <label class="form-label text-xs text-muted">Spent Hours</label>
                <input type="number" id="drawer-spent-hours" class="form-input text-xs" value="${task.spentHours || 0}">
              </div>
            </div>
          </div>

          <!-- Subtask Checklist -->
          <div style="margin-bottom: var(--space-6);">
            <div class="flex items-center justify-between" style="margin-bottom: 8px;">
              <span class="font-semibold text-sm">Subtask Checklist (${checklistCompleted}/${checklistTotal})</span>
              <span class="text-xs text-muted">${checklistPct}%</span>
            </div>
            <div class="progress-bar" style="margin-bottom: 12px;"><div class="progress-fill" style="width: ${checklistPct}%;"></div></div>
            
            <div id="drawer-checklist-items" class="flex flex-col gap-2" style="margin-bottom: 10px;">
              ${(task.checklist || []).map((item, idx) => `
                <div class="flex items-center justify-between" style="padding: 6px 10px; background: var(--bg-surface-elevated); border-radius: var(--radius-sm);">
                  <label class="flex items-center gap-2 text-xs" style="cursor: pointer; text-decoration: ${item.completed ? 'line-through' : 'none'}; opacity: ${item.completed ? 0.6 : 1};">
                    <input type="checkbox" class="checklist-item-check" data-idx="${idx}" ${item.completed ? 'checked' : ''}>
                    <span>${escapeHtml(item.text)}</span>
                  </label>
                  <button class="btn btn-ghost btn-xs remove-checklist-item" data-idx="${idx}">&times;</button>
                </div>
              `).join('')}
            </div>
            
            <div class="flex gap-2">
              <input type="text" id="new-checklist-input" class="form-input text-xs" placeholder="Add new subtask item...">
              <button id="add-checklist-btn" class="btn btn-secondary btn-xs">Add</button>
            </div>
          </div>

          <!-- Comments Stream -->
          <div>
            <div class="font-semibold text-sm" style="margin-bottom: 8px;">Activity & Comments (${(task.comments || []).length})</div>
            <div id="drawer-comments-stream" class="flex flex-col gap-3" style="margin-bottom: 12px; max-height: 200px; overflow-y: auto;">
              ${(task.comments || []).length === 0 ? '<div class="text-xs text-muted">No comments yet. Start the conversation!</div>' : ''}
              ${(task.comments || []).map(cmt => `
                <div style="background: var(--bg-surface-elevated); padding: 8px 12px; border-radius: var(--radius-md);">
                  <div class="flex items-center justify-between" style="margin-bottom: 4px;">
                    <span class="font-semibold text-xs">${escapeHtml(cmt.authorName)}</span>
                    <span class="text-xs text-subtle" style="font-size: 10px;">${formatRelativeTime(cmt.timestamp)}</span>
                  </div>
                  <div class="text-xs text-muted">${escapeHtml(cmt.text)}</div>
                </div>
              `).join('')}
            </div>

            <div class="flex gap-2">
              <input type="text" id="new-comment-input" class="form-input text-xs" placeholder="Write a comment...">
              <button id="post-comment-btn" class="btn btn-primary btn-xs">Post</button>
            </div>
          </div>
        </div>

        <!-- Footer -->
        <div class="drawer-footer" style="padding: var(--space-4) var(--space-6); border-top: 1px solid var(--border-color); display: flex; items-center; justify-content: space-between; background: var(--bg-surface-elevated);">
          <button id="delete-task-btn" class="btn btn-danger btn-sm">Delete Task</button>
          <button id="save-task-drawer-btn" class="btn btn-primary btn-sm">Save Changes</button>
        </div>
      </div>
    </div>
  `;

  // Attach drawer event listeners
  const closeBtn = container.querySelector('#close-drawer-btn');
  const backdrop = container.querySelector('.drawer-backdrop');
  const saveBtn = container.querySelector('#save-task-drawer-btn');
  const deleteBtn = container.querySelector('#delete-task-btn');
  const addChecklistBtn = container.querySelector('#add-checklist-btn');
  const newChecklistInput = container.querySelector('#new-checklist-input');
  const postCommentBtn = container.querySelector('#post-comment-btn');
  const newCommentInput = container.querySelector('#new-comment-input');

  const closeDrawer = () => store.closeDrawer();

  closeBtn?.addEventListener('click', closeDrawer);
  backdrop?.addEventListener('click', (e) => {
    if (e.target === backdrop) closeDrawer();
  });

  saveBtn?.addEventListener('click', () => {
    const title = container.querySelector('#drawer-task-title').value.trim();
    const status = container.querySelector('#drawer-status-select').value;
    const priority = container.querySelector('#drawer-priority-select').value;
    const assigneeId = container.querySelector('#drawer-assignee-select').value;
    const assignee = team.find(m => m.id === assigneeId);
    const dueDate = container.querySelector('#drawer-due-date').value;
    const description = container.querySelector('#drawer-description').value;
    const progress = Number(container.querySelector('#drawer-progress-slider').value);
    const estHours = Number(container.querySelector('#drawer-est-hours').value);
    const spentHours = Number(container.querySelector('#drawer-spent-hours').value);

    store.updateTask(task.id, {
      title,
      status,
      priority,
      assigneeId,
      assigneeName: assignee ? assignee.name : task.assigneeName,
      assigneeAvatar: assignee ? assignee.avatar : task.assigneeAvatar,
      dueDate,
      description,
      progress,
      estimatedHours: estHours,
      spentHours
    });

    toast.success('Task updated successfully!');
    closeDrawer();
  });

  deleteBtn?.addEventListener('click', () => {
    if (confirm(`Are you sure you want to delete task "${task.title}"?`)) {
      store.deleteTask(task.id);
      toast.info('Task deleted');
    }
  });

  // Checklist Check/Uncheck & Remove
  container.querySelectorAll('.checklist-item-check').forEach(chk => {
    chk.addEventListener('change', (e) => {
      const idx = Number(e.target.getAttribute('data-idx'));
      const updatedChecklist = [...(task.checklist || [])];
      updatedChecklist[idx].completed = e.target.checked;
      store.updateTask(task.id, { checklist: updatedChecklist });
      renderDrawer(container);
    });
  });

  container.querySelectorAll('.remove-checklist-item').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const idx = Number(e.target.getAttribute('data-idx'));
      const updatedChecklist = (task.checklist || []).filter((_, i) => i !== idx);
      store.updateTask(task.id, { checklist: updatedChecklist });
      renderDrawer(container);
    });
  });

  addChecklistBtn?.addEventListener('click', () => {
    const text = newChecklistInput.value.trim();
    if (!text) return;
    const updatedChecklist = [...(task.checklist || []), { id: `chk-${Date.now()}`, text, completed: false }];
    store.updateTask(task.id, { checklist: updatedChecklist });
    renderDrawer(container);
  });

  postCommentBtn?.addEventListener('click', () => {
    const text = newCommentInput.value.trim();
    if (!text) return;
    store.addCommentToTask(task.id, text);
    renderDrawer(container);
  });
}
