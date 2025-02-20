var twoSum = function (numbers, target) {
  let left = 0;
  let right = numbers.length - 1;
  while (left < right) {
    const cur = numbers[left] + numbers[right];

    if (cur === target) return [left + 1, right + 1];
    cur > target ? right-- : left++;
  }
};
