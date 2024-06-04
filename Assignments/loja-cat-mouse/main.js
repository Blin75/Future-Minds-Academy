const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext("2d");
const bgGame = new Image();
bgGame.src = "images/background.png";

let ticTimer = 15;
let score = 0; 
let gameOver = false; 

let bgReady = false;
bgGame.onload = function() {
    bgReady = true;
}

let catObj = {};
catObj.x = 0;
catObj.y = 40;
catObj.speed = 10;

let catReady = false;
const catImg = new Image();
catImg.src = "images/cat.png";
catImg.onload = function() {
    catReady = true;
}

let mouseObj = {};
mouseObj.width = 52;
mouseObj.height = 54;

mouseObj.x = Math.floor(Math.random() * (canvas.width - mouseObj.width));
mouseObj.y = Math.floor(Math.random() * (canvas.height - mouseObj.height));

let mouseReady = false;
const mouseImg = new Image();
mouseImg.src = "images/mouse.png";
mouseImg.onload = function() {
    mouseReady = true;
}

function render() {
    if(bgReady) { ctx.drawImage(bgGame, 0, 0); }
    if(catReady) { ctx.drawImage(catImg, catObj.x, catObj.y); }
    if(mouseReady) { ctx.drawImage(mouseImg, mouseObj.x, mouseObj.y); }


    if(catObj.x > canvas.width){ catObj.x = -catImg.width; }
    if(catObj.x < -catImg.width){ catObj.x = canvas.width; }
    if(catObj.y > canvas.height){ catObj.y = -catImg.height; }
    if(catObj.y < -catImg.height){ catObj.y = canvas.height; }

    
    if (ticTimer > 0 && 
        catObj.x < mouseObj.x + mouseObj.width &&
        catObj.x + catImg.width > mouseObj.x &&
        catObj.y < mouseObj.y + mouseObj.height &&
        catObj.y + catImg.height > mouseObj.y) {
       
        mouseObj.x = Math.floor(Math.random() * (canvas.width - mouseObj.width));
        mouseObj.y = Math.floor(Math.random() * (canvas.height - mouseObj.height));
        score++; 
    }

    ctx.font = "20px Georgia";
    ctx.fillStyle = "white";
    ctx.fillText("Points: " + score, 10, 25); 

    ctx.fillText("Timer: " + ticTimer, 400, 25);

    if (gameOver) {
        ctx.fillStyle = score >= 8 ? "white" : "red";
        ctx.fillText(score >= 8 ? "You won" : "You lost", canvas.width / 2 - 50, canvas.height / 2);
        document.getElementById("restartButton").style.display = "block";
    }
}

addEventListener("keydown", function(e) {
    if(e.key == 'ArrowRight') {
        catObj.x += catObj.speed;
    }
    if(e.key == 'ArrowLeft') {
        catObj.x -= catObj.speed;
    }
    if(e.key == 'ArrowDown') {
        catObj.y += catObj.speed;
    }
    if(e.key == 'ArrowUp') {
        catObj.y -= catObj.speed;
    }
});

function timer() {
   if(ticTimer == 0) {
       gameOver = true;
       clearInterval(timeRunner);
   } else {
       ticTimer--;
   }
}

function restartGame() {
    ticTimer = 15;
    score = 0;
    gameOver = false;
    document.getElementById("restartButton").style.display = "none"; 
}

setInterval(render, 1); 
let timeRunner = setInterval(timer, 1000); 


const restartButton = document.createElement("button");
restartButton.id = "restartButton";
restartButton.textContent = "Restart";
restartButton.style.display = "none";
restartButton.style.position = "absolute";
restartButton.style.top = (canvas.offsetTop + canvas.height + 10) + "px";
restartButton.style.left = (canvas.offsetLeft + canvas.width / 2 - 50) + "px";
restartButton.onclick = restartGame;
document.body.appendChild(restartButton);
