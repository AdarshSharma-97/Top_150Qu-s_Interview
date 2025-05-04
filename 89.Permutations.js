function permute(nums) {
  const result = [];

  function backtrack(index, current) {
    if (index === nums.length) {
      result.push([...current]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (!current.includes(nums[i])) {
        current.push(nums[i]);
        backtrack(index + 1, current);
        current.pop();
      }
    }
  }

  backtrack(0, []);
  return result;
}
