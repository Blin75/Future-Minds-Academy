const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
const timerDV = document.querySelector("#timerDV");
const pointDV = document.querySelector("#pointDV");
const msg = document.querySelector("#msg");
const restartBtn = document.querySelector("#restartBtn");

let points = 0;
let timer = 10;
let winningTotal = 3;
let freezeCat = false;

let maca = {
    width: 128,
    height: 128,
    x: 300,
    y: 300,
    speed: 10,
    image: new Image(),
};
maca.image.src = "cat.png";
let macaOn = false;
maca.image.onload = function () {
    macaOn = true;
};

let miu = {
    width: 48,
    height: 48,
    x: 450,
    y: Math.random() * canvas.height,
    speed: 10,
    image: new Image(),
};
miu.image.src = "miu.png";
let miuOn = false;
miu.image.onload = function () {
    miuOn = true;
};

addEventListener("keydown", function (event) {
    if (!freezeCat) {
        if (event.key == "ArrowRight") maca.x += maca.speed;
        if (event.key == "ArrowLeft") maca.x -= maca.speed;
        if (event.key == "ArrowUp") maca.y -= maca.speed;
        if (event.key == "ArrowDown") maca.y += maca.speed;
    }
});

function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (macaOn) ctx.drawImage(maca.image, maca.x, maca.y, maca.width, maca.height);
    if (miuOn) ctx.drawImage(miu.image, miu.x, miu.y, miu.width, miu.height);

    // Wrap around canvas edges
    if (maca.x > canvas.width) maca.x = -maca.width;
    if (maca.x < -maca.width) maca.x = canvas.width;
    if (maca.y > canvas.height) maca.y = -maca.height;
    if (maca.y < -maca.height) maca.y = canvas.height;

    // Collision detection
    if (
        maca.x < miu.x + miu.width &&
        maca.x + maca.width > miu.x &&
        maca.y < miu.y + miu.height &&
        maca.y + maca.height > miu.y
    ) {
        // Move `miu` to a new random location
        miu.x = Math.random() * (canvas.width - miu.width);
        miu.y = Math.random() * (canvas.height - miu.height);
        points++;
    }

    pointDV.textContent = "Points: " + points;
}

timerDV.textContent = "Timer: " + timer;

function countDown() {
    if (timer > 0) {
        timer--;
        timerDV.textContent = "Timer: " + timer;
    } else {
        freezeCat = true;
        msg.textContent = points >= winningTotal ? "You WON" : "You LOST";
        restartBtn.style.visibility = "visible";
    }
}

restartBtn.addEventListener("click", function () {
    location.reload();
});

// Run `render` more smoothly with 30ms interval
setInterval(render, 30);
setInterval(countDown, 1000);
