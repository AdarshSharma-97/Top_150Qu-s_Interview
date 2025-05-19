function searchRange(nums, target) {
  const first = findFirst(nums, target);
  const last = findLast(nums, target);
  return [first, last];
}

function findFirst(nums, target) {
  let low = 0;
  let high = nums.length - 1;
  let index = -1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (nums[mid] >= target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
    if (nums[mid] === target) index = mid;
  }
  return index;
}

function findLast(nums, target) {
  let low = 0;
  let high = nums.length - 1;
  let index = -1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (nums[mid] <= target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
    if (nums[mid] === target) index = mid;
  }
  return index;
}
