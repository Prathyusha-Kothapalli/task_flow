/* ==========================================================================
   TEST SUITE 2: REACTIVE CENTRAL STORE & EVENT BUS TESTS
   ========================================================================== */

import { describe, it, expect, beforeEach, vi } from 'vitest';
import { store } from '../src/js/services/store.js';

describe('Reactive Store & EventBus Tests', () => {
  beforeEach(() => {
    store.init();
  });

  it('should initialize store with loaded state from storage', () => {
    const state = store.getState();
    expect(Array.isArray(state.tasks)).toBe(true);
    expect(Array.isArray(state.projects)).toBe(true);
    expect(Array.isArray(state.team)).toBe(true);
  });

  it('should trigger event subscribers when events are emitted', () => {
    const listener = vi.fn();
    const unsubscribe = store.subscribe('tasks:updated', listener);

    store.addTask({ title: 'Subscriber Test Task', priority: 'high' });

    expect(listener).toHaveBeenCalled();
    unsubscribe();
  });

  it('should update filters and emit filter change event', () => {
    const filterListener = vi.fn();
    store.subscribe('filters:changed', filterListener);

    store.setFilters({ filterStatus: 'in_progress', filterPriority: 'urgent' });

    const state = store.getState();
    expect(state.filterStatus).toBe('in_progress');
    expect(state.filterPriority).toBe('urgent');
    expect(filterListener).toHaveBeenCalled();
  });
});
