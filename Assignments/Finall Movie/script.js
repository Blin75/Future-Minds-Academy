let navigationList = document.querySelector(".navigationList");
let genresList = document.querySelector(".genresList");
let socialMediaIcon = document.querySelector(".socialMediaIcon");
let movieList = document.querySelector(".movieList");
let post = document.querySelector(".post");

for(let i = 0; i < topNavigation.length; i++){
    navigationList.innerHTML += `<li><a href="#">${topNavigation[i]}</a></li>`
}

for(let i = 0; i < allMovies.length; i++){
    navigationList.innerHTML += `<li><a href="javascript:loadMovieList(${i})">${allMovies[i].genres}</a></li>`
}

for(let i = 0; i < topNavigation.length; i++){
    navigationList.innerHTML += `<li><a href="${socialMedia[i].url}"> <img width="20" src="css/images/${socialMedia[i].icon}" alt=""> ${socialMedia[i].name}</a></li>`
}

function loadMovieList(g){
    let movieListHTML = '';
    let movieListGenre = allMovies[g].movies;

    for(let i = 0; i < movieListGenre.length; i++){
        movieListHTML +=`<li><a href="javascript:movieFeed(${g},${i})">${movieListGenre[i].title} <strong>${movieListGenre[i].length} mins</strong></a></li>`    
    }
    movieList.innerHTML = movieListHTML;
}

function movieFeed (g, m){
    let movieListGenre = allMovies[g].movies;

    let thisMovie = `
     <header>
        <h2><a href="#"></a></h2>
        <div class="cl">&nbsp;</div>
      </header> <header>
      <h2><a href="#">${movieListGenre[m].title}</a></h2>
      <div class="cl">&nbsp;</div>
    </header>
    <div class="movie-trailer">
                  ${movieListGenre[m].trailer}

                </div>
                <div class="meta">
                  <p class="date">Date: ${movieListGenre[m].date}</p>
                  <div class="right">
                    Authors: ${movieListGenre[m].actors}
                  </div>
                  <div class="cl">&nbsp;</div>
                </div>
                <!-- end of meta -->
                <!-- post-cnt -->
                <div class="post-cnt">
                  <p>${movieListGenre[m].desc} </p>
                </div>
                <!-- end of post-cnt -->
              </div>
              <!-- post-inner -->
            </div>`

            post.innerHTML = thisMovie;
}


loadMovieList(0);
