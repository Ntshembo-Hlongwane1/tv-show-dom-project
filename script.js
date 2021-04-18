//You can edit ALL of the code here
const rootElem = document.getElementById('root');
const episodesContainer = document.getElementById('episodes-container');
const episodeMenu = document.getElementById('episode-menu');

const fetchAllEpisodes = async () => {
  const url = 'https://api.tvmaze.com/shows/82/episodes';
  const res = await fetch(url, { method: 'GET' });
  const data = await res.json();
  return data;
};

async function setup() {
  const allEpisodes = await fetchAllEpisodes();
  makePageForEpisodes(allEpisodes);
  linkClick();
  searchEvent();
  fillEpisodeMenu();
  fetchAllEpisodes();
}

function makePageForEpisodes(episodeList) {
  // console.log(episodeList);

  const pageHeading = document.createElement('h1');
  pageHeading.innerText = 'Game Of Thrones Episodes';
  pageHeading.classList.add('page-heading');
  const mainDiv = document.getElementById('main');
  const heading = document.getElementById('heading');
  heading.appendChild(pageHeading);

  const episodesContainer = document.createElement('div');
  episodesContainer.classList.add('episodes-container');
  episodesContainer.id = 'episodes-container';
  mainDiv.appendChild(episodesContainer);

  episodeList.forEach((episode, idx) => {
    const div = document.createElement('div');
    rootElem.appendChild(div);
    div.classList.add('episode-card');
    let picture = document.createElement('img');
    picture.src = episode.image.medium;
    picture.classList.add('tv-image');

    let tvShowName = document.createElement('h2');
    let seasonEpisodeCode = seasonEpisodeCodeGen(episode.number, episode.season);
    tvShowName.innerText = `${episode.name}-${seasonEpisodeCode}`;
    rootElem.appendChild(tvShowName);
    let seasonNumber = document.createElement('p');
    seasonNumber.innerText = `Season: ${episode.season}`;
    rootElem.appendChild(seasonNumber);
    let episodeNumber = document.createElement('p');
    episodeNumber.innerText = `Episode No: ${episode.number}`;
    rootElem.appendChild(episodeNumber);
    let summaryTitle = document.createElement('h4');
    summaryTitle.innerText = `Summary:`;
    rootElem.appendChild(summaryTitle);
    let summary = document.createElement('p');
    summary.innerText = episode.summary;
    rootElem.appendChild(summary);
    div.appendChild(picture);
    div.appendChild(tvShowName);
    div.appendChild(seasonNumber);
    div.appendChild(episodeNumber);
    div.appendChild(summaryTitle);
    div.appendChild(summary);
    episodesContainer.appendChild(div);

    // The x and y co=ordinates for each and every episode div container
    const { x, y } = div.getBoundingClientRect();
  });
  const footerContainer = document.createElement('p');
  let footerText = document.createElement('a');
  footerText.href = 'https://www.tvmaze.com/';
  footerText.text = 'Pitures from TVMaze';
  footerText.target = '_blank';

  footerText.classList.add('footer-link');
  footerText.setAttribute('id', 'footers-link');
  mainDiv.appendChild(footerText);
}

const seasonEpisodeCodeGen = (episodeNumber, episodeSeason) => {
  let episode = episodeNumber > 9 ? `E${episodeNumber}` : `E0${episodeNumber}`;
  let season = episodeSeason > 9 ? `S${episodeSeason}` : `S0${episodeSeason}`;
  return `${season}${episode}`;
};

const linkClick = () => {
  const footerLink = document.getElementById('footers-link');
  footerLink.addEventListener('click', () => {
    window.location.href = 'https://www.tvmaze.com/';
    // window.location.replace("TVMaze.com");
  });
};

const searchEvent = () => {
  const searchInputField = document.getElementById('search-field');
  searchInputField.addEventListener('input', (e) => {
    searchFunction(e.target.value);
    // console.log(e.target.value);
  });
};

const searchFunction = (searchValue) => {
  // console.log(searchValue);
  const allEpisodes = getAllEpisodes();
  const episodesInDom = document.querySelectorAll('.episode-card');
  // console.log(episodesInDom);
  episodesInDom.forEach((episode, idx) => {
    episode.remove();
  });

  const result = [];

  allEpisodes.forEach((episode, idx) => {
    if (episode.name.match(searchValue)) {
      result.push(episode);
    }

    if (episode.summary.match(searchValue)) {
      result.push(episode);
    }
  });

  filterEpisodesDom(result);
};

const filterEpisodesDom = (searchResult) => {
  const episodesContainer = document.getElementById('episodes-container');
  const mainContainer = document.getElementById('main');
  // episodesContainer.firstElementChild.remove();
  const noResultMessageElement = document.createElement('p');
  const div = document.createElement('div');
  div.id = 'episode-card';
  div.classList.add('episode-card');
  const searchResultCount = document.getElementById('search-result');
  episodesContainer.appendChild(div);
  if (searchResult.length === 0) {
    noResultMessageElement.innerText = 'No tv show results...';
    searchResultCount.innerHTML = '';
    // episodesContainer.appendChild(noResultMessageElement);
    noResultMessageElement.id = 'no-results-message';
    div.appendChild(noResultMessageElement);
    return;
  }
  const noResultMsgElement = document.getElementById('no-results-message');
  noResultMessageElement.remove();
  const episodeCardToRemove = document.getElementById('episode-card');
  episodeCardToRemove.remove();

  if (searchResult.length === 146) {
    searchResultCount.innerText = '';
  } else {
    searchResultCount.innerText = `Search Result: ${searchResult.length}`;
  }
  // mainContainer.appendChild(searchResultCount);

  searchResult.forEach((episode, idx) => {
    const div = document.createElement('div');
    div.classList.add('episode-card');
    episodesContainer.appendChild(div);
    const picture = document.createElement('img');
    picture.src = episode.image.medium;
    picture.classList.add('tv-image');

    let tvShowName = document.createElement('h2');
    let seasonEpisodeCode = seasonEpisodeCodeGen(episode.number, episode.season);

    tvShowName.innerText = `${episode.name}-${seasonEpisodeCode}`;
    rootElem.appendChild(tvShowName);
    let seasonNumber = document.createElement('p');
    seasonNumber.innerText = `Season: ${episode.season}`;
    rootElem.appendChild(seasonNumber);
    let episodeNumber = document.createElement('p');
    episodeNumber.innerText = `Episode No: ${episode.number}`;
    rootElem.appendChild(episodeNumber);
    let summaryTitle = document.createElement('h4');
    summaryTitle.innerText = `Summary:`;
    rootElem.appendChild(summaryTitle);
    let summary = document.createElement('p');
    summary.innerText = episode.summary;
    rootElem.appendChild(summary);
    div.appendChild(picture);
    div.appendChild(tvShowName);
    div.appendChild(seasonNumber);
    div.appendChild(episodeNumber);
    div.appendChild(summaryTitle);
    div.appendChild(summary);
    episodesContainer.appendChild(div);
  });
};

const fillEpisodeMenu = () => {
  const allEpisodes = getAllEpisodes();
  const popUpContainer = document.getElementById('modal-content');

  allEpisodes.forEach((episode, idx) => {
    let episodeMenuOption = document.createElement('p');
    let seasonEpisodeCode = seasonEpisodeCodeGen(episode.number, episode.season);
    episodeMenuOption.innerText = `${seasonEpisodeCode} - ${episode.name}`;
    episodeMenuOption.classList.add('episode-menu-option');
    episodeMenuOption.id = `${seasonEpisodeCode}`;

    episodeMenuOption.addEventListener('click', (e) => {
      const domTvShowName = document.querySelectorAll('.pop-header');
      const popDomEpisodeImg = document.querySelectorAll('.pop-image');
      const popSummaryInDom = document.querySelectorAll('.pop-summary');

      removeFromDOm(domTvShowName);
      removeFromDOm(popDomEpisodeImg);
      removeFromDOm(popSummaryInDom);

      const tvShowName = document.createElement('h3');
      tvShowName.classList.add('pop-header');
      tvShowName.innerText = `${seasonEpisodeCode} - ${episode.name}`;

      const picture = document.createElement('img');
      picture.classList.add('pop-image');
      picture.src = episode.image.medium;

      const summary = document.createElement('p');
      summary.classList.add('pop-summary');
      summary.innerText = episode.summary;

      popUpContainer.appendChild(tvShowName);
      popUpContainer.appendChild(picture);
      popUpContainer.appendChild(summary);

      var modal = document.getElementById('myModal');

      var selectedEpisode = document.getElementById(`${e.target.id}`);

      var span = document.getElementsByClassName('close')[0];

      selectedEpisode.onclick = function () {
        modal.style.display = 'block';
      };

      span.onclick = function () {
        modal.style.display = 'none';
      };

      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function (event) {
        if (event.target == modal) {
          modal.style.display = 'none';
        }
      };
    });

    episodeMenu.appendChild(episodeMenuOption);
  });
};

const removeFromDOm = (elements) => {
  elements.forEach((ele, idx) => {
    ele.remove();
  });
};

window.onload = setup;
