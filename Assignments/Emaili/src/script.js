const name = document.querySelector("#name");
const pass = document.querySelector("#pass");
const  loginBTN = document.querySelector("#loginBTN");

let emailUser = 'fma';
let addUser = 'Fma#2024';

loginBTN.addEventListener("click", function() {
    if(name.value === emailUser && pass.value === addUser){
    alert('correct')
    }
    else{
     alert('incorrect')
    }
    });
  