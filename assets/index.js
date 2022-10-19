const nowPlayingGrid = document.querySelector(".now-playing-grid");

const MOVIE_DB_API_KEY = "ef36b87931742344a95578159a02b2d1";
const nowPlayingMoviesURL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${MOVIE_DB_API_KEY}&language=en-US&page=1`;

fetch(nowPlayingMoviesURL).then((response) => {
  response.json().then((data) => {
    data.results.forEach((movie) => {
      const movieImageURL = `https://image.tmdb.org/t/p/w200/${movie.poster_path}`;
  
      const movieHref = `movie.html?title=${movie.title}&id=${movie.id}&release_date=${movie.release_date}&poster_path=${movie.poster_path}&overview=${movie.overview}`;

      const movieCardTemplate = `
      <a class="now-playing-card" href="${movieHref}">
      <img src="${movieImageURL}" alt="${movie.title} poster" class="now-playing-img ">
      <h3 class="now-playing-title is-size-4 is-family-monospace has-text-weight-bold has-text-danger-dark">${movie.title}</h3>
      `;
    
      nowPlayingGrid.innerHTML += movieCardTemplate 
    });
  });
});

// search
//https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=godfather&api-key=W7EYlsCUiNLdyGGchcLIaPQx0iaAkkua
// Posters
//https://api.themoviedb.org/3/movie/550?api_key=ef36b87931742344a95578159a02b2d1
// now playing
//https://api.themoviedb.org/3/movie/now_playing?api_key=ef36b87931742344a95578159a02b2d1&language=en-US&page=1
