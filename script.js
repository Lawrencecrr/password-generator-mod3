// Assignment Code

var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("")
var number = "123456789".split("")
var specialChar = "!@#$%^&*(;,>?".split("")
var globalSet = [];
var password = "";

var generateBtn = document.querySelector("#generate");


function generatePassword() {
    console.log("Hey! you clicked the button!") 

    var passwordLength = prompt("choose a length of at least 8 characters and no more that 128 characters") 

    if (passwordLength < 8 || passwordLength >128) {
     alert("Criteria not met!")
     generatePassword();
    } else {
        var wantsLowercase = confirm("do you want to include lower case letters?")
        var wantsUppercase = confirm("do you want to include upper case?")
        var wantsNumbers = confirm("do you want to include numbers in your password?")
        var wantsSpecialCharacter = confirm("do you want special characters in your password?")
        if (wantsLowercase === true) {
            globalSet = globalSet.concat(lowerCase);
            console.log(globalSet)
        }
        if (wantsUppercase === true) {
            globalSet = globalSet.concat(upperCase);
            console.log(globalSet)
        }
        if (wantsNumbers === true) {
            globalSet = globalSet.concat(number);
            console.log(globalSet)
        }
        if (wantsSpecialCharacter === true) {
            globalSet = globalSet.concat(specialChar)
            console.log(globalSet)
        }

        for (var i = 0; i <passwordLength; i++) {
            let currentChar = Math.floor(Math.random() * globalSet.length);
           password += globalSet[currentChar];
        }

        return password;
    }
    
   }


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Create arrays of each of the following: uppercase letters, lowercase letters, numbers, special characters

// Prompt user for number of characters in their password

// If user chooses < 8 or > 128, restart the process

// If user chooses length between 8 & 128, continue

// Confirm whether user wants to use each of the character sets in the arrays

// CHOICE: Push all chosen arrays into a single mega-array OR keep them in separate arrays (I would recommend the first one)

// Need a function to generate a random character from the chosen array(s)
  // Math.floor(Math.random() * array.length)

// Add the chosen random character to an array or string
// Repeat generating random characters until the password is the chosen length
// !Need a variable to store the user's choice for password length
// If storing random characters in an array, join them into a string
// Make use of the provided code to print the password to the page


