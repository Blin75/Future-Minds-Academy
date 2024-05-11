const navigation = document.querySelector('#navigation');
let buildNavHTML = "<ul>";
const allMoviesList = document.querySelector('.allMoviesList')


for (let i=0; i<topNavigation.length; i++){
    buildNavHTML +=` <li><a href="#">${topNavigation[i]}</a></li>`
}
buildNavHTML += "</ul>";
navigation.innerHTML = buildNavHTML;

const genres = document.querySelector('.genres');


for (let i=0; i<allMovies.length; i++){
    genres.innerHTML +=` <li><a href="javascript: loadGenres(${i})">${allMovies[i].genres}</a></li>`;
}

let loadGenres = function(g){
    for (let i=0; i<allMovies[g].movies.length; i++){
        makeMyMovies += `<li><a href="${movieDetailPage}">Wrath of the Titans <strong>120 mins</strong></a></li>`;
    } 

    allMoviesList.innerHTML = makeMyMovies;
}

let movieGerne  = allMovies[genre, movie];
let movieDetailList = "";
movieDetailList += `
<div class="post-inner">
                <header>
                  <h2><a href="#">${topNavigation[movie].tittle}</a></h2>
                  <div class="cl">&nbsp;</div>
                </header>
                <div class="movie-trailer"> ${topNavigation[movie].trailer}
                </div>

                <div class="meta">
                  <p class="date">Date: ${topNavigation[movie].date}</p>
                  <div class="right">
                    Authors: ${topNavigation[movie].actors}
                  </div>
                  <div class="cl">&nbsp;</div>
                </div>
              
                <div class="post-cnt">
                  <p>${topNavigation[movie].description} </p>
                </div>
               
              </div>
`