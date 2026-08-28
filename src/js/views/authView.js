/* ==========================================================================
   AUTHENTICATION VIEW (LOGIN & REGISTER)
   ========================================================================== */

import { auth } from '../services/auth.js';
import { router } from '../services/router.js';
import { toast } from '../components/toast.js';

export function renderAuthView(container, isRegister = false) {
  container.innerHTML = `
    <div class="auth-wrapper">
      <div class="card card-glass animate-fade-in" style="width: 100%; max-width: 440px; padding: var(--space-8);">
        <div style="text-align: center; margin-bottom: var(--space-6);">
          <div style="width: 48px; height: 48px; border-radius: var(--radius-md); background: var(--color-primary); display: flex; align-items: center; justify-content: center; color: #fff; font-weight: 800; font-size: 24px; margin: 0 auto 12px;">TF</div>
          <h1 class="font-bold text-2xl" style="letter-spacing: -0.5px;">TaskFlow SaaS</h1>
          <p class="text-xs text-muted" style="margin-top: 4px;">Enterprise Project & Task Management System</p>
        </div>

        <!-- Quick Demo Login Banner -->
        <div style="background: var(--color-primary-alpha-10); border: 1px solid var(--color-primary-alpha-20); padding: var(--space-3); border-radius: var(--radius-md); margin-bottom: var(--space-6); display: flex; items-center; justify-content: space-between;">
          <div>
            <div class="font-semibold text-xs text-main">Demo Credentials</div>
            <div class="text-xs text-muted" style="font-size: 11px;">demo@taskflow.com / Demo@123</div>
          </div>
          <button id="quick-demo-login-btn" class="btn btn-primary btn-xs">1-Click Login</button>
        </div>

        <form id="auth-form">
          ${isRegister ? `
            <div class="form-group">
              <label class="form-label">Full Name</label>
              <input type="text" id="auth-name" class="form-input" placeholder="e.g. Alex Morgan" required>
            </div>
          ` : ''}
          <div class="form-group">
            <label class="form-label">Email Address</label>
            <input type="email" id="auth-email" class="form-input" value="demo@taskflow.com" placeholder="name@company.com" required>
          </div>
          <div class="form-group">
            <label class="form-label">Password</label>
            <input type="password" id="auth-password" class="form-input" value="Demo@123" placeholder="••••••••" required>
          </div>

          <button type="submit" class="btn btn-primary" style="width: 100%; margin-top: var(--space-4); padding: var(--space-3);">
            ${isRegister ? 'Create Account' : 'Sign In'}
          </button>
        </form>

        <div style="text-align: center; margin-top: var(--space-6); font-size: 13px;" class="text-muted">
          ${isRegister ? `
            Already have an account? <a href="#login" id="toggle-auth-link" style="color: var(--color-primary); font-weight: 600;">Sign In</a>
          ` : `
            Don't have an account? <a href="#register" id="toggle-auth-link" style="color: var(--color-primary); font-weight: 600;">Register</a>
          `}
        </div>
      </div>
    </div>
  `;

  // Event Listeners
  const form = container.querySelector('#auth-form');
  const demoBtn = container.querySelector('#quick-demo-login-btn');

  demoBtn?.addEventListener('click', () => {
    const res = auth.login('demo@taskflow.com', 'Demo@123');
    if (res.success) {
      toast.success('Welcome to TaskFlow Demo!');
      router.navigate('dashboard');
    }
  });

  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = container.querySelector('#auth-email').value.trim();
    const password = container.querySelector('#auth-password').value;

    if (isRegister) {
      const name = container.querySelector('#auth-name').value.trim();
      const res = auth.register(name, email, password);
      if (res.success) {
        toast.success('Account created successfully!');
        router.navigate('dashboard');
      } else {
        toast.danger(res.message);
      }
    } else {
      const res = auth.login(email, password);
      if (res.success) {
        toast.success('Logged in successfully!');
        router.navigate('dashboard');
      } else {
        toast.danger(res.message);
      }
    }
  });
}
