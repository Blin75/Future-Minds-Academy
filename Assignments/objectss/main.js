const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
const timerDV = document.querySelector("#timerDV");
const pointDV = document.querySelector("#pointDV");
const msg = document.querySelector('#msg');
const restartBtn = document.querySelector("#restartBtn")

let points = 0;
let timer = 10;
let winningTotal = 3;
let feezeCat = false;

let maca = {};
maca.width = 128;
maca.height = 128;
maca.color = "#ff0000";
maca.x = 300;
maca.y = 300;
maca.speed = 10;
let macaOn = false;

const myMaca = new Image();
myMaca.src = "cat.png";

myMaca.onload = function () {
    macaOn = true;
}

let miu = {};
miu.width = 48;
miu.height = 48;
miu.color = "#ff0000";
miu.x = 450;
//miu.x = Math.random() * canvas.width;
miu.y = Math.random() * canvas.height;
miu.speed = 10;
let miuOn = false;

const myMiu = new Image();
myMiu.src = "miu.png";

myMiu.onload = function () {
    miuOn = true;
}

addEventListener("keydown", function (event) {
    if(!feezeCat) {
        if (event.key == "ArrowRight") { maca.x += maca.speed; }
        if (event.key == "ArrowLeft") { maca.x -= maca.speed;}
        if (event.key == "ArrowUp") { maca.y -= maca.speed;}
        if (event.key == "ArrowDown") { maca.y += maca.speed;}
    }
});

function render(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if(macaOn) { ctx.drawImage(myMaca, maca.x, maca.y); }
    if(miuOn) { ctx.drawImage(myMiu, miu.x, miu.y); }

    if(maca.x > 770){ maca.x = -60; }
    if(maca.x < -60){ maca.x = 750; }
    if(maca.y > 500){ maca.y = -60; }
    if(maca.y < -60){ maca.y = 450; }

    if(
        maca.x + 105 > miu.x && maca.y < miu.y + 45
        && maca.x < miu.x + 20 && maca.y > miu.y - 120

    ){
        miu.x = Math.random()*755;
        miu.y = Math.random()*400;
        points++;
    }

    pointDV.textContent = "Points: " + points;
}

timerDV.textContent = "Timer: " + timer;

function countDown(){
    if(timer != 0) { timer--; }
    timerDV.textContent = "Timer: " + timer;

    if(timer == 0){
        feezeCat = true; 
        if(points >= winningTotal){ msg.textContent = "You WON"; }
        else { msg.textContent = "You LOST"; }
        restartBtn.style.visibility = "visible";
     }
}

restartBtn.addEventListener('click', function(){
    window.location.reload();
})

setInterval(render, 1);
setInterval(countDown, 1000);