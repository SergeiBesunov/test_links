document.addEventListener('DOMContentLoaded', () => {
  const toRoute2 = document.getElementById('to-route-2');
  const toRoute1 = document.getElementById('to-route-1');
  
  const openDeepLink = (appUrl, fallbackUrl) => {
    let opened = false;
    const onVisibility = () => {
      if (document.visibilityState === 'hidden') opened = true;
    };
    document.addEventListener('visibilitychange', onVisibility, { once: true });
    window.location.href = appUrl;
    setTimeout(() => {
      document.removeEventListener('visibilitychange', onVisibility);
      if (!opened) window.location.href = fallbackUrl;
    }, 1500);
  };

  if (toRoute2) {
    toRoute2.addEventListener('click', (e) => {
      e.preventDefault();
      const appUrl = 'globalert://emergency?id=55555&lon=82.9346&lat=55.0417';
      const fallbackUrl = 'https://example.com/fallback';
      openDeepLink(appUrl, fallbackUrl);
    });
  }

    if (toRoute1) {
    toRoute1.addEventListener('click', (e) => {
      e.preventDefault();
      const url = 'https://www.youtube.com/';
       window.location.href = url;
      // const fallbackUrl = 'https://example.com/fallback';
      // openDeepLink(appUrl, fallbackUrl);
    });
  }

//   const toRoute1 = document.getElementById('to-route-1');
//   if (toRoute1) {
//     toRoute1.addEventListener('click', () => {
//       window.location.href = './index.html';
//     });
//   }
  const anchorDeep = document.querySelector('a[href^="globalert://"]');
  if (anchorDeep) {
    anchorDeep.addEventListener('click', (e) => {
      e.preventDefault();
      const appUrl = anchorDeep.getAttribute('href');
      const fallbackUrl = 'https://example.com/fallback';
      openDeepLink(appUrl, fallbackUrl);
    });
  }
});
// 'globalert://emergency?id=55555&lon=82.9346&lat=55.0417'