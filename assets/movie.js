const movieSection = document.querySelector(".movie-section");
const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});

const { id, title, release_date, poster_path, overview } = params;
const NY_TIMES_API_KEY = "W7EYlsCUiNLdyGGchcLIaPQx0iaAkkua";
const MovieReviewURL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${title}&api-key=${NY_TIMES_API_KEY}`;

fetch(MovieReviewURL).then((response) => {
  response.json().then((data) => {
    console.log(data);
    movieSection.innerHTML = `
        <img src="https://image.tmdb.org/t/p/w400${poster_path}" alt="${title}" />
        <h2 class="movie-title">${title}</h2>
        <span class="movie-release-date">${release_date}</span>
        <p class="movie-overview">${overview}</p>
        <a href="${data.results[0]?.link.url}" target="_blank" class="movie-review-link">Read Review</a>
        `;
  });
});
