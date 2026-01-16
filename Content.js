const overlay = document.createElement('div');
overlay.id = 'youtube-overlay';
document.body.appendChild(overlay);


function hideOverlayOnVideoPage() {
  const isVideoPage = location.href.includes('/watch?v=');
  if (isVideoPage) {
    overlay.remove();  
  }
}


function hideRecommendedVideos() {
  const recommendedSection = document.getElementById('contents'); 
  const isHomepage = location.pathname === '/' || location.pathname === '/feed/trending';
  
  if (recommendedSection && isHomepage) {
    recommendedSection.style.display = 'none';
  }
}


function monitorUrlChanges() {
  let lastUrl = location.href;

  new MutationObserver(() => {
    const currentUrl = location.href;
    if (currentUrl !== lastUrl) {
      lastUrl = currentUrl;

      if (currentUrl.includes('results') || currentUrl.includes('/watch?v=')) {
        overlay.remove();
      }
    }
  }).observe(document.body, { subtree: true, childList: true });
}

hideRecommendedVideos();
monitorUrlChanges();
hideOverlayOnVideoPage();

const observer = new MutationObserver(hideRecommendedVideos);
observer.observe(document.body, { childList: true, subtree: true });


// END
