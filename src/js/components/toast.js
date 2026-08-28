/* ==========================================================================
   TOAST NOTIFICATION SYSTEM
   ========================================================================== */

import { escapeHtml } from '../utils/formatters.js';

class ToastService {
  constructor() {
    this.container = null;
    this.ensureContainer();
  }

  ensureContainer() {
    if (!this.container) {
      this.container = document.createElement('div');
      this.container.className = 'toast-container';
      document.body.appendChild(this.container);
    }
  }

  show(message, type = 'info', duration = 3500) {
    this.ensureContainer();
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;

    const icons = {
      success: '<svg width="18" height="18" fill="none" stroke="var(--color-success)" stroke-width="2" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path><path d="M22 4L12 14.01l-3-3"></path></svg>',
      danger: '<svg width="18" height="18" fill="none" stroke="var(--color-danger)" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="M15 9l-6 6M9 9l6 6"></path></svg>',
      warning: '<svg width="18" height="18" fill="none" stroke="var(--color-warning)" stroke-width="2" viewBox="0 0 24 24"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>',
      info: '<svg width="18" height="18" fill="none" stroke="var(--color-info)" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>'
    };

    toast.innerHTML = `
      ${icons[type] || icons.info}
      <div style="flex-grow: 1; font-size: 13px; font-weight: 500;">${escapeHtml(message)}</div>
      <button class="toast-close" style="color: var(--text-muted); padding: 2px;">&times;</button>
    `;

    toast.querySelector('.toast-close').addEventListener('click', () => {
      toast.remove();
    });

    this.container.appendChild(toast);

    setTimeout(() => {
      if (toast.parentNode) {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(100%)';
        toast.style.transition = 'all 0.25s ease';
        setTimeout(() => toast.remove(), 250);
      }
    }, duration);
  }

  success(msg) { this.show(msg, 'success'); }
  danger(msg) { this.show(msg, 'danger'); }
  warning(msg) { this.show(msg, 'warning'); }
  info(msg) { this.show(msg, 'info'); }
}

export const toast = new ToastService();
