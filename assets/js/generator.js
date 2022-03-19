// DOM elements

const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');


const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol, 
};

generateEl.addEventListener('click', () => {
    const length = +lengthEl.value;
    const hasLower = lowerCaseEl.checked;
    const hasUpper = uppercaseEl. checked;
    const hasNumber = numbersEl.checked;
    const hasSymbol = symbolsEl.checked;
    
    resultEl.innerText = generatePassword(
        hasLower, 
        hasUpper, 
        hasNumber,  
        hasSymbol, 
        length
    );
    });

    // Generate password function
    function generatePassword( lower, upper, number, symbol, length)  {
// 1. Init pw par
// 2. Filter out unchecked types
// 3. Loop over length call generator function for each type 
// 4. Add final pw to the pw var and return

let generatedPassword = '';

const typesCount = lower + upper + number + symbol;

console.log('typesCount:', typesCount);

const typesArr = [{lower}, {upper}, {number}, {symbol}];

console.log( 'typesArr:', typesArr);
    }


//start function to generate password
function generatePassword() {
    //ask for users input
 enter = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
    if (!enter) {
     alert("This needs a value");
    } else if (enter < 8 || enter > 128) {
    //validates user input
     enter = parseInt(prompt("You must choose between 8 and 128"));
    } else {
    //prompts after user input validated
     confirmNumber = confirm("Will this contain numbers? Ok for YES. Cancel for NO.");







// Generator functions - http://www.net-comber.com/charset.html

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper () {
    return String.fromCharCode(Math.floor(Math.random()*26) + 65);

}

function getRandomNumber () {
    return String.fromCharCode(Math.floor(Math.random()*10) + 48);

}

function getRandomSymbol() {
    const symbols = '!@#$^%&*()_+/?.,';
    return symbols[Math.floor(Math.random() * symbols.length)];
}








// Assignment Code
var generateBtn = document.querySelector("#generate");
 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





