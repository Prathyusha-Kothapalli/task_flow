/* ==========================================================================
   REPORTS & ANALYTICS VIEW (CUSTOM SVG CHARTS & DATA EXPORT)
   ========================================================================== */

import { store } from '../services/store.js';
import { AnalyticsService } from '../services/analytics.js';
import { storage } from '../services/storage.js';
import { toast } from '../components/toast.js';

export function renderReportsView(container) {
  const state = store.getState();
  const metrics = AnalyticsService.getMetrics(state.tasks, state.projects, state.team);

  const statusData = [
    { label: 'Completed', count: metrics.statusBreakdown.done, color: '#10b981' },
    { label: 'In Progress', count: metrics.statusBreakdown.in_progress, color: '#f59e0b' },
    { label: 'Under Review', count: metrics.statusBreakdown.review, color: '#8b5cf6' },
    { label: 'To Do', count: metrics.statusBreakdown.todo, color: '#3b82f6' },
    { label: 'Backlog', count: metrics.statusBreakdown.backlog, color: '#94a3b8' }
  ];

  const priorityData = [
    { label: 'Low', count: metrics.priorityBreakdown.low, color: '#10b981' },
    { label: 'Medium', count: metrics.priorityBreakdown.medium, color: '#3b82f6' },
    { label: 'High', count: metrics.priorityBreakdown.high, color: '#f59e0b' },
    { label: 'Urgent', count: metrics.priorityBreakdown.urgent, color: '#ef4444' }
  ];

  const maxPriorityCount = Math.max(...priorityData.map(p => p.count), 1);

  container.innerHTML = `
    <div class="animate-fade-in">
      <div class="flex items-center justify-between" style="margin-bottom: var(--space-6);">
        <div>
          <h1 class="font-bold text-2xl" style="letter-spacing: -0.5px;">Reports & Analytics</h1>
          <p class="text-xs text-muted" style="margin-top: 2px;">Comprehensive task velocity, status breakdowns, and data export tools.</p>
        </div>
        <div class="flex items-center gap-3">
          <button id="export-csv-btn" class="btn btn-secondary btn-sm">
            <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"></path></svg>
            <span>Export CSV</span>
          </button>
          <button id="export-json-btn" class="btn btn-primary btn-sm">
            <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"></path></svg>
            <span>Backup JSON</span>
          </button>
        </div>
      </div>

      <div class="reports-grid">
        <!-- SVG Status Breakdown Donut Chart -->
        <div class="card flex flex-col justify-between">
          <h3 class="font-semibold text-base" style="margin-bottom: var(--space-4);">Task Status Breakdown</h3>
          <div class="chart-box">
            <svg viewBox="0 0 100 100" class="svg-chart" style="max-width: 220px; max-height: 220px; transform: rotate(-90deg);">
              ${renderDonutSvg(statusData, metrics.totalTasks)}
            </svg>
          </div>
          <div class="flex flex-wrap gap-3 justify-center text-xs" style="margin-top: var(--space-4);">
            ${statusData.map(d => `
              <div class="flex items-center gap-1">
                <span style="width: 8px; height: 8px; border-radius: 50%; background: ${d.color};"></span>
                <span>${d.label}: <b>${d.count}</b></span>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- SVG Priority Bar Chart -->
        <div class="card flex flex-col justify-between">
          <h3 class="font-semibold text-base" style="margin-bottom: var(--space-4);">Priority Distribution</h3>
          <div class="chart-box flex items-end justify-between gap-4" style="padding: 20px 10px; min-height: 220px;">
            ${priorityData.map(p => {
              const hPct = Math.round((p.count / maxPriorityCount) * 100);
              return `
                <div style="flex: 1; display: flex; flex-direction: column; align-items: center; gap: 8px; height: 100%; justify-content: flex-end;">
                  <span class="font-bold text-xs">${p.count}</span>
                  <div style="width: 100%; max-width: 40px; height: ${Math.max(12, hPct)}%; background: ${p.color}; border-radius: 4px 4px 0 0; transition: height 0.4s ease;"></div>
                  <span class="text-xs text-muted font-medium">${p.label}</span>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      </div>
    </div>
  `;

  // Attach CSV / JSON export handlers
  container.querySelector('#export-json-btn')?.addEventListener('click', () => {
    const jsonStr = storage.exportData();
    downloadFile(jsonStr, `taskflow-backup-${new Date().toISOString().split('T')[0]}.json`, 'application/json');
    toast.success('Backup JSON downloaded');
  });

  container.querySelector('#export-csv-btn')?.addEventListener('click', () => {
    const csvContent = generateTasksCsv(state.tasks);
    downloadFile(csvContent, `taskflow-tasks-${new Date().toISOString().split('T')[0]}.csv`, 'text/csv');
    toast.success('Tasks CSV exported');
  });
}

function renderDonutSvg(data, total) {
  if (total === 0) return '';
  let accumulatedAngle = 0;
  const radius = 35;
  const cx = 50;
  const cy = 50;

  return data.map(item => {
    const pct = item.count / total;
    const strokeDasharray = `${pct * 220} 220`;
    const strokeDashoffset = -accumulatedAngle * 220;
    accumulatedAngle += pct;

    return `
      <circle cx="${cx}" cy="${cy}" r="${radius}" fill="none" stroke="${item.color}" stroke-width="14" stroke-dasharray="${strokeDasharray}" stroke-dashoffset="${strokeDashoffset}" />
    `;
  }).join('');
}

function generateTasksCsv(tasks) {
  const headers = ['Task ID', 'Title', 'Project ID', 'Assignee', 'Priority', 'Status', 'Due Date', 'Progress %', 'Est Hours', 'Spent Hours'];
  const rows = tasks.map(t => [
    t.id,
    `"${t.title.replace(/"/g, '""')}"`,
    t.projectId,
    `"${t.assigneeName}"`,
    t.priority,
    t.status,
    t.dueDate,
    t.progress,
    t.estimatedHours,
    t.spentHours
  ]);
  return [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
}

function downloadFile(content, fileName, mimeType) {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = fileName;
  a.click();
  URL.revokeObjectURL(url);
}
