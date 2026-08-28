/* ==========================================================================
   SETTINGS & SYSTEM CONFIGURATION VIEW
   ========================================================================== */

import { store } from '../services/store.js';
import { storage } from '../services/storage.js';
import { toast } from '../components/toast.js';

export function renderSettingsView(container) {
  const state = store.getState();
  const settings = state.settings || { theme: 'dark', accent: 'indigo' };

  container.innerHTML = `
    <div class="animate-fade-in" style="max-width: 680px;">
      <div style="margin-bottom: var(--space-6);">
        <h1 class="font-bold text-2xl" style="letter-spacing: -0.5px;">Settings</h1>
        <p class="text-xs text-muted" style="margin-top: 2px;">Customize theme appearance, accent colors, and manage application data.</p>
      </div>

      <!-- Appearance Card -->
      <div class="card" style="margin-bottom: var(--space-6);">
        <h3 class="font-bold text-base" style="margin-bottom: var(--space-4);">Appearance & Theme</h3>
        
        <div class="form-group" style="margin-bottom: var(--space-6);">
          <label class="form-label">Color Theme</label>
          <div class="flex gap-4">
            <label class="flex items-center gap-2 text-xs font-semibold" style="cursor: pointer;">
              <input type="radio" name="theme-radio" value="dark" ${settings.theme === 'dark' ? 'checked' : ''}>
              <span>Dark Theme (Default)</span>
            </label>
            <label class="flex items-center gap-2 text-xs font-semibold" style="cursor: pointer;">
              <input type="radio" name="theme-radio" value="light" ${settings.theme === 'light' ? 'checked' : ''}>
              <span>Light Theme</span>
            </label>
          </div>
        </div>

        <div class="form-group">
          <label class="form-label">Accent Color</label>
          <div class="flex gap-3">
            ${['indigo', 'emerald', 'violet', 'rose', 'amber'].map(accent => `
              <button class="accent-color-btn ${settings.accent === accent ? 'active' : ''}" data-accent="${accent}" style="width: 32px; height: 32px; border-radius: 50%; background: var(--color-primary); border: 2px solid ${settings.accent === accent ? '#fff' : 'transparent'};" title="${accent}"></button>
            `).join('')}
          </div>
        </div>
      </div>

      <!-- Data Management Card -->
      <div class="card">
        <h3 class="font-bold text-base" style="margin-bottom: var(--space-2);">Data Management</h3>
        <p class="text-xs text-muted" style="margin-bottom: var(--space-4);">Backup your system data or restore from demo initial state.</p>

        <div class="flex flex-col gap-3">
          <div class="flex items-center justify-between" style="padding: 12px; background: var(--bg-surface-elevated); border-radius: var(--radius-md);">
            <div>
              <div class="font-semibold text-xs">Reset Demo Dataset</div>
              <div class="text-xs text-muted" style="font-size: 11px;">Restores 5 team members, 4 projects, and 50+ demo tasks.</div>
            </div>
            <button id="reset-demo-btn" class="btn btn-secondary btn-xs text-danger" style="color: var(--color-danger);">Reset Demo Data</button>
          </div>

          <div class="flex items-center justify-between" style="padding: 12px; background: var(--bg-surface-elevated); border-radius: var(--radius-md);">
            <div>
              <div class="font-semibold text-xs">Import Backup JSON</div>
              <div class="text-xs text-muted" style="font-size: 11px;">Restore complete database state from backup JSON file.</div>
            </div>
            <label class="btn btn-secondary btn-xs" style="cursor: pointer;">
              <span>Upload JSON</span>
              <input type="file" id="import-json-input" accept=".json" style="display: none;">
            </label>
          </div>
        </div>
      </div>
    </div>
  `;

  // Attach event listeners
  container.querySelectorAll('input[name="theme-radio"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
      const theme = e.target.value;
      document.documentElement.setAttribute('data-theme', theme);
      store.state.settings.theme = theme;
      toast.success(`Switched to ${theme} mode`);
    });
  });

  container.querySelectorAll('.accent-color-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const accent = btn.getAttribute('data-accent');
      document.documentElement.setAttribute('data-accent', accent);
      store.state.settings.accent = accent;
      toast.success(`Accent color updated to ${accent}`);
      renderSettingsView(container);
    });
  });

  container.querySelector('#reset-demo-btn')?.addEventListener('click', () => {
    if (confirm('Are you sure you want to reset all data back to the demo dataset?')) {
      store.resetDemoData();
      toast.info('Demo dataset re-seeded successfully!');
    }
  });

  container.querySelector('#import-json-input')?.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const ok = storage.importData(event.target.result);
      if (ok) {
        store.init();
        toast.success('Database restored successfully!');
        window.location.reload();
      } else {
        toast.danger('Invalid backup file format');
      }
    };
    reader.readAsText(file);
  });
}
