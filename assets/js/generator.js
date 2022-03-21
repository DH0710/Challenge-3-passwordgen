




const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N" , "O", "P", "Q", "R" , "S", "T" , "U" , "V", "W" ,"X", "Y", "Z"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-"];













// Generator functions - http://www.net-comber.com/charset.html

// function getRandomLower() {
//     return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
// }

// function getRandomUpper() {
//     return String.fromCharCode(Math.floor(Math.random() * 26) + 65);

// }

// function getRandomNumber() {
//     return String.fromCharCode(Math.floor(Math.random() * 10) + 48);

// }

// function getRandomSymbol() {
//     const symbols = '!@#$^%&*()_+/?.,';
//     return symbols[Math.floor(Math.random() * symbols.length)];
// }



// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// function that receives number of characters 
// function that validates input number 
var passwordlength = 0
function passwordlengthinput() {
    //ask for users input
    passwordlength = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
    if (passwordlength >= 8 && passwordlength <= 128) {
        return passwordlength

    } else {
        //validates user input
        alert("That response is invalid!");
        return passwordlengthinput()
    }
}

function numbersInput() {
    var numbersInput = window.prompt("Do you need numbers? Enter Y for YES and N for NO.");
    // validate response
    if (numbersInput === "Y" || numbersInput === "y") {
        return true;
    } else if (numbersInput === "N" || numbersInput === "n") {
        return false;
    } else {
        window.alert("That response was not valid!");
        numbersInput();// recursively call this function until response is valid
    }
}










// function that ask lowwercase criteria

// function that prompts user for lowercase requirement and returns true if input is valid
function lowerCaseCheck() {
    var lowerCaseInput = window.prompt("Do you need lowercase letters? Enter Y for YES and N for NO.");
    // validate response
    if (lowerCaseInput === "Y" || lowerCaseInput === "y") {
        return true;
    } else if (lowerCaseInput === "N" || lowerCaseInput === "n") {
        return false;
    } else {
        window.alert("That response was not valid!");
        lowerCaseCheck();// recursively call this function until response is valid
    }
}


// function that ask uppercase criteria
function upperCaseCheck() {
    var upperCaseInput = window.prompt("Do you need uppercase letters? Enter Y for YES and N for NO.");
    if (upperCaseInput === "Y" || upperCaseInput === "y") {
        return true;
    } else if (upperCaseInput === "N" || upperCaseInput === "n") {
        return false;
    } else {
        window.alert("That response was not valid");
        upperCaseCheck();
    }
}



// function that ask special symbol criteria
function symbolsInput() {
    var symbolsInput = window.prompt("Do you need symbols? Enter Y for YES and N for NO.");
    if (symbolsInput === "Y" || symbolsInput === "y") {
        return true;
    } else if (symbolsInput === "N" || symbolsInput === "n") {
        return false;
    } else {
        window.alert("That response was not valid");
        symbolsInput();

    }
}




// function that calls all of my criteria functions 

function generatePassword() {
    var genpassword = []
    var passwordlength = passwordlengthinput()
    var lowerChar = lowerCaseCheck()
    var upperChar = upperCaseCheck()
    var symbolChar = symbolsInput()
    var numberChar = numbersInput()
 
    while (genpassword.length < passwordlength ) {

        if (lowerChar === true) {
            genpassword.push(lowerCase[Math.floor(Math.random() * lowerCase.length)])
            if (genpassword.length === passwordlength) {
                break;
            };
                
        }
        
        if (upperChar === true) {
            genpassword.push(upperCase[Math.floor(Math.random() * upperCase.length)])
            if (genpassword.length === passwordlength) {
                break;
            };
        }

        if (symbolChar === true) {
            genpassword.push(symbols[Math.floor(Math.random() * symbols.length)])
            if (genpassword.length === passwordlength) {
                break;
            };
        }

        if (numberChar === true) {
            genpassword.push(numbers[Math.floor(Math.random() * numbers.length)])
            if (genpassword.length === passwordlength) {
                break;
            };

        }
    }
    return genpassword

}


// WHEN prompted for password criteria
// THEN I select which criteria to include in the password

//  prompted for the length of the password
// I choose a length of at least 8 characters and no more than 128 characters




// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected

// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria

// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page







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





