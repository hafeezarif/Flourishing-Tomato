const collapsibleToggle = document.querySelector("#collapsible-toggle");
const collapsibleContent = document.querySelector("#collapsible-content");
const nowPlayingGrid = document.querySelector(".now-playing-grid");

const MOVIE_DB_API_KEY = "ef36b87931742344a95578159a02b2d1";
const nowPlayingMoviesURL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${MOVIE_DB_API_KEY}&language=en-US&page=1`;

document.addEventListener("DOMContentLoaded", () => {
  fetch(nowPlayingMoviesURL).then((response) => {
    response.json().then((data) => {
      data.results.forEach((movie) => {
        const movieImageURL = `https://image.tmdb.org/t/p/w200/${movie.poster_path}`
        const movieCardTemplate = `<div class="now-playing-card">
        <img src="${movieImageURL}" alt="${movie.title} poster" class="now-playing-img">
        <h3 class="now-playing-title">${movie.title}</h3>
        </div>`;
        nowPlayingGrid.innerHTML += movieCardTemplate;
      });
    });
  });
});

collapsibleToggle.addEventListener("click", () => {
  collapsibleContent.classList.toggle("hidden");
});

// search
//https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=godfather&api-key=W7EYlsCUiNLdyGGchcLIaPQx0iaAkkua
// Posters
//https://api.themoviedb.org/3/movie/550?api_key=ef36b87931742344a95578159a02b2d1
// now playing
//https://api.themoviedb.org/3/movie/now_playing?api_key=ef36b87931742344a95578159a02b2d1&language=en-US&page=1
