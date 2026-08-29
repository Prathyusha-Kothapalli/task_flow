import { describe, test, expect } from 'vitest';
const PriorityManager = require('../src/priorityManager');
const KanbanBoard = require('../src/kanbanBoard');

describe('TaskFlow Unit Tests', () => {
    test('PriorityManager sorts tasks correctly', () => {
        const tasks = [{ title: 'T1', priority: 'LOW' }, { title: 'T2', priority: 'URGENT' }];
        const sorted = PriorityManager.sortTasksByPriority(tasks);
        expect(sorted[0].priority).toBe('URGENT');
    });

    test('KanbanBoard transitions status', () => {
        const kb = new KanbanBoard();
        const updated = kb.moveTask({ id: 1, status: 'TODO' }, 'IN_PROGRESS');
        expect(updated.status).toBe('IN_PROGRESS');
    });
});