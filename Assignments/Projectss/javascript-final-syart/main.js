const games = [
    {
        id: 1,
        name: "Adventure Quest",
        thumbnail: "images/adventure-quest.png",
        plays: 1500
    },
    {
        id: 2,
        name: "Space Invaders",
        thumbnail: "images/space-invaders.png",
        plays: 1200
    },
    {
        id: 3,
        name: "Zombie Apocalypse",
        thumbnail: "images/zombie-apocalypse.png",
        plays: 900
    },
];

const allGames = document.querySelector("#allGames");
const gameList = document.querySelector("#game-list");
const gameInfo = document.querySelector("#game-info")




for (i = 0; i < games.length; i++) {
    gameList.innerHTML += `
         <div class="game-item">
        <img src=" ${games[i].thumbnail}" alt="Adventure Quest">
        <div class="details">
            <h4>${games[i].name}</h4>
            <p>${games[i].plays}</p>
        </div>
        <button onclick="loadGameDetails(${i})">Play Game</button>
    </div>
        `;
}

 function loadGameDetails(g){
    gameInfo.innerHTML = `
    <div class="main-content">
    <h4></h4>
    <img width="50" src="${games[g].thumbnail}" alt="Adventure Quest">
    <p>Plays: ${games[g].plays}</p>
    </div>
    `;
}
loadGameDetails(0);
