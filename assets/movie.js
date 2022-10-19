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
        <h2 class="has-text-danger-dark has-text-weight-bold is-size-2 ml-4 mt-4"> ${title}</h2>
        <span class="pl-4 has-text-weight-semibold has-text-danger-dark is-size-4"> ${release_date}</span>
        <a class="is-size-4 pl-1" href="${data.results[0]?.link.url}" target="_blank">Read Review</a> 
        <p class="has-text-left has-text-danger-dark pl-4 is-size-5 mb-4 mt-2"> ${overview}</p>
        <img class="ml-4 " src="https://image.tmdb.org/t/p/w400${poster_path}" alt="${title}" />`;
  });
});
