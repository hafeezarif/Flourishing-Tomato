const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});
const id = params.id; // "123"
const title = params.title; // "The Matrix"
const releaseDate = params.release_date; // "1999-03-31"
const poster_path = params.poster_path; // "/hEpWvX6Bp79eLxY1kX5ZZJcme5U.jpg"
const overview = params.overview; // "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers."

console.log({ id, title, releaseDate, poster_path, overview });

const movieSection = document.querySelector(".movie-section");
movieSection.innerHTML = `
<img src="https://image.tmdb.org/t/p/w400${poster_path}" alt="${title}" />
<h2 class="movie-title">${title}</h2>
<span class="movie-release-date">${releaseDate}</span>
<p class="movie-overview">${overview}</p>
`;
