// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  if (password === null) {
    return;
  }
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function queryLength() {
  const inputLength = prompt("How many characters long will your password be?", "Must be a number 8-128");
  if (inputLength === null) {
    return null;
  } else if (isNaN(inputLength) || inputLength <= 8 || inputLength >= 128) {
    alert("Error: Not a number 8-128.");
    return queryLength();
  } 
  return inputLength;
}

function queryUpperCase() {
  return confirm("Will it include upper case letters? Click OK for yes or Cancel for no.");
}

function queryLowerCase() {
  return confirm("Will it include lower case letters? Click OK for yes or Cancel for no.");
}

function queryNumeric() {
  return confirm("Will it include numbers? Click OK for yes or Cancel for no.");
}

function querySpecial() {
  return confirm("Will it include special characters? Click OK for yes or Cancel for no.");
}

function generateLetter(isUpper) {
  const randLetter = Math.floor(Math.random() * 26);
  if (isUpper) {
    const upperA = 65;
    return String.fromCharCode(randLetter + upperA);
  } else {
    const lowerA = 97;
    return String.fromCharCode(randLetter + lowerA);
  }
}

function generatePassword() {
  const length = queryLength();
  if (length === null) {
    return null;
  }
  const upperCase = queryUpperCase();
  const lowerCase = queryLowerCase();
  const numeric = queryNumeric();
  const special = querySpecial();
  if (upperCase === false && lowerCase === false && numeric === false && special === false) {
    alert(":P");
    return null;
  }

  var characters = [];
  
  console.log(length + upperCase + lowerCase + numeric + special);
}

// let str = '';
// for (i = 0; i < 100; i++) {
//   str+= generateLetter(true);
// }
// console.log(str);
