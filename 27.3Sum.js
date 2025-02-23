var threeSum = function (nums) {
  // Initialise an array to store the solutions
  let solutionArrays = [];

  // Sort the array
  const sortedNums = nums.sort((a, b) => a - b);

  // Loop through the array (excluding the last 2 entries)
  for (let i = 0; i < sortedNums.length - 2; i++) {
    // Break out if the first number is higher than 0 (as no sum of 3 can then equal 0)
    if (sortedNums[i] > 0) {
      break;
    }

    // Skip this number if it is a repeat of the last one
    if (i > 0 && sortedNums[i] == sortedNums[i - 1]) {
      continue;
    }

    // Establish a window from the next number to the end of the array
    let left = i + 1;
    let right = sortedNums.length - 1;

    // Run until the window is closed
    while (left < right) {
      // Add together the current number, and each side of the window
      const subTotal = sortedNums[left] + sortedNums[right] + sortedNums[i];

      // If we've reached an answer, add it to the array of answers
      if (subTotal == 0) {
        solutionArrays.push([
          sortedNums[i],
          sortedNums[left],
          sortedNums[right],
        ]);

        // Move the left-hand edge of the window to the right until it reaches a different number
        do {
          left++;
        } while (sortedNums[left] == sortedNums[left - 1]);

        // Move the right-hand edge of the window to the left until it reaches a different number
        do {
          right--;
        } while (sortedNums[right] == sortedNums[right + 1]);
      }
      // If we're too low
      else if (subTotal < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return solutionArrays;
};
