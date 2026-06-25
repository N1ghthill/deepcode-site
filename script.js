// DeepCode Site — Scripts

document.addEventListener('DOMContentLoaded', () => {
  // Keep the public version badge aligned with the package users install.
  const releaseBadge = document.querySelector('#release-badge');
  const versionLabel = releaseBadge?.querySelector('[data-version-label]');

  if (releaseBadge && versionLabel) {
    const packageName = releaseBadge.dataset.package;

    fetch(`https://registry.npmjs.org/${encodeURIComponent(packageName)}/latest`, {
      headers: { Accept: 'application/json' },
      cache: 'no-store'
    })
      .then(response => {
        if (!response.ok) throw new Error('Unable to fetch package metadata');
        return response.json();
      })
      .then(pkg => {
        if (typeof pkg.version === 'string' && pkg.version.length > 0) {
          versionLabel.textContent = `v${pkg.version} · npm latest`;
        }
      })
      .catch(() => {
        versionLabel.textContent = 'npm latest';
      });
  }

  // Copy to clipboard
  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', async () => {
      const text = btn.dataset.copy;
      try {
        await navigator.clipboard.writeText(text.replace(/\\n/g, '\n'));
        btn.textContent = 'Copied!';
        btn.classList.add('copied');
        setTimeout(() => {
          btn.textContent = 'Copy';
          btn.classList.remove('copied');
        }, 2000);
      } catch {
        // Fallback
        const textarea = document.createElement('textarea');
        textarea.value = text.replace(/\\n/g, '\n');
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        btn.textContent = 'Copied!';
        btn.classList.add('copied');
        setTimeout(() => {
          btn.textContent = 'Copy';
          btn.classList.remove('copied');
        }, 2000);
      }
    });
  });

  // Smooth scroll for nav links
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Intersection Observer for fade-in animations
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll(
    '.feature-card, .provider-card, .command-item, .safety-item, .install-step'
  ).forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });
});
