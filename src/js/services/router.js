/* ==========================================================================
   CLIENT-SIDE HASH ROUTER
   ========================================================================== */

import { auth } from './auth.js';
import { store } from './store.js';

class Router {
  constructor() {
    this.routes = new Map();
    this.currentRoute = 'dashboard';
    
    window.addEventListener('hashchange', () => this.handleRoute());
  }

  addRoute(path, handler) {
    this.routes.set(path, handler);
  }

  navigate(path) {
    window.location.hash = `#${path}`;
  }

  handleRoute() {
    let hash = window.location.hash.replace('#', '') || 'dashboard';
    
    if (!auth.isAuthenticated() && hash !== 'login' && hash !== 'register') {
      hash = 'login';
      window.location.hash = '#login';
    } else if (auth.isAuthenticated() && (hash === 'login' || hash === 'register')) {
      hash = 'dashboard';
      window.location.hash = '#dashboard';
    }

    this.currentRoute = hash;
    store.state.activeView = hash;
    
    const handler = this.routes.get(hash) || this.routes.get('dashboard');
    if (handler) {
      handler(hash);
    }
    
    store.emit('route:changed', hash);
  }

  init() {
    this.handleRoute();
  }
}

export const router = new Router();
