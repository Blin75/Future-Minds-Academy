const movieGernes = document.querySelector('.movieGernes');
const movielist = document.querySelector('.movielist')

for (let i = 0; i < allMovies.length; i++) {
    movieGernes.innerHTML += `<option value=${i}>${allMovies[i].gerne}</option>`;
}

let loadMovieList = function (g) {

    let allMoviesHTML = '';
    let movieListGerne = allMovies[g].movies;

    for (let i = 0; i < movieListGerne.length; i++) {
        allMoviesHTML += `<li>
        <h4>${movieListGerne[i].title}</h4>
        <img src="assets/img/${movieListGerne[i].thumb}" alt="Kill Boksoon">
        <p class="description">${movieListGerne[i].desc}</p>
        <div class="row movie-stats m0 p0">
            <div class="col m0 p0">Date: <span>${movieListGerne[i].date}</span> </div>
            <div class="col m0 p0">Length: <span>${movieListGerne[i].length}</span> </div>
        </div>
    </li>`
    }

    movielist.innerHTML = allMoviesHTML;
}

loadMovieList(0);