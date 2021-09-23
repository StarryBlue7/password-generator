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

// Prompt for length of password, gives an error message and re-prompts if input is invalid
function queryLength() {
  const lowerLimit = 8;
  const upperLimit = 128;
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

// Generate upper or lower case letter
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

// Generate symbol
function generateSymbol() {
  const symbols = ['!','@','#','$','%','^','&','*','(',')','+','\\','/','\'','?',':',',','{','}','[',']','~','`','-','_','.'];
  const randIndex = Math.floor(Math.random() * symbols.length);
  return symbols[randIndex];
}

// Generate number
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

  // Initial queries, quit on "Cancel" for length input or "Cancel" for all character types
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
    characters[slot] = generateSymbol();

    generators.push(() => { return generateSymbol();});
  }

  // Randomly choose other required character types and fill remaining empty indices
  for (let i = 0; i < length; i++) {
    if (characters[i] === undefined) {
      const charType = Math.floor(Math.random() * generators.length);
      characters[i] = generators[charType]();
    }
  }

  // Return string from filled password characters array
  return characters.join('');
}
