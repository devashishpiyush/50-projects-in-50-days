const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const API_URL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";
const SEARCH_URL = "https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query=";

const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.getElementById("main");

getMovies(API_URL);

async function getMovies(url) {
    const res = await fetch(url);
    const data = await res.json();
    showMovies(data.results);
}

function showMovies(movies) {
    main.innerHTML = "";

    movies.forEach(movie => {
        const { title, poster_path, vote_average, overview } = movie;

        const movieElement = document.createElement("div");
        movieElement.classList.add("movie");
        movieElement.innerHTML = `
                <img src="${IMG_PATH + poster_path}" alt="${title}">
                <div class="movie-info">
                    <h3>${title}</h3>
                    <span class="${getClass(vote_average)}">${vote_average}</span>
                </div>
                <div class="overview">
                    <h3>Overwiew</h3>
                    ${overview}
                </div>
        `;

        main.appendChild(movieElement);
    });
}

function getClass(vote) {
    if(vote >= 8) {
        return "green";
    } else if(vote >= 5) {
        return "orange";
    } else {
        return "red";
    }
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const searchTerm = search.value;

    if(searchTerm && searchTerm !== "") {
        getMovies(SEARCH_URL + searchTerm);

        search.value = "";
    } else {
        window.location.reload();
    }
});