/* ==========================================================================
   TEST SUITE 3: AUTHENTICATION SERVICE TESTS
   ========================================================================== */

import { describe, it, expect, beforeEach } from 'vitest';
import { auth } from '../src/js/services/auth.js';
import { storage } from '../src/js/services/storage.js';
import { CONFIG } from '../src/js/config.js';

describe('AuthService Authentication Tests', () => {
  beforeEach(() => {
    storage.clear();
    auth.logout();
  });

  it('should authenticate demo user credentials successfully', () => {
    const res = auth.login(CONFIG.DEMO_USER.email, CONFIG.DEMO_USER.password);
    expect(res.success).toBe(true);
    expect(res.user.email).toBe(CONFIG.DEMO_USER.email);
    expect(auth.isAuthenticated()).toBe(true);
  });

  it('should reject invalid credentials', () => {
    const res = auth.login('wrong@email.com', 'InvalidPassword');
    expect(res.success).toBe(false);
    expect(auth.isAuthenticated()).toBe(false);
  });

  it('should register a new user and create an active session', () => {
    const res = auth.register('Jane Doe', 'jane.d@taskflow.com', 'Pass1234!', 'Senior QA Engineer');
    expect(res.success).toBe(true);
    expect(res.user.name).toBe('Jane Doe');
    expect(res.user.avatar).toBe('JD');
    expect(auth.isAuthenticated()).toBe(true);
  });

  it('should clear session state on logout', () => {
    auth.login(CONFIG.DEMO_USER.email, CONFIG.DEMO_USER.password);
    expect(auth.isAuthenticated()).toBe(true);

    auth.logout();
    expect(auth.isAuthenticated()).toBe(false);
    expect(auth.getCurrentUser()).toBeNull();
  });
});
