/* ==========================================================================
   TEAM MEMBERS & WORKLOAD MANAGEMENT VIEW
   ========================================================================== */

import { store } from '../services/store.js';
import { AnalyticsService } from '../services/analytics.js';
import { escapeHtml } from '../utils/formatters.js';

export function renderTeamView(container) {
  const state = store.getState();
  const metrics = AnalyticsService.getMetrics(state.tasks, state.projects, state.team);

  container.innerHTML = `
    <div class="animate-fade-in">
      <div class="flex items-center justify-between" style="margin-bottom: var(--space-6);">
        <div>
          <h1 class="font-bold text-2xl" style="letter-spacing: -0.5px;">Team Members</h1>
          <p class="text-xs text-muted" style="margin-top: 2px;">Monitor team member workload, capacity, and active task distribution.</p>
        </div>
      </div>

      <div class="team-grid">
        ${metrics.teamWorkload.map(member => `
          <div class="card team-card">
            <div class="avatar avatar-xl" style="margin-bottom: var(--space-3); background: ${member.color || 'var(--color-primary)'};">
              ${member.avatar}
            </div>
            <h3 class="font-bold text-base">${escapeHtml(member.name)}</h3>
            <span class="badge" style="background: var(--bg-surface-elevated); color: var(--color-primary); margin-top: 4px; margin-bottom: var(--space-4);">
              ${escapeHtml(member.role)}
            </span>
            <div class="text-xs text-muted" style="margin-bottom: var(--space-4);">${escapeHtml(member.email)}</div>

            <div style="width: 100%; border-top: 1px solid var(--border-color); padding-top: var(--space-4);">
              <div class="flex justify-between items-center text-xs font-semibold" style="margin-bottom: 4px;">
                <span>Workload Capacity</span>
                <span>${member.allocatedHours}h / 40h (${member.capacityPct}%)</span>
              </div>
              <div class="progress-bar" style="margin-bottom: 8px;">
                <div class="progress-fill" style="width: ${member.capacityPct}%; background: ${member.capacityPct > 90 ? 'var(--color-danger)' : 'var(--color-primary)'};"></div>
              </div>
              <div class="text-xs text-muted">${member.assignedCount} active assigned tasks</div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}
