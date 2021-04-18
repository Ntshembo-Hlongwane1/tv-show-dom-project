// // const episodeMenu = document.getElementById('episode-menu');

// const fillEpisodeMenu = () => {
//   const allEpisodes = getAllEpisodes();

//   allEpisodes.forEach((episode, idx) => {
//     let episodeMenuOption = document.createElement('p');
//     let seasonEpisodeCode = seasonEpisodeCodeGen(episode.number, episode.season);
//     episodeMenuOption.innerText = `${seasonEpisodeCode} - ${episode.name}`;
//     episodeMenuOption.classList.add('episode-menu-option');
//     episodeMenuOption.id = `${seasonEpisodeCode}`;

//     episodeMenuOption.addEventListener('click', (e) => {
//       let selectedEpisode = null;
//       window.location.href = 'episode-detail.html';
//       // console.log(allEpisodes);

//       allEpisodes.forEach((episode, idx) => {
//         let seasonEpisodeCode = seasonEpisodeCodeGen(episode.number, episode.season);

//         if (seasonEpisodeCode === e.target.id) {
//           selectedEpisode = episode;
//         }
//       });
//       // console.log(selectedEpisode);

//       const episodeDetailContainer = document.getElementById('episode-detail');
//       console.log(episodeDetailContainer);
//       // const picture = document.createElement('img');
//       // picture.src = selectedEpisode.image.medium;
//       // picture.classList.add('tv-show-image');
//       // episodeDetailContainer.appendChild(picture);
//     });

//     episodeMenu.appendChild(episodeMenuOption);
//   });
// };
