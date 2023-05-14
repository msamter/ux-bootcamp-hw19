// Hide the loading bar once the animation is complete
const loadingBar = document.querySelector('.loading-bar');

loadingBar.addEventListener('animationend', () => {
  const loadingBarContainer = document.querySelector('.loading-bar-container');
  loadingBarContainer.style.display = 'none';
});