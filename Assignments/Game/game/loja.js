
let rrafshi = document.createElement("canvas");
rrafshi.width = 512;
rrafshi.height = 488;

document.body.appendChild(rrafshi);
let points = 0;
let timeCounter = 10;

let ctx = rrafshi.getContext("2d");

let bgrRrafsh = new Image();

let bgReady = false;
bgrRrafsh.onload = function () {
    ctx.drawImage(bgrRrafsh, 0, 0);
    bgReady = true;
};
bgrRrafsh.src = "images/background.png";

let miuReady = false;
let miuImg = new Image();
miuImg.src = "images/mouse.png";


miuImg.onload = function () {

    miuReady = true;
}
let miu = {};
miu.x = 100;
miu.y = 100;
miu.width = 52;
miu.height = 54;

let macaReady = false;
let macaImg = new Image();
macaImg.src = "images/cat.png";


macaImg.onload = function () {
    macaReady = true;
}
let maca = {};
maca.x = 300;
maca.y = 300;
maca.width = 128;
maca.height = 128;

let macaSpeed = 10;

addEventListener("keydown", function (e) {
    console.log(e.key)
    if (e.key == "ArrowRight") {
        maca.x += macaSpeed;
    }
    if (e.key == "ArrowLeft") {
        maca.x -= macaSpeed;
    }
    if (e.key == "ArrowDown") {
        maca.y += macaSpeed;
    }
    if (e.key == "ArrowUp") {
        maca.y -= macaSpeed;
    }

}, false);


let render = function () {
    if (bgReady) { ctx.drawImage(bgrRrafsh, 0, 0); }
    if (miuReady) { ctx.drawImage(miuImg, miu.x, miu.y); }
    if (macaReady) { ctx.drawImage(macaImg, maca.x, maca.y) }

    if (maca.x > 500) { maca.x = -50; }
    if (maca.x < -51) { maca.x = 480; }
    if (maca.y < -64) { maca.y = 454; }
    if (maca.y > 454) { maca.y = -63; }

    // Cat touched the mouse
    if (
        maca.x < (miu.x + miu.width - 20)
        && maca.y < (miu.y + miu.height - 20)
        && miu.x < (maca.x + maca.width - 20)
        && miu.y < (maca.y + maca.height - 20)
    ) {
        points++;
        reset();
    }

    ctx.font = "24px serif";
    ctx.fillStyle = "white";
    ctx.fillText("points : " + points, 40, 50);


    ctx.fillText("Timer : " + timeCounter, 400, 50);
}

let reset = function () {
    miu.x = Math.floor(Math.random() * 400) + 20;
    miu.y = Math.floor(Math.random() * 380) + 55;
}

let timer = function () {

    if (timeCounter == 0) {
        gameOver();
    }
    else {
        timeCounter--;
    }
}

let gameOver = function () {
    ctx.font = "24px serif";    
    ctx.fillStyle = "white";
    if (points >= 5) {
        ctx.fillText("YOU WON : ", 260, 230);
    }

    else {
        ctx.fillText("YOU LOST : ", 260, 230);
    }
}

reset();
let drawCanvas = setInterval(render, 0.1);
let timerInteval = setInterval(timer, 1000);

