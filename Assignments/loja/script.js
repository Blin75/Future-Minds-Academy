const bgr = document.createElement("img");
Image.scr = 'images/backgorund.png';
 const mainWrapper = document.querySelector('.mainWrapper');
 mainWrapper.appendChild(bgr);

 const canvas = document.querySelector('#canvas');
 const ctx = canvas.getContext("2d");
 const bgGame = new Image();
 bgGame.src = "images/backgorund.png";
 
 bgGame.onload = function(){
    ctx.drawImage(bgGame, 0, 0);
 }

 

 const catImg = new Image();
 catImg.src = "images/cat.png";
 catImg.onload = function(){
    ctx.drawImage(catImg, 460, 0);
 }
