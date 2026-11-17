(function () {
  const addMeta = (name, content, attrName = 'name') => {
    let tag = document.querySelector(`meta[${attrName}="${name}"]`);
    if (!tag) {
      tag = document.createElement('meta');
      tag.setAttribute(attrName, name);
      document.head.appendChild(tag);
    }
    tag.setAttribute('content', content);
  };

  addMeta('theme-color', '#050a14');
  addMeta('mobile-web-app-capable', 'yes');
  addMeta('apple-mobile-web-app-capable', 'yes');
  addMeta('apple-mobile-web-app-status-bar-style', 'black-translucent');
  addMeta('apple-mobile-web-app-title', 'Huyệt Đạo 3D');

  const manifestLink = document.querySelector('link[rel="manifest"]');
  if (!manifestLink) {
    const el = document.createElement('link');
    el.rel = 'manifest';
    el.href = './manifest.webmanifest';
    document.head.appendChild(el);
  }

  const appleTouchIcon = document.querySelector('link[rel="apple-touch-icon"]');
  if (!appleTouchIcon) {
    const el = document.createElement('link');
    el.rel = 'apple-touch-icon';
    el.href = './icons/icon.svg';
    document.head.appendChild(el);
  }

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./service-worker.js').catch(() => {});
    });
  }
})();
