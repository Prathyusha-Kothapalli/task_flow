/* ==========================================================================
   DASHBOARD VIEW WITH LIVE ANALYTICS
   ========================================================================== */

import { store } from '../services/store.js';
import { AnalyticsService } from '../services/analytics.js';
import { formatDate, getPriorityBadge, getStatusBadge, escapeHtml } from '../utils/formatters.js';

export function renderDashboardView(container) {
  const state = store.getState();
  const metrics = AnalyticsService.getMetrics(state.tasks, state.projects, state.team);
  const currentUser = state.currentUser || { name: 'Demo User' };

  const urgentTasks = state.tasks.filter(t => t.priority === 'urgent' || t.priority === 'high').slice(0, 5);
  const recentTasks = [...state.tasks].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0, 5);

  container.innerHTML = `
    <div class="animate-fade-in">
      <!-- Header Banner -->
      <div class="flex items-center justify-between" style="margin-bottom: var(--space-6);">
        <div>
          <h1 class="font-bold text-2xl" style="letter-spacing: -0.5px;">Welcome back, ${escapeHtml(currentUser.name)} 👋</h1>
          <p class="text-xs text-muted" style="margin-top: 2px;">Here is your team's live task overview and project health status.</p>
        </div>
        <button id="dash-new-task-btn" class="btn btn-primary btn-sm">
          <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"></path></svg>
          <span>Create Task</span>
        </button>
      </div>

      <!-- KPI Grid -->
      <div class="dashboard-kpi-grid">
        <div class="card kpi-card">
          <div class="kpi-icon" style="background: rgba(99, 102, 241, 0.12); color: #6366f1;">
            <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"></path></svg>
          </div>
          <div>
            <div class="text-xs text-muted font-medium">Total Projects</div>
            <div class="font-bold text-2xl">${metrics.totalProjects}</div>
          </div>
        </div>

        <div class="card kpi-card">
          <div class="kpi-icon" style="background: rgba(59, 130, 246, 0.12); color: #3b82f6;">
            <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9 11l3 3L22 4M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"></path></svg>
          </div>
          <div>
            <div class="text-xs text-muted font-medium">Total Tasks</div>
            <div class="font-bold text-2xl">${metrics.totalTasks}</div>
          </div>
        </div>

        <div class="card kpi-card">
          <div class="kpi-icon" style="background: rgba(16, 185, 129, 0.12); color: #10b981;">
            <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path><path d="M22 4L12 14.01l-3-3"></path></svg>
          </div>
          <div>
            <div class="text-xs text-muted font-medium">Completion Rate</div>
            <div class="font-bold text-2xl">${metrics.completionRate}%</div>
          </div>
        </div>

        <div class="card kpi-card">
          <div class="kpi-icon" style="background: rgba(239, 68, 68, 0.12); color: #ef4444;">
            <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </div>
          <div>
            <div class="text-xs text-muted font-medium">Overdue Tasks</div>
            <div class="font-bold text-2xl">${metrics.overdueTasks}</div>
          </div>
        </div>
      </div>

      <!-- Charts & Breakdown Section -->
      <div class="dashboard-charts-grid">
        <!-- Project Progress Summary -->
        <div class="card flex flex-col gap-4">
          <div class="flex items-center justify-between">
            <span class="font-semibold text-sm">Active Projects Progress</span>
            <a href="#projects" class="text-xs font-semibold" style="color: var(--color-primary);">View All &rarr;</a>
          </div>
          <div class="flex flex-col gap-4">
            ${metrics.projectStats.map(p => `
              <div>
                <div class="flex justify-between items-center text-xs font-medium" style="margin-bottom: 4px;">
                  <span>${escapeHtml(p.name)}</span>
                  <span class="text-muted">${p.completedTasks}/${p.totalTasks} Tasks (${p.progressPct}%)</span>
                </div>
                <div class="progress-bar"><div class="progress-fill" style="width: ${p.progressPct}%; background: ${p.color || 'var(--color-primary)'};"></div></div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Task Status Breakdown -->
        <div class="card flex flex-col justify-between">
          <span class="font-semibold text-sm" style="margin-bottom: var(--space-3);">Task Status Breakdown</span>
          <div class="flex flex-col gap-2" style="flex-grow: 1; justify-content: center;">
            <div class="flex justify-between text-xs font-medium" style="padding: 6px 12px; background: var(--bg-surface-elevated); border-radius: var(--radius-sm);">
              <span>Completed (Done)</span>
              <span class="font-bold text-success">${metrics.statusBreakdown.done}</span>
            </div>
            <div class="flex justify-between text-xs font-medium" style="padding: 6px 12px; background: var(--bg-surface-elevated); border-radius: var(--radius-sm);">
              <span>In Progress</span>
              <span class="font-bold text-warning">${metrics.statusBreakdown.in_progress}</span>
            </div>
            <div class="flex justify-between text-xs font-medium" style="padding: 6px 12px; background: var(--bg-surface-elevated); border-radius: var(--radius-sm);">
              <span>Under Review</span>
              <span class="font-bold" style="color: var(--color-purple);">${metrics.statusBreakdown.review}</span>
            </div>
            <div class="flex justify-between text-xs font-medium" style="padding: 6px 12px; background: var(--bg-surface-elevated); border-radius: var(--radius-sm);">
              <span>To Do</span>
              <span class="font-bold text-info">${metrics.statusBreakdown.todo}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Urgent Deadlines & Activity Feed -->
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-6);">
        <div class="card">
          <div class="flex items-center justify-between" style="margin-bottom: var(--space-4);">
            <span class="font-semibold text-sm">High Priority & Urgent Tasks</span>
            <a href="#kanban" class="text-xs font-semibold" style="color: var(--color-primary);">Open Kanban &rarr;</a>
          </div>
          <div class="flex flex-col gap-2">
            ${urgentTasks.map(t => `
              <div class="task-row-item flex items-center justify-between" data-task-id="${t.id}" style="padding: 8px 12px; background: var(--bg-surface-elevated); border-radius: var(--radius-md); cursor: pointer;">
                <div>
                  <div class="font-medium text-xs">${escapeHtml(t.title)}</div>
                  <div class="text-xs text-muted" style="font-size: 11px; margin-top: 2px;">Assigned to: ${escapeHtml(t.assigneeName)}</div>
                </div>
                ${getPriorityBadge(t.priority)}
              </div>
            `).join('')}
          </div>
        </div>

        <div class="card">
          <div class="flex items-center justify-between" style="margin-bottom: var(--space-4);">
            <span class="font-semibold text-sm">Recently Added Tasks</span>
            <a href="#tasks" class="text-xs font-semibold" style="color: var(--color-primary);">View All &rarr;</a>
          </div>
          <div class="flex flex-col gap-2">
            ${recentTasks.map(t => `
              <div class="task-row-item flex items-center justify-between" data-task-id="${t.id}" style="padding: 8px 12px; background: var(--bg-surface-elevated); border-radius: var(--radius-md); cursor: pointer;">
                <div>
                  <div class="font-medium text-xs">${escapeHtml(t.title)}</div>
                  <div class="text-xs text-muted" style="font-size: 11px; margin-top: 2px;">Due: ${formatDate(t.dueDate)}</div>
                </div>
                ${getStatusBadge(t.status)}
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  `;

  // Attach event listeners
  container.querySelector('#dash-new-task-btn')?.addEventListener('click', () => {
    store.state.isModalOpen = true;
    store.state.activeModal = { type: 'createTask' };
    store.emit('modal:open');
  });

  container.querySelectorAll('.task-row-item').forEach(el => {
    el.addEventListener('click', () => {
      const taskId = el.getAttribute('data-task-id');
      store.openTaskDrawer(taskId);
    });
  });
}
