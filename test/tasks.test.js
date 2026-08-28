/* ==========================================================================
   TEST SUITE 4: TASK DISPATCHING & MANIPULATION TESTS
   ========================================================================== */

import { describe, it, expect, beforeEach } from 'vitest';
import { store } from '../src/js/services/store.js';

describe('Task Operations & Dispatchers', () => {
  beforeEach(() => {
    store.init();
  });

  it('should create a new task with default properties', () => {
    const newTask = store.addTask({
      title: 'Unit Test Task Creation',
      priority: 'high',
      status: 'todo',
      estimatedHours: 10
    });

    expect(newTask.id).toBeDefined();
    expect(newTask.title).toBe('Unit Test Task Creation');
    expect(newTask.priority).toBe('high');
    expect(newTask.status).toBe('todo');

    const tasks = store.getState().tasks;
    expect(tasks.some(t => t.id === newTask.id)).toBe(true);
  });

  it('should update task status and auto-adjust progress', () => {
    const task = store.addTask({ title: 'Status Update Task', status: 'todo', progress: 10 });
    
    store.updateTaskStatus(task.id, 'done');

    const updated = store.getState().tasks.find(t => t.id === task.id);
    expect(updated.status).toBe('done');
    expect(updated.progress).toBe(100);
  });

  it('should add comments to a task', () => {
    const task = store.addTask({ title: 'Comment Task', comments: [] });
    
    store.addCommentToTask(task.id, 'This is a test comment from Vitest.');

    const updated = store.getState().tasks.find(t => t.id === task.id);
    expect(updated.comments.length).toBe(1);
    expect(updated.comments[0].text).toBe('This is a test comment from Vitest.');
  });

  it('should delete a task correctly', () => {
    const task = store.addTask({ title: 'Task to Delete' });
    expect(store.getState().tasks.some(t => t.id === task.id)).toBe(true);

    store.deleteTask(task.id);
    expect(store.getState().tasks.some(t => t.id === task.id)).toBe(false);
  });
});
