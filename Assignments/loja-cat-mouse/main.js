const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext("2d");
const bgGame = new Image();
bgGame.src = "images/background.png";

let bgReady = false;
bgGame.onload = function(){
    bgReady = true;
}

catReady = false;
const catImg = new Image();
catImg.src = "images/cat.png";
catImg.onload = function(){
    catReady = true;
}

let mouseObj = {};
    mouseObj.width = 52;
    mouseObj.height = 54;

    mouseObj.x = Math.floor(Math.random()*460) - mouseObj.width;
    mouseObj.y = Math.floor(Math.random()*426) - mouseObj.height;

    let mouseReady = false;
const mouseImg = new Image();
mouseImg.src = "images/mouse.png";
mouseImg.onload = function(){
    mouseReady = true;
}

let catObj = {};
catObj.x = 300;
catObj.y = 300;
let catSpeed = 10;

addEventListener("keydown", function (e) {
    if (e.key == "ArrowRight") {
        catObj.x += catSpeed;
    }
    if (e.key == "ArrowLeft") {
        catObj.x -= catSpeed;
    }
    if (e.key == "ArrowDown") {
        catObj.y += catSpeed;
    }
    if (e.key == "ArrowUp") {
        catObj.y -= catSpeed;
    }
});



function render(){
    if(bgReady){ctx.drawImage(bgGame, 0, 0);}
    if(catReady){ctx.drawImage(catImg, catObj.x, catObj.y);}
    if(catReady){ctx.drawImage(mouseImg, mouseObj.x, mouseObj.y);}

    if (catObj.x > 500) { catObj.x = -50; }
    if (catObj.x < -51) { catObj.x = 480; }
    if (catObj.y < -64) { catObj.y = 454; }
    if (catObj.y > 454) { catObj.y = -63; }
}

setInterval(render,1);