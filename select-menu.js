// https://api.tvmaze.com/shows/82/episodes - Game Of Thrones
// https://api.tvmaze.com/shows/527/episodes - The Sopranos
// https://api.tvmaze.com/shows/22036/episodes - Planet Earth II
// https://api.tvmaze.com/shows/5/episodes - True Detective
// https://api.tvmaze.com/shows/582/episodes - Fresh Prince
// https://api.tvmaze.com/shows/179/episodes - The Wire
// https://api.tvmaze.com/shows/379/episodes - Mythbusters
// https://api.tvmaze.com/shows/4729/episodes - Scrapheap Challenge

const showMenuContainer = document.getElementById('shows-menu-container');
const showHoverBtn = document.getElementById('shows-hover');

const shows = {
  'Games of Thrones': 'https://api.tvmaze.com/shows/82/episodes',
  'The Sopranos': 'https://api.tvmaze.com/shows/527/episodes ',
  'Planet Earth II': 'https://api.tvmaze.com/shows/22036/episodes ',
  'True Detective': 'https://api.tvmaze.com/shows/5/episodes ',
  'Fresh Prince': 'https://api.tvmaze.com/shows/582/episodes ',
  'The Wire': 'https://api.tvmaze.com/shows/179/episodes ',
  Mythbusters: 'https://api.tvmaze.com/shows/379/episodes ',
  'Scrapheap Challenge': 'https://api.tvmaze.com/shows/4729/episodes ',
};

const sortedObject = Object.fromEntries(Object.entries(shows).sort());
const keys = Object.keys(sortedObject);
const ids = keys.map((key, idx) => {
  return sortedObject[key];
});

keys.forEach((show, idx) => {
  let showMenuOption = document.createElement('p');
  showMenuOption.innerText = show;
  showMenuOption.id = ids[idx];
  showMenuOption.classList.add('show-menu-option');
  showMenuContainer.appendChild(showMenuOption);

  showMenuOption.addEventListener('click', (e) => {
    getSelectedEpisodes(e.target.id);
  });
});

showHoverBtn.addEventListener('mouseover', (e) => {
  showMenuContainer.classList.remove('hide-show-menu');
});

showHoverBtn.addEventListener('mouseleave', (e) => {
  showMenuContainer.classList.add('hide-show-menu');
});

showMenuContainer.addEventListener('mouseover', (e) => {
  showMenuContainer.classList.remove('hide-show-menu');
});

showMenuContainer.addEventListener('mouseleave', (e) => {
  showMenuContainer.classList.add('hide-show-menu');
});

const getSelectedEpisodes = async (url) => {
  const res = await fetch(url, { method: 'GET' });
  const data = await res.json();

  console.log(data);

  // const episodesContainer = document.getElementById('episodes-container');
  // const mainContainer = document.getElementById('main');
  // // episodesContainer.firstElementChild.remove();
  // const noResultMessageElement = document.createElement('p');
  // const div = document.createElement('div');
  // div.id = 'episode-card';
  // div.classList.add('episode-card');
  // const searchResultCount = document.getElementById('search-result');
  // episodesContainer.appendChild(div);

  // const noResultMsgElement = document.getElementById('no-results-message');
  // noResultMessageElement.remove();
  // const episodeCardToRemove = document.getElementById('episode-card');
  // episodeCardToRemove.remove();

  // // mainContainer.appendChild(searchResultCount);

  // data.forEach((episode, idx) => {
  //   const div = document.createElement('div');
  //   div.classList.add('episode-card');
  //   episodesContainer.appendChild(div);
  //   const picture = document.createElement('img');
  //   picture.src = episode.image.medium;
  //   picture.classList.add('tv-image');

  //   let tvShowName = document.createElement('h2');
  //   let seasonEpisodeCode = seasonEpisodeCodeGen(episode.number, episode.season);

  //   tvShowName.innerText = `${episode.name}-${seasonEpisodeCode}`;
  //   rootElem.appendChild(tvShowName);
  //   let seasonNumber = document.createElement('p');
  //   seasonNumber.innerText = `Season: ${episode.season}`;
  //   rootElem.appendChild(seasonNumber);
  //   let episodeNumber = document.createElement('p');
  //   episodeNumber.innerText = `Episode No: ${episode.number}`;
  //   rootElem.appendChild(episodeNumber);
  //   let summaryTitle = document.createElement('h4');
  //   summaryTitle.innerText = `Summary:`;
  //   rootElem.appendChild(summaryTitle);
  //   let summary = document.createElement('p');
  //   summary.innerText = episode.summary;
  //   rootElem.appendChild(summary);
  //   div.appendChild(picture);
  //   div.appendChild(tvShowName);
  //   div.appendChild(seasonNumber);
  //   div.appendChild(episodeNumber);
  //   div.appendChild(summaryTitle);
  //   div.appendChild(summary);
  //   episodesContainer.appendChild(div);
  //});
};
