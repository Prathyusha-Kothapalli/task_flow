/* ==========================================================================
   LOCALSTORAGE PERSISTENCE LAYER & EXPORT/IMPORT UTILITIES
   ========================================================================== */

class StorageService {
  constructor() {
    this.memoryFallback = new Map();
    this.isSupported = this.checkSupport();
  }

  checkSupport() {
    try {
      const testKey = '__storage_test__';
      window.localStorage.setItem(testKey, testKey);
      window.localStorage.removeItem(testKey);
      return true;
    } catch (e) {
      console.warn('LocalStorage is not available, falling back to memory storage.', e);
      return false;
    }
  }

  getItem(key, defaultValue = null) {
    try {
      if (this.isSupported) {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : defaultValue;
      }
      return this.memoryFallback.get(key) ?? defaultValue;
    } catch (e) {
      console.error(`Error reading key "${key}" from Storage:`, e);
      return defaultValue;
    }
  }

  setItem(key, value) {
    try {
      if (this.isSupported) {
        window.localStorage.setItem(key, JSON.stringify(value));
      } else {
        this.memoryFallback.set(key, value);
      }
      return true;
    } catch (e) {
      console.error(`Error writing key "${key}" to Storage:`, e);
      return false;
    }
  }

  removeItem(key) {
    try {
      if (this.isSupported) {
        window.localStorage.removeItem(key);
      } else {
        this.memoryFallback.delete(key);
      }
      return true;
    } catch (e) {
      console.error(`Error removing key "${key}" from Storage:`, e);
      return false;
    }
  }

  clear() {
    try {
      if (this.isSupported) {
        window.localStorage.clear();
      } else {
        this.memoryFallback.clear();
      }
      return true;
    } catch (e) {
      console.error('Error clearing Storage:', e);
      return false;
    }
  }

  exportData() {
    const backup = {};
    if (this.isSupported) {
      for (let i = 0; i < window.localStorage.length; i++) {
        const key = window.localStorage.key(i);
        backup[key] = this.getItem(key);
      }
    } else {
      this.memoryFallback.forEach((value, key) => {
        backup[key] = value;
      });
    }
    return JSON.stringify(backup, null, 2);
  }

  importData(jsonString) {
    try {
      const data = JSON.parse(jsonString);
      if (typeof data !== 'object' || data === null) throw new Error('Invalid JSON format');

      this.clear();
      Object.keys(data).forEach(key => {
        this.setItem(key, data[key]);
      });
      return true;
    } catch (e) {
      console.error('Failed to import backup data:', e);
      return false;
    }
  }
}

export const storage = new StorageService();
