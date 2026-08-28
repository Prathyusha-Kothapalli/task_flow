/* ==========================================================================
   TEST SUITE 1: STORAGE PERSISTENCE LAYER TESTS
   ========================================================================== */

import { describe, it, expect, beforeEach } from 'vitest';
import { storage } from '../src/js/services/storage.js';

describe('StorageService Persistence Tests', () => {
  beforeEach(() => {
    storage.clear();
  });

  it('should store and retrieve serializable JSON objects correctly', () => {
    const data = { id: 'test-1', name: 'TaskFlow Unit Test', active: true };
    storage.setItem('unit_test_key', data);

    const retrieved = storage.getItem('unit_test_key');
    expect(retrieved).toEqual(data);
  });

  it('should return default value when key does not exist', () => {
    const result = storage.getItem('non_existent_key', { fallback: true });
    expect(result).toEqual({ fallback: true });
  });

  it('should remove items correctly', () => {
    storage.setItem('remove_key', 'value_to_remove');
    expect(storage.getItem('remove_key')).toBe('value_to_remove');

    storage.removeItem('remove_key');
    expect(storage.getItem('remove_key')).toBeNull();
  });

  it('should export and import backup JSON string cleanly', () => {
    storage.setItem('k1', 'val1');
    storage.setItem('k2', 100);

    const jsonBackup = storage.exportData();
    expect(typeof jsonBackup).toBe('string');
    expect(jsonBackup).toContain('val1');

    storage.clear();
    expect(storage.getItem('k1')).toBeNull();

    const ok = storage.importData(jsonBackup);
    expect(ok).toBe(true);
    expect(storage.getItem('k1')).toBe('val1');
    expect(storage.getItem('k2')).toBe(100);
  });
});
