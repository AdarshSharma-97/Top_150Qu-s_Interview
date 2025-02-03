var canJump = function (nums) {
  const len = nums.length;
  let maxReach = 0; // maximum index we can reach

  for (let i = 0; i < len; i++) {
    // If the current index is not reachable from the previous indices
    // return false
    if (i > maxReach) {
      return false;
    }
    // Update the maximum reachable index
    maxReach = Math.max(maxReach, i + nums[i]);
    // If we can reach the end, return true
    if (maxReach >= len - 1) {
      return true;
    }
  }
  // We've iterated through the array and haven't reached the end,
  // so return false
  return false;
};
