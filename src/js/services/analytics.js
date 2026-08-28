/* ==========================================================================
   ANALYTICS & KPI AGGREGATION ENGINE
   ========================================================================== */

export class AnalyticsService {
  static getMetrics(tasks = [], projects = [], team = []) {
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(t => t.status === 'done').length;
    const inProgressTasks = tasks.filter(t => t.status === 'in_progress').length;
    const reviewTasks = tasks.filter(t => t.status === 'review').length;
    const todoTasks = tasks.filter(t => t.status === 'todo').length;
    const backlogTasks = tasks.filter(t => t.status === 'backlog').length;

    const todayStr = new Date().toISOString().split('T')[0];
    const overdueTasks = tasks.filter(t => t.status !== 'done' && t.dueDate < todayStr).length;

    const totalEstHours = tasks.reduce((sum, t) => sum + (Number(t.estimatedHours) || 0), 0);
    const totalSpentHours = tasks.reduce((sum, t) => sum + (Number(t.spentHours) || 0), 0);

    const completionRate = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

    // Status breakdown
    const statusBreakdown = {
      backlog: backlogTasks,
      todo: todoTasks,
      in_progress: inProgressTasks,
      review: reviewTasks,
      done: completedTasks
    };

    // Priority breakdown
    const priorityBreakdown = {
      low: tasks.filter(t => t.priority === 'low').length,
      medium: tasks.filter(t => t.priority === 'medium').length,
      high: tasks.filter(t => t.priority === 'high').length,
      urgent: tasks.filter(t => t.priority === 'urgent').length
    };

    // Project progress calculation
    const projectStats = projects.map(proj => {
      const projTasks = tasks.filter(t => t.projectId === proj.id);
      const doneProjTasks = projTasks.filter(t => t.status === 'done').length;
      const pct = projTasks.length > 0 ? Math.round((doneProjTasks / projTasks.length) * 100) : 0;
      return {
        ...proj,
        totalTasks: projTasks.length,
        completedTasks: doneProjTasks,
        progressPct: pct
      };
    });

    // Team Workload calculation
    const teamWorkload = team.map(member => {
      const assignedTasks = tasks.filter(t => t.assigneeId === member.id && t.status !== 'done');
      const hours = assignedTasks.reduce((sum, t) => sum + (Number(t.estimatedHours) || 0), 0);
      return {
        ...member,
        assignedCount: assignedTasks.length,
        allocatedHours: hours,
        capacityPct: Math.min(100, Math.round((hours / 40) * 100))
      };
    });

    return {
      totalProjects: projects.length,
      totalTasks,
      completedTasks,
      inProgressTasks,
      overdueTasks,
      totalEstHours,
      totalSpentHours,
      completionRate,
      statusBreakdown,
      priorityBreakdown,
      projectStats,
      teamWorkload
    };
  }
}
