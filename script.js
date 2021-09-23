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

function generateSymbol() {
  const symbols = ['#','%','^','&','*','(',')','!','@','#'];
  const randIndex = Math.floor(Math.random() * symbols.length);
  return symbols[randIndex];
}

function generateNumeric() {
  return Math.floor(Math.random() * 10);
}

function findRandEmptySlot(characters) {
  let slot;
  do {
    slot = Math.floor(Math.random() * characters.length);
  } while (characters[slot] !== undefined);
  return slot;
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
    alert("No character types chosen.");
    return null;
  }

  let characters = [];
  for (i = 0; i < length; i++) {
    characters.push(undefined);
  }

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

  for (let i = 0; i < length; i++) {
    if (characters[i] === undefined) {
      const charType = Math.floor(Math.random() * generators.length);
      characters[i] = generators[charType]();
    }
  }

  return characters.join('');
}
