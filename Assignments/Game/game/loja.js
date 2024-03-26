
let rrafshi = document.createElement("canvas");
rrafshi.width = 512;
rrafshi.height = 488;

document.body.appendChild(rrafshi);

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


let macaReady = false;
let macaImg = new Image();
macaImg.src = "images/cat.png";


macaImg.onload = function () {
    macaReady = true;
}
let maca = {};
maca.x = 300;
maca.y = 300;

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

    if (maca.x > 500) {
        maca.x = -50;
    }

    if (maca.x < -51) {
        maca.x = 480;
    }


}

setInterval(render, 0.1);

