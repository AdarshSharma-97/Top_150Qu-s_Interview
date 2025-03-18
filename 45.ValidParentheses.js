var isValid = function (inputString) {
  // Initialise an array to store the closing brackets expected
  let expectedBrackets = [];

  // Loop through the letters in the input string
  for (let letter = 0; letter < inputString.length; letter++) {
    // Push the closing equivelant of any open brackets found
    if (inputString[letter] == "{") {
      expectedBrackets.push("}");
    } else if (inputString[letter] == "[") {
      expectedBrackets.push("]");
    } else if (inputString[letter] == "(") {
      expectedBrackets.push(")");
    }
    // If a close bracket is found, check that it matches the last stored open bracket
    else if (expectedBrackets.pop() !== inputString[letter]) {
      return false;
    }
  }

  // Return based on whether or not anything remains
  // (indicates that there were incorrect brackets)
  return !expectedBrackets.length;
};
