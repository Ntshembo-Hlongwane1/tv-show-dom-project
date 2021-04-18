const btnEpisodeGet = document.getElementById('btn-get-episode');
const episodeMenuBox = document.getElementById('episode-menu');

const { x, y } = btnEpisodeGet.getBoundingClientRect();

const alignMenu = () => {
  episodeMenuBox.style.top = `${y + 115}px`;
  episodeMenuBox.style.left = `${x + 30}px`;
};
alignMenu();

btnEpisodeGet.addEventListener('mouseover', (e) => {
  episodeMenuBox.classList.remove('hide-episode-menu');
});

btnEpisodeGet.addEventListener('mouseleave', (e) => {
  episodeMenuBox.classList.add('hide-episode-menu');
});
episodeMenuBox.addEventListener('mouseover', (e) => {
  episodeMenuBox.classList.remove('hide-episode-menu');
});

episodeMenuBox.addEventListener('mouseleave', (e) => {
  episodeMenuBox.classList.add('hide-episode-menu');
});
