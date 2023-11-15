let pass = document.querySelector('.pass');
let divi = document.querySelector('.copytxt');
let length = 16;

let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let number = "0123456789";
let specialChar = "@#$%&*";
let allChar = upperCase + lowerCase + number + specialChar;

function createPassword(){

    let password = "";
    password = password + upperCase[Math.floor(Math.random() * upperCase.length)];
    password = password + lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password = password + number[Math.floor(Math.random() * number.length)];
    password = password + specialChar[Math.floor(Math.random() * specialChar.length)];

    while(length > password.length){

        password = password + allChar[Math.floor(Math.random() * allChar.length)];

    }

    pass.innerText = password;

    divi.classList.remove("active");

}

function copyPass(){

    let copyPassword = document.getElementById('pass').innerText;
    navigator.clipboard.writeText(copyPassword);
    divi.classList.add("active");
    
}


    
