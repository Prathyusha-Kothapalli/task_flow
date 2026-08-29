const PRIORITIES = { LOW: 1, MEDIUM: 2, HIGH: 3, URGENT: 4 };

class PriorityManager {
    static sortTasksByPriority(tasks, ascending = false) {
        return [...tasks].sort((a, b) => {
            const pA = PRIORITIES[a.priority?.toUpperCase()] || 0;
            const pB = PRIORITIES[b.priority?.toUpperCase()] || 0;
            return ascending ? pA - pB : pB - pA;
        });
    }
}
if (typeof module !== 'undefined') module.exports = PriorityManager;