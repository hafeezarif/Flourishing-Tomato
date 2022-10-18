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
        
        <h2 <div class="block is-size-2 has-text-right "> ${title}</h2>
        <span <div class="block has-text-right"> ${release_date}</span>
        <p <div class="block has-text-right"> ${overview}</p>
        <a href="${data.results[0]?.link.url}" target="_blank" <div class="block has-text-right">Read Review</a> 
        <img src="https://image.tmdb.org/t/p/w400${poster_path}" alt="${title}" />`;
  });
});
