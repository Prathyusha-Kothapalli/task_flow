/* ==========================================================================
   DOM HELPER & RENDERING UTILITIES
   ========================================================================== */

export function $(selector, context = document) {
  return context.querySelector(selector);
}

export function $$(selector, context = document) {
  return Array.from(context.querySelectorAll(selector));
}

export function createElement(tag, className = '', attributes = {}, children = []) {
  const el = document.createElement(tag);
  if (className) el.className = className;

  Object.entries(attributes).forEach(([key, val]) => {
    if (key.startsWith('on') && typeof val === 'function') {
      el.addEventListener(key.substring(2).toLowerCase(), val);
    } else {
      el.setAttribute(key, val);
    }
  });

  children.forEach(child => {
    if (typeof child === 'string') {
      el.appendChild(document.createTextNode(child));
    } else if (child instanceof HTMLElement || child instanceof SVGElement) {
      el.appendChild(child);
    }
  });

  return el;
}
