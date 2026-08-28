/* ==========================================================================
   USER PROFILE VIEW
   ========================================================================== */

import { store } from '../services/store.js';
import { toast } from '../components/toast.js';
import { escapeHtml } from '../utils/formatters.js';

export function renderProfileView(container) {
  const state = store.getState();
  const currentUser = state.currentUser || { name: 'Alex Morgan', email: 'demo@taskflow.com', role: 'Product Manager', avatar: 'AM' };

  container.innerHTML = `
    <div class="animate-fade-in" style="max-width: 680px;">
      <div style="margin-bottom: var(--space-6);">
        <h1 class="font-bold text-2xl" style="letter-spacing: -0.5px;">User Profile</h1>
        <p class="text-xs text-muted" style="margin-top: 2px;">Manage your account details and security settings.</p>
      </div>

      <div class="card" style="margin-bottom: var(--space-6);">
        <div class="flex items-center gap-4" style="margin-bottom: var(--space-6);">
          <div class="avatar avatar-xl">${currentUser.avatar}</div>
          <div>
            <h3 class="font-bold text-lg">${escapeHtml(currentUser.name)}</h3>
            <span class="badge badge-medium" style="margin-top: 2px;">${escapeHtml(currentUser.role || 'Member')}</span>
          </div>
        </div>

        <form id="profile-form">
          <div class="form-group">
            <label class="form-label">Full Name</label>
            <input type="text" id="prof-name" class="form-input" value="${escapeHtml(currentUser.name)}">
          </div>
          <div class="form-group">
            <label class="form-label">Email Address</label>
            <input type="email" id="prof-email" class="form-input" value="${escapeHtml(currentUser.email)}" disabled>
          </div>
          <div class="form-group">
            <label class="form-label">Job Title / Role</label>
            <input type="text" id="prof-role" class="form-input" value="${escapeHtml(currentUser.role || 'Software Engineer')}">
          </div>
          <button type="submit" class="btn btn-primary" style="margin-top: var(--space-4);">Save Profile</button>
        </form>
      </div>
    </div>
  `;

  container.querySelector('#profile-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = container.querySelector('#prof-name').value.trim();
    const role = container.querySelector('#prof-role').value.trim();

    store.state.currentUser = {
      ...store.state.currentUser,
      name,
      role,
      avatar: name.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2)
    };

    toast.success('Profile updated successfully!');
    renderProfileView(container);
  });
}
