const email = document.querySelector("#email");
const pass = document.querySelector("#pass")
const  loginBTN = document.querySelector("#loginBTN");
const msg = document.querySelector("#msg");

let emailUser = 'info@futureminds.io';
let addUser = 'Fma#2024';

loginBTN.addEventListener("click", function() {
  if(email.value === emailUser && pass.value === addUser){
   msg.innerHTML = `<span style="color: green">Correct</span>`
  }
  else{
   msg.innerHTML = `<span style="color: red">Incorrect</span>`
  }
  });
