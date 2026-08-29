class KanbanBoard {
    constructor() {
        this.columns = ['TODO', 'IN_PROGRESS', 'REVIEW', 'DONE'];
    }
    moveTask(task, newStatus) {
        if (!this.columns.includes(newStatus)) {
            throw new Error(Invalid status: \);
        }
        return { ...task, status: newStatus, updatedAt: new Date().toISOString() };
    }
}
if (typeof module !== 'undefined') module.exports = KanbanBoard;