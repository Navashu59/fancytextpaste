/**
 * App Logic for FancyFontsCopy.com
 * Handles UI interactions, real-time conversion, clipboard, localStorage
 * Zero external dependencies
 */

(function() {
  'use strict';

  function initFancyTextAnalytics() {
    var measurementId = 'G-CZD0573ZSF';
    if (!measurementId || window.gtag) return;

    window.dataLayer = window.dataLayer || [];
    window.gtag = function() {
      window.dataLayer.push(arguments);
    };

    window.gtag('js', new Date());
    window.gtag('config', measurementId, { anonymize_ip: true });

    var script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + measurementId;
    document.head.appendChild(script);
  }

  initFancyTextAnalytics();

  // ============================================================
  // STATE
  // ============================================================

  var state = {
    inputText: '',
    activeCategory: 'all',
    copiedId: null,
    copiedTimeout: null
  };

  // ============================================================
  // DOM HELPERS
  // ============================================================

  function $(selector) {
    return document.querySelector(selector);
  }

  function $$(selector) {
    return document.querySelectorAll(selector);
  }

  function el(tag, attrs, children) {
    var node = document.createElement(tag);
    if (attrs) {
      for (var key in attrs) {
        if (key === 'className') node.className = attrs[key];
        else if (key === 'textContent') node.textContent = attrs[key];
        else if (key === 'innerHTML') node.innerHTML = attrs[key];
        else if (key.indexOf('data-') === 0) node.setAttribute(key, attrs[key]);
        else node.setAttribute(key, attrs[key]);
      }
    }
    if (children) {
      if (typeof children === 'string') node.textContent = children;
      else if (Array.isArray(children)) {
        children.forEach(function(child) {
          if (child) node.appendChild(child);
        });
      }
    }
    return node;
  }

  // ============================================================
  // CLIPBOARD
  // ============================================================

  function copyToClipboard(text, buttonEl) {
    if (!text) return;

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function() {
        showCopySuccess(buttonEl);
      }).catch(function() {
        fallbackCopy(text, buttonEl);
      });
    } else {
      fallbackCopy(text, buttonEl);
    }
  }

  function fallbackCopy(text, buttonEl) {
    var textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.left = '-9999px';
    textarea.style.top = '-9999px';
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    try {
      document.execCommand('copy');
      showCopySuccess(buttonEl);
    } catch(e) {
      // silent fail
    }
    document.body.removeChild(textarea);
  }

  function showCopySuccess(buttonEl) {
    if (!buttonEl) return;
    var original = buttonEl.innerHTML;
    buttonEl.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 6L9 17l-5-5"/></svg> Copied!';
    buttonEl.classList.add('copied');
    setTimeout(function() {
      buttonEl.innerHTML = original;
      buttonEl.classList.remove('copied');
    }, 1500);
  }

  // ============================================================
  // RENDER PREVIEW CARDS
  // ============================================================

  function renderPreviewCards(inputText, container, styles) {
    if (!container) return;
    container.innerHTML = '';

    if (!inputText) {
      container.innerHTML = '<div class="empty-state"><p>Type something above to see your text in 50+ fancy font styles</p></div>';
      return;
    }

    var fragment = document.createDocumentFragment();
    var currentCategory = '';

    styles.forEach(function(style) {
      var converted = UnicodeFonts.convert(inputText, style);

      // Category header
      if (style.category !== currentCategory && state.activeCategory === 'all') {
        currentCategory = style.category;
        var catName = UnicodeFonts.CATEGORIES[style.category] || style.category;
        var header = el('div', { className: 'category-header' }, [
          el('h3', {}, catName)
        ]);
        fragment.appendChild(header);
      }

      // Card
      var card = el('div', { className: 'font-card', 'data-style-id': style.id });

      var cardHeader = el('div', { className: 'font-card-header' }, [
        el('span', { className: 'font-card-name' }, style.name),
        el('button', {
          className: 'btn-copy',
          'data-copy-text': converted,
          title: 'Copy to clipboard',
          innerHTML: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg> Copy'
        })
      ]);

      var cardBody = el('div', { className: 'font-card-body' });
      cardBody.textContent = converted;

      card.appendChild(cardHeader);
      card.appendChild(cardBody);
      fragment.appendChild(card);
    });

    container.appendChild(fragment);
  }

  // ============================================================
  // DEDICATED TOOL PAGE RENDER
  // ============================================================

  function renderDedicatedTool(inputText, container, styles) {
    if (!container) return;
    container.innerHTML = '';

    if (!inputText) {
      container.innerHTML = '<div class="empty-state"><p>Type something above to preview this font style</p></div>';
      return;
    }

    var fragment = document.createDocumentFragment();

    styles.forEach(function(style) {
      var converted = UnicodeFonts.convert(inputText, style);

      var card = el('div', { className: 'font-card font-card-large', 'data-style-id': style.id });

      var cardHeader = el('div', { className: 'font-card-header' }, [
        el('span', { className: 'font-card-name' }, style.name),
        el('button', {
          className: 'btn-copy',
          'data-copy-text': converted,
          title: 'Copy to clipboard',
          innerHTML: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg> Copy'
        })
      ]);

      var cardBody = el('div', { className: 'font-card-body font-card-body-large' });
      cardBody.textContent = converted;

      card.appendChild(cardHeader);
      card.appendChild(cardBody);
      fragment.appendChild(card);
    });

    container.appendChild(fragment);
  }

  // ============================================================
  // CHARACTER COUNT
  // ============================================================

  function updateCharCount(input) {
    var counter = $('#char-count');
    if (counter && input) {
      var len = input.value.length;
      counter.textContent = len + ' character' + (len !== 1 ? 's' : '');
    }
  }

  // ============================================================
  // LOCAL STORAGE
  // ============================================================

  function saveInput(text) {
    try {
      localStorage.setItem('ffc_lastInput', text);
    } catch(e) {}
  }

  function loadInput() {
    try {
      return localStorage.getItem('ffc_lastInput') || '';
    } catch(e) {
      return '';
    }
  }

  // ============================================================
  // FILTER TABS
  // ============================================================

  function setupFilterTabs() {
    var tabs = $$('.filter-tab');
    if (!tabs.length) return;

    tabs.forEach(function(tab) {
      tab.addEventListener('click', function(e) {
        e.preventDefault();
        tabs.forEach(function(t) { t.classList.remove('active'); });
        tab.classList.add('active');
        state.activeCategory = tab.getAttribute('data-category') || 'all';
        triggerConversion();
      });
    });
  }

  // ============================================================
  // MAIN INIT
  // ============================================================

  function triggerConversion() {
    var input = $('#text-input');
    var previewContainer = $('#font-preview');
    if (!input || !previewContainer) return;

    var text = input.value;
    state.inputText = text;
    saveInput(text);
    updateCharCount(input);

    // Determine which styles to show
    var styles;
    var pageFilter = previewContainer.getAttribute('data-filter');
    var dedicatedMode = previewContainer.getAttribute('data-dedicated') === 'true';

    if (pageFilter && pageFilter !== 'all') {
      var filterCats = pageFilter.split(',');
      styles = UnicodeFonts.FONT_STYLES.filter(function(s) {
        return filterCats.indexOf(s.category) !== -1;
      });
    } else if (state.activeCategory !== 'all') {
      styles = UnicodeFonts.getStylesByCategory(state.activeCategory);
    } else {
      styles = UnicodeFonts.FONT_STYLES;
    }

    if (dedicatedMode) {
      renderDedicatedTool(text, previewContainer, styles);
    } else {
      renderPreviewCards(text, previewContainer, styles);
    }
  }

  function init() {
    var input = $('#text-input');
    var clearBtn = $('#btn-clear');
    var previewContainer = $('#font-preview');

    if (!input) return; // Not a tool page

    // Load saved input
    var saved = loadInput();
    if (saved && !input.value) {
      input.value = saved;
    }

    // Real-time conversion
    var debounceTimer;
    input.addEventListener('input', function() {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(triggerConversion, 50);
    });

    // Clear button
    if (clearBtn) {
      clearBtn.addEventListener('click', function() {
        input.value = '';
        triggerConversion();
        input.focus();
      });
    }

    // Copy delegation
    document.addEventListener('click', function(e) {
      var btn = e.target.closest('.btn-copy');
      if (btn) {
        e.preventDefault();
        var text = btn.getAttribute('data-copy-text');
        // If text attribute is not set, try to get it from the sibling font-card-body
        if (!text) {
          var card = btn.closest('.font-card');
          if (card) {
            var body = card.querySelector('.font-card-body');
            if (body) text = body.textContent;
          }
        }
        copyToClipboard(text, btn);
      }
    });

    // Filter tabs
    setupFilterTabs();

    // Initial render
    triggerConversion();

    // Focus input
    input.focus();
  }

  // ============================================================
  // MOBILE MENU
  // ============================================================

  function initMobileMenu() {
    var toggle = $('#mobile-menu-toggle');
    var nav = $('#main-nav');
    if (toggle && nav) {
      toggle.addEventListener('click', function() {
        nav.classList.toggle('open');
        toggle.classList.toggle('open');
      });
    }
  }

  // ============================================================
  // BOOT
  // ============================================================

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      init();
      initMobileMenu();
    });
  } else {
    init();
    initMobileMenu();
  }

})();
