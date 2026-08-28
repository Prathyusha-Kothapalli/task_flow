/* ==========================================================================
   AUTHENTICATION & USER SESSION SERVICE
   ========================================================================== */

import { CONFIG } from '../config.js';
import { storage } from './storage.js';
import { store } from './store.js';

class AuthService {
  constructor() {
    this.currentUser = storage.getItem(CONFIG.STORAGE_KEYS.SESSION, null);
  }

  isAuthenticated() {
    return !!this.currentUser;
  }

  getCurrentUser() {
    return this.currentUser;
  }

  login(email, password) {
    const users = storage.getItem(CONFIG.STORAGE_KEYS.USERS, []);
    
    // Check against demo user explicitly or registered users list
    if (email.toLowerCase() === CONFIG.DEMO_USER.email.toLowerCase() && password === CONFIG.DEMO_USER.password) {
      const demoSession = {
        id: 'usr-demo',
        email: CONFIG.DEMO_USER.email,
        name: CONFIG.DEMO_USER.name,
        role: CONFIG.DEMO_USER.role,
        avatar: CONFIG.DEMO_USER.avatar
      };
      this.setSession(demoSession);
      return { success: true, user: demoSession };
    }

    const user = users.find(u => u.email.toLowerCase() === email.toLowerCase() && u.password === password);
    if (user) {
      const sessionData = {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role || 'Member',
        avatar: user.avatar || user.name.substring(0, 2).toUpperCase()
      };
      this.setSession(sessionData);
      return { success: true, user: sessionData };
    }

    return { success: false, message: 'Invalid email or password. Use demo account or register.' };
  }

  register(name, email, password, role = 'Software Engineer') {
    const users = storage.getItem(CONFIG.STORAGE_KEYS.USERS, []);
    const existing = users.find(u => u.email.toLowerCase() === email.toLowerCase());

    if (existing) {
      return { success: false, message: 'An account with this email already exists.' };
    }

    const newUser = {
      id: `usr-${Date.now()}`,
      name,
      email,
      password,
      role,
      avatar: name.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2),
      createdAt: new Date().toISOString()
    };

    users.push(newUser);
    storage.setItem(CONFIG.STORAGE_KEYS.USERS, users);

    const sessionData = {
      id: newUser.id,
      email: newUser.email,
      name: newUser.name,
      role: newUser.role,
      avatar: newUser.avatar
    };

    this.setSession(sessionData);
    return { success: true, user: sessionData };
  }

  logout() {
    this.currentUser = null;
    storage.removeItem(CONFIG.STORAGE_KEYS.SESSION);
    store.state.currentUser = null;
    store.emit('auth:logout');
  }

  setSession(user) {
    this.currentUser = user;
    storage.setItem(CONFIG.STORAGE_KEYS.SESSION, user);
    store.state.currentUser = user;
    store.emit('auth:login', user);
  }
}

export const auth = new AuthService();
