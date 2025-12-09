// ==========================================
// Kissbu Learns - AI Blog JavaScript
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
  initReadingProgress();
  initTableOfContents();
  initBackToTocLinks();
  initCopyButtons();
  initSmoothScroll();
  initFadeInAnimations();
});

// Add "Back to Table of Contents" links after each h2 section
function initBackToTocLinks() {
  const toc = document.getElementById('toc');
  if (!toc) return;

  const h2Headings = document.querySelectorAll('.article-content h2');

  h2Headings.forEach((heading, index) => {
    // Skip the last heading (References) and first heading
    if (index === 0 || heading.id === 'references') return;

    // Find the next h2 or end of content
    const nextH2 = h2Headings[index + 1];

    // Create back-to-toc link
    const backLink = document.createElement('a');
    backLink.href = '#toc';
    backLink.className = 'back-to-toc';
    backLink.textContent = 'Back to Table of Contents';

    // Insert before the next h2, or at end of section
    if (nextH2) {
      nextH2.parentNode.insertBefore(backLink, nextH2);
    }
  });
}

// Reading Progress Bar
function initReadingProgress() {
  const progressBar = document.querySelector('.reading-progress-bar');
  if (!progressBar) return;

  const article = document.querySelector('.article-content');
  if (!article) return;

  window.addEventListener('scroll', () => {
    const articleRect = article.getBoundingClientRect();
    const articleTop = window.scrollY + articleRect.top;
    const articleHeight = article.offsetHeight;
    const windowHeight = window.innerHeight;

    const scrollPosition = window.scrollY - articleTop + windowHeight;
    const progress = Math.min(Math.max(scrollPosition / articleHeight * 100, 0), 100);

    progressBar.style.width = `${progress}%`;
  });
}

// Table of Contents
function initTableOfContents() {
  const toc = document.querySelector('.toc');
  const tocList = document.querySelector('.toc-list');
  if (!toc || !tocList) return;

  // Only include h2 headings (main sections) to keep TOC cleaner
  const headings = document.querySelectorAll('.article-content h2');

  headings.forEach((heading, index) => {
    // Add ID if not exists
    if (!heading.id) {
      heading.id = `heading-${index}`;
    }

    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = `#${heading.id}`;
    a.textContent = heading.textContent;
    li.appendChild(a);
    tocList.appendChild(li);
  });

  // Add toggle functionality
  const tocHeader = toc.querySelector('h4');
  if (tocHeader) {
    tocHeader.addEventListener('click', () => {
      toc.classList.toggle('collapsed');
    });
  }

  // Highlight active section on scroll
  const tocLinks = tocList.querySelectorAll('a');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        tocLinks.forEach(link => link.classList.remove('active'));
        const activeLink = tocList.querySelector(`a[href="#${entry.target.id}"]`);
        if (activeLink) {
          activeLink.classList.add('active');
        }
      }
    });
  }, { rootMargin: '-100px 0px -80% 0px' });

  headings.forEach(heading => observer.observe(heading));
}

// Copy Code Buttons
function initCopyButtons() {
  const codeBlocks = document.querySelectorAll('pre code');

  codeBlocks.forEach(code => {
    const pre = code.parentElement;
    const header = pre.querySelector('.code-header');

    if (!header) return;

    const copyBtn = header.querySelector('.copy-btn');
    if (!copyBtn) return;

    copyBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(code.textContent);
        copyBtn.textContent = 'Copied!';
        copyBtn.style.color = '#22c55e';

        setTimeout(() => {
          copyBtn.textContent = 'Copy';
          copyBtn.style.color = '';
        }, 2000);
      } catch (err) {
        console.error('Failed to copy:', err);
        copyBtn.textContent = 'Failed';
        setTimeout(() => {
          copyBtn.textContent = 'Copy';
        }, 2000);
      }
    });
  });
}

// Smooth Scroll for Anchor Links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const headerOffset = 100;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// Fade In Animations
function initFadeInAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.card, .fp-card, .solution-card').forEach(el => {
    observer.observe(el);
  });
}

// Calculate Reading Time
function calculateReadingTime(text) {
  const wordsPerMinute = 200;
  const words = text.trim().split(/\s+/).length;
  const time = Math.ceil(words / wordsPerMinute);
  return time;
}

// Format Date
function formatDate(dateString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
}
