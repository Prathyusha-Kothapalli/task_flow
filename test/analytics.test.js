/* ==========================================================================
   TEST SUITE 5: ANALYTICS & KPI CALCULATION ENGINE TESTS
   ========================================================================== */

import { describe, it, expect } from 'vitest';
import { AnalyticsService } from '../src/js/services/analytics.js';

describe('AnalyticsService Metrics Calculation', () => {
  it('should accurately compute overall task completion percentages and status counts', () => {
    const mockTasks = [
      { id: '1', status: 'done', priority: 'high', estimatedHours: 8, spentHours: 8, dueDate: '2026-08-01' },
      { id: '2', status: 'done', priority: 'medium', estimatedHours: 4, spentHours: 4, dueDate: '2026-08-05' },
      { id: '3', status: 'in_progress', priority: 'urgent', estimatedHours: 12, spentHours: 6, dueDate: '2026-08-10' },
      { id: '4', status: 'todo', priority: 'low', estimatedHours: 6, spentHours: 0, dueDate: '2026-08-15' }
    ];

    const mockProjects = [{ id: 'p1', name: 'Project 1' }];
    const mockTeam = [{ id: 'tm1', name: 'Member 1' }];

    const metrics = AnalyticsService.getMetrics(mockTasks, mockProjects, mockTeam);

    expect(metrics.totalTasks).toBe(4);
    expect(metrics.completedTasks).toBe(2);
    expect(metrics.completionRate).toBe(50); // 2 / 4 = 50%
    expect(metrics.totalEstHours).toBe(30);
    expect(metrics.totalSpentHours).toBe(18);
    expect(metrics.statusBreakdown.done).toBe(2);
    expect(metrics.statusBreakdown.in_progress).toBe(1);
    expect(metrics.statusBreakdown.todo).toBe(1);
  });
});
