/* ==========================================================================
   CALENDAR VIEW (MONTHLY / WEEKLY DEADLINE SCHEDULER)
   ========================================================================== */

import { store } from '../services/store.js';
import { escapeHtml } from '../utils/formatters.js';

let currentDate = new Date();

export function renderCalendarView(container) {
  const state = store.getState();
  const tasks = state.tasks || [];

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  // Days calculations
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const prevMonthDays = new Date(year, month, 0).getDate();

  const todayStr = new Date().toISOString().split('T')[0];

  const calendarCells = [];

  // Previous month trailing days
  for (let i = firstDay - 1; i >= 0; i--) {
    const d = prevMonthDays - i;
    calendarCells.push({ day: d, isOtherMonth: true, dateStr: '' });
  }

  // Current month days
  for (let d = 1; d <= daysInMonth; d++) {
    const monthStr = String(month + 1).padStart(2, '0');
    const dayStr = String(d).padStart(2, '0');
    const dateStr = `${year}-${monthStr}-${dayStr}`;
    calendarCells.push({ day: d, isOtherMonth: false, isToday: dateStr === todayStr, dateStr });
  }

  // Next month leading days
  const totalCells = Math.ceil(calendarCells.length / 7) * 7;
  const nextDays = totalCells - calendarCells.length;
  for (let d = 1; d <= nextDays; d++) {
    calendarCells.push({ day: d, isOtherMonth: true, dateStr: '' });
  }

  container.innerHTML = `
    <div class="animate-fade-in">
      <div class="flex items-center justify-between" style="margin-bottom: var(--space-6);">
        <div>
          <h1 class="font-bold text-2xl" style="letter-spacing: -0.5px;">Schedule & Deadlines</h1>
          <p class="text-xs text-muted" style="margin-top: 2px;">Track task delivery timelines and upcoming milestones.</p>
        </div>
        <div class="flex items-center gap-2">
          <button id="cal-prev-btn" class="btn btn-secondary btn-sm">&larr; Prev</button>
          <button id="cal-today-btn" class="btn btn-secondary btn-sm">Today</button>
          <button id="cal-next-btn" class="btn btn-secondary btn-sm">Next &rarr;</button>
          <span class="font-bold text-lg" style="margin-left: 12px;">${monthNames[month]} ${year}</span>
        </div>
      </div>

      <div class="calendar-container">
        <div class="calendar-grid">
          ${dayNames.map(d => `<div class="calendar-day-head">${d}</div>`).join('')}

          ${calendarCells.map(cell => {
            const cellTasks = cell.dateStr ? tasks.filter(t => t.dueDate === cell.dateStr) : [];
            const priorityColors = { low: '#10b981', medium: '#3b82f6', high: '#f59e0b', urgent: '#ef4444' };

            return `
              <div class="calendar-cell ${cell.isOtherMonth ? 'other-month' : ''} ${cell.isToday ? 'today' : ''}">
                <div class="calendar-day-number">${cell.day}</div>
                ${cellTasks.map(t => `
                  <div class="calendar-task-pill" data-task-id="${t.id}" style="border-left-color: ${priorityColors[t.priority] || '#3b82f6'};">
                    ${escapeHtml(t.title)}
                  </div>
                `).join('')}
              </div>
            `;
          }).join('')}
        </div>
      </div>
    </div>
  `;

  // Attach event listeners
  container.querySelector('#cal-prev-btn')?.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendarView(container);
  });

  container.querySelector('#cal-next-btn')?.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendarView(container);
  });

  container.querySelector('#cal-today-btn')?.addEventListener('click', () => {
    currentDate = new Date();
    renderCalendarView(container);
  });

  container.querySelectorAll('.calendar-task-pill').forEach(pill => {
    pill.addEventListener('click', (e) => {
      e.stopPropagation();
      const taskId = pill.getAttribute('data-task-id');
      store.openTaskDrawer(taskId);
    });
  });
}
