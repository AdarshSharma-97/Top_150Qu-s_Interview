var mapOfNumbers = {
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"],
};

var letterCombinations = function (digits) {
  // Return early if no digits were supplied
  if (!digits.length) {
    return [];
  }

  // Initialise an array to store all possible letter combinations up to the previous digit
  let lastDigitPossibilities = [""];

  // Loop through each digit
  for (let i = 0; i < digits.length; i++) {
    // Initialise an array to store the possibilties for this digit
    let newPossibilities = [];

    // Loop through the last set of possibilities
    for (let x = 0; x < lastDigitPossibilities.length; x++) {
      // Loop through the possible letters for the current number
      for (let letter of mapOfNumbers[digits[i]]) {
        // Add the current number to each of the last set of possibilities
        newPossibilities.push(lastDigitPossibilities[x].concat(letter));
      }
    }

    // Check if this was the last digit
    if (i == digits.length - 1) {
      // Return the latest batch of possibilities as the answer
      return newPossibilities;
    }

    lastDigitPossibilities = newPossibilities;
  }
};
