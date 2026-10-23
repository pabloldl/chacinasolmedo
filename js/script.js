'use strict';
document.getElementById('year').textContent = new Date().getFullYear();
const copyButton = document.getElementById('copy-phone');
const copyStatus = document.getElementById('copy-status');
copyButton.addEventListener('click', async () => {
  let copied = false;
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText('956 716 600');
      copied = true;
    }
  } catch { /* Try the local-file compatible fallback below. */ }
  if (!copied) {
    const field = document.createElement('textarea');
    field.value = '956 716 600';
    field.setAttribute('aria-label', 'Teléfono para copiar');
    field.style.cssText = 'position:fixed;left:-9999px;top:0';
    document.body.append(field);
    field.select();
    try { copied = document.execCommand('copy'); } catch { copied = false; }
    field.remove();
    copyButton.focus({ preventScroll: true });
  }
  copyStatus.textContent = copied ? 'Teléfono copiado: 956 716 600' : 'Selecciona y copia el número: 956 716 600';
});
// Observe visible geometry. Clipping the observed target to zero prevents
// intersection and can also prevent native lazy-loaded images from loading.
// Animation is temporary and never owns the persistent visibility of content.
(() => {
  const surfaces = document.querySelectorAll('.surface');
  surfaces.forEach(surface => surface.classList.remove('pending', 'visible'));
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (motion.matches || !('IntersectionObserver' in window) || !Element.prototype.animate) return;
  let observer;
  const animations = new Set();
  const stop = () => {
    observer?.disconnect();
    animations.forEach(animation => animation.cancel());
    animations.clear();
  };
  try {
    observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        observer.unobserve(entry.target);
        if (motion.matches) continue;
        try {
          const animation = entry.target.animate(
            [{ clipPath: 'inset(0 0 100% 0)' }, { clipPath: 'inset(0)' }],
            { duration: 650, easing: 'cubic-bezier(.2,.7,.3,1)', fill: 'none' }
          );
          animations.add(animation);
          const clean = () => animations.delete(animation);
          animation.addEventListener('finish', clean, { once: true });
          animation.addEventListener('cancel', clean, { once: true });
        } catch { /* Unsupported animation: leave the surface visible. */ }
      }
    }, { threshold: 0 });
    surfaces.forEach(surface => observer.observe(surface));
    motion.addEventListener('change', event => { if (event.matches) stop(); });
  } catch { stop(); }
})();
