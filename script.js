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

var length = function queryLength() {
  length = prompt("How many characters long will your password be?", "Must be a number 8-128");
  if (length == null) {
    exit();
  } else if (typeof length !== "number" || length <= 8 || length >= 128) {
    alert("Error: Not a number 8-128.");
    queryLength();
  }
}

var upperCase = function queryUpperCase() {
  prompt("Will it include upper case letters? Click OK for yes or Cancel for no.");
}

var lowerCase = function queryLowerCase() {
  prompt("Will it include lower case letters? Click OK for yes or Cancel for no.");
}

var numeric = function queryNumeric() {
  prompt("Will it include numbers? Click OK for yes or Cancel for no.");
}

var special = function querySpecial() {
  prompt("Will it include special characters? Click OK for yes or Cancel for no.");
}
