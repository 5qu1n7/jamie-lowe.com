// Optimized Chatbase initialization with lazy loading
(function() {
  const CHATBASE_ID = 'IYh1rK3jrU_ckVQlNpB7h';
  let chatbaseLoaded = false;
  let loadTimeout;

  // Initialize chatbase queue
  if (!window.chatbase) {
    window.chatbase = function(...args) {
      if (!window.chatbase.q) {
        window.chatbase.q = [];
      }
      window.chatbase.q.push(args);
    };
  }

  // Load chatbase script
  function loadChatbase() {
    if (chatbaseLoaded) return;
    chatbaseLoaded = true;
    clearTimeout(loadTimeout);

    const script = document.createElement('script');
    script.src = 'https://www.chatbase.co/embed.min.js';
    script.id = CHATBASE_ID;
    script.async = true;
    script.defer = true;
    script.domain = 'www.chatbase.co';
    document.head.appendChild(script);
  }

  // Load on page interaction (click, scroll, touch)
  function setupLazyLoad() {
    const events = ['click', 'scroll', 'touchstart', 'mousemove'];
    
    function onInteraction() {
      loadChatbase();
      events.forEach(event => document.removeEventListener(event, onInteraction));
    }

    events.forEach(event => document.addEventListener(event, onInteraction, { once: true }));

    // Fallback: load after 5 seconds if no interaction
    loadTimeout = setTimeout(loadChatbase, 5000);
  }

  // Start lazy loading when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupLazyLoad);
  } else {
    setupLazyLoad();
  }
})();
