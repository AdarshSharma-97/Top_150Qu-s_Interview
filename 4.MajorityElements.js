var majorityElement = function (nums) {
  let candidate = null;
  let count = 0;
  // Identify the majority candidate
  for (let num of nums) {
    if (count === 0) {
      candidate = num;
    }
    count += num === candidate ? 1 : -1;
  }

  return candidate;
};
