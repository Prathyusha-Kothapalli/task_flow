/* ==========================================================================
   GLOBAL ACCESSIBLE MODAL CONTAINER & FORM BUILDERS
   ========================================================================== */

import { store } from '../services/store.js';
import { toast } from './toast.js';

export function renderModal(container) {
  const state = store.getState();
  const isModalOpen = state.isModalOpen;
  const activeModal = state.activeModal;

  if (!isModalOpen || !activeModal) {
    container.innerHTML = `
      <div class="modal-backdrop">
        <div class="modal-container"></div>
      </div>
    `;
    return;
  }

  let title = '';
  let bodyHtml = '';
  let onSave = () => {};

  if (activeModal.type === 'createTask') {
    title = 'Create New Task';
    bodyHtml = `
      <form id="modal-task-form">
        <div class="form-group">
          <label class="form-label">Task Title *</label>
          <input type="text" id="modal-task-title" class="form-input" placeholder="e.g. Implement OAuth2 Login Flow" required>
        </div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-4);">
          <div class="form-group">
            <label class="form-label">Project</label>
            <select id="modal-task-project" class="form-select">
              ${state.projects.map(p => `<option value="${p.id}">${p.name}</option>`).join('')}
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">Assignee</label>
            <select id="modal-task-assignee" class="form-select">
              ${state.team.map(m => `<option value="${m.id}">${m.name} (${m.role})</option>`).join('')}
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">Priority</label>
            <select id="modal-task-priority" class="form-select">
              <option value="low">Low</option>
              <option value="medium" selected>Medium</option>
              <option value="high">High</option>
              <option value="urgent">Urgent</option>
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">Status</label>
            <select id="modal-task-status" class="form-select">
              <option value="backlog">Backlog</option>
              <option value="todo" selected>To Do</option>
              <option value="in_progress">In Progress</option>
              <option value="review">Review</option>
              <option value="done">Done</option>
            </select>
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">Due Date</label>
          <input type="date" id="modal-task-due" class="form-input" value="${new Date(Date.now() + 7 * 24 * 3600 * 1000).toISOString().split('T')[0]}">
        </div>
        <div class="form-group">
          <label class="form-label">Description</label>
          <textarea id="modal-task-desc" class="form-textarea" rows="3" placeholder="Add task scope, acceptance criteria..."></textarea>
        </div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-4);">
          <div class="form-group">
            <label class="form-label">Estimated Hours</label>
            <input type="number" id="modal-task-est" class="form-input" value="8">
          </div>
          <div class="form-group">
            <label class="form-label">Tag / Label</label>
            <input type="text" id="modal-task-label" class="form-input" value="Feature">
          </div>
        </div>
      </form>
    `;

    onSave = () => {
      const taskTitle = container.querySelector('#modal-task-title').value.trim();
      if (!taskTitle) {
        toast.danger('Please provide a task title');
        return false;
      }
      const projId = container.querySelector('#modal-task-project').value;
      const assigneeId = container.querySelector('#modal-task-assignee').value;
      const assignee = state.team.find(m => m.id === assigneeId);
      const priority = container.querySelector('#modal-task-priority').value;
      const status = container.querySelector('#modal-task-status').value;
      const dueDate = container.querySelector('#modal-task-due').value;
      const description = container.querySelector('#modal-task-desc').value;
      const estHours = Number(container.querySelector('#modal-task-est').value);
      const label = container.querySelector('#modal-task-label').value.trim() || 'Feature';

      store.addTask({
        title: taskTitle,
        projectId: projId,
        assigneeId,
        assigneeName: assignee ? assignee.name : 'Unassigned',
        assigneeAvatar: assignee ? assignee.avatar : 'UN',
        priority,
        status,
        dueDate,
        description,
        estimatedHours: estHours,
        labels: [label]
      });

      toast.success('Task created successfully!');
      return true;
    };

  } else if (activeModal.type === 'createProject') {
    title = 'Create New Project';
    bodyHtml = `
      <form id="modal-proj-form">
        <div class="form-group">
          <label class="form-label">Project Name *</label>
          <input type="text" id="modal-proj-name" class="form-input" placeholder="e.g. NextGen Web Portal" required>
        </div>
        <div class="form-group">
          <label class="form-label">Category</label>
          <input type="text" id="modal-proj-category" class="form-input" value="Frontend Development">
        </div>
        <div class="form-group">
          <label class="form-label">Description</label>
          <textarea id="modal-proj-desc" class="form-textarea" rows="3" placeholder="Brief project overview..."></textarea>
        </div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-4);">
          <div class="form-group">
            <label class="form-label">Budget Hours</label>
            <input type="number" id="modal-proj-budget" class="form-input" value="160">
          </div>
          <div class="form-group">
            <label class="form-label">Badge Color</label>
            <input type="color" id="modal-proj-color" class="form-input" value="#6366f1" style="height: 42px; padding: 2px;">
          </div>
        </div>
      </form>
    `;

    onSave = () => {
      const projName = container.querySelector('#modal-proj-name').value.trim();
      if (!projName) {
        toast.danger('Please provide a project name');
        return false;
      }
      const category = container.querySelector('#modal-proj-category').value;
      const description = container.querySelector('#modal-proj-desc').value;
      const budgetHours = Number(container.querySelector('#modal-proj-budget').value);
      const color = container.querySelector('#modal-proj-color').value;

      store.addProject({
        name: projName,
        category,
        description,
        budgetHours,
        color
      });

      toast.success('Project created successfully!');
      return true;
    };
  }

  container.innerHTML = `
    <div class="modal-backdrop open">
      <div class="modal-container animate-fade-in">
        <div class="modal-header">
          <span class="font-bold text-lg">${title}</span>
          <button id="modal-close-btn" class="btn btn-ghost btn-icon">&times;</button>
        </div>
        <div class="modal-body">
          ${bodyHtml}
        </div>
        <div class="modal-footer">
          <button id="modal-cancel-btn" class="btn btn-secondary">Cancel</button>
          <button id="modal-submit-btn" class="btn btn-primary">Create</button>
        </div>
      </div>
    </div>
  `;

  const closeModal = () => {
    store.state.isModalOpen = false;
    store.state.activeModal = null;
    renderModal(container);
  };

  container.querySelector('#modal-close-btn')?.addEventListener('click', closeModal);
  container.querySelector('#modal-cancel-btn')?.addEventListener('click', closeModal);
  container.querySelector('.modal-backdrop')?.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-backdrop')) closeModal();
  });

  container.querySelector('#modal-submit-btn')?.addEventListener('click', () => {
    if (onSave()) {
      closeModal();
    }
  });
}
