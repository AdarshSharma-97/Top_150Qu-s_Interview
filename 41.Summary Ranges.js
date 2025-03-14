var summaryRanges = function (nums) {
  let start, end;
  let res = [];

  for (let i = 0; i < nums.length; i++) {
    start = end = nums[i];

    for (; nums[i + 1] === nums[i] + 1; i++) {
      end = nums[i + 1];
    }

    res.push(start === end ? "" + start : start + "->" + end);
  }

  return res;
};
