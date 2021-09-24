// Adjust lowerLimit and upperLimit values to adjust character length range
const lowerLimit = 8;
const upperLimit = 128;

// Add or remove special characters from specialCharacters[] to fit requirements
const specialCharacters = ['!','@','#','$','%','^','&','*','(',')','+','\\','/','\'','?',':',',','{','}','[',']','~','`','-','_','.'];

// Set background effect on (true) or off (false)
const background = false;


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

  // Starts background animation when password is generated
  if (background === true) {
    setInterval(backgroundAnimation, 20);
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Prompt for length of password, gives an error message and re-prompts if input is invalid
function queryLength() {

  const inputLength = prompt("How many characters long will your password be?", "Must be a number " +
     lowerLimit + "-" + upperLimit);
  if (inputLength === null) {
    return null;
  } else if (isNaN(inputLength) || inputLength < lowerLimit || inputLength > upperLimit) {
    alert("Error: Not a number " + lowerLimit + "-" + upperLimit + ".");
    return queryLength();
  } 
  return inputLength;
}

// Confirm types of characters to be included
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

// Generate random upper or lower case letter
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

// Generate random special character
function generateSpecial() {
  const randIndex = Math.floor(Math.random() * specialCharacters.length);
  return specialCharacters[randIndex];
}

// Generate random number
function generateNumeric() {
  return Math.floor(Math.random() * 10);
}

// Find random empty slots in password array
function findRandEmptySlot(characters) {
  let slot;
  do {
    slot = Math.floor(Math.random() * characters.length);
  } while (characters[slot] !== undefined);
  return slot;
}

// Main password generation function
function generatePassword() {

  // Initial queries. Quits on "Cancel" for length input, or "Cancel" for all character types
  const length = queryLength();
  if (length === null) {
    return null;
  }

  const upperCase = queryUpperCase();
  const lowerCase = queryLowerCase();
  const numeric = queryNumeric();
  const special = querySpecial();

  if (upperCase === false && lowerCase === false && numeric === false && special === false) {
    alert("No character types chosen.");
    return null;
  }

  // Create empty array of desired length for password characters
  let characters = [];
  for (i = 0; i < length; i++) {
    characters.push(undefined);
  }

  // Generate at least one of each required character type at random empty index
  // and create array of required character generators
  let generators = [];
  if (upperCase) {
    const slot = findRandEmptySlot(characters);
    characters[slot] = generateLetter(true);

    generators.push(() => { return generateLetter(true);});
  }

  if (lowerCase) {
    const slot = findRandEmptySlot(characters);
    characters[slot] = generateLetter(false);

    generators.push(() => { return generateLetter(false);});
  }

  if (numeric) {
    const slot = findRandEmptySlot(characters);
    characters[slot] = generateNumeric();

    generators.push(() => { return generateNumeric();});
  }

  if (special) {
    const slot = findRandEmptySlot(characters);
    characters[slot] = generateSpecial();

    generators.push(() => { return generateSpecial();});
  }

  // Randomly choose other required character types and fill remaining empty indices
  characters.forEach(function callbackFn(value, i) {
    if (value === undefined) {
      const charType = Math.floor(Math.random() * generators.length);
      characters[i] = generators[charType]();
    }
  });

  // Return string from filled password characters array
  return characters.join('');
}

// Matrix-style background effect below, not necessary for funtionality
// Animates text in background using special characters allowed in password
var matrix = document.getElementById("matrix");
var ctx = matrix.getContext("2d");
matrix.height = window.innerHeight;
matrix.width = window.innerWidth;
var characterSize = 20;
var columns = matrix.width / characterSize;
var drops = [];
for (var x = 0; x < columns; x++) drops[x] = 1;

function backgroundAnimation() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, matrix.width, matrix.height);
  ctx.fillStyle = "rgb(0, 113, 206)";
  ctx.font = characterSize + "px arial";
  for (var i = 0; i < drops.length; i++) {
    var text = specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
    ctx.fillText(text, i * characterSize, drops[i] * characterSize);
    if (drops[i] * characterSize > matrix.height || Math.random() > 0.98) drops[i] = 0;
    drops[i]++;
  }
}