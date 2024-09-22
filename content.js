function pauseVideo() {
  const video = document.querySelector('video');
  if (video && !video.paused) {
    video.pause();
  }
}

function resumeVideo() {
  const video = document.querySelector('video');
  if (video && video.paused) {
    video.play();
  }
}

// Handle visibility change
document.addEventListener('visibilitychange', function() {
  if (document.hidden) {
    pauseVideo();  // Pause the video when the tab is hidden
  } else {
    resumeVideo();  // Resume the video when the tab is visible again
  }
});
