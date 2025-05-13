function maxSubarraySumCircular(nums) {
  let totalSum = 0;
  let maxSum = -Infinity;
  let currentMax = 0;
  let minSum = Infinity;
  let currentMin = 0;

  for (const num of nums) {
    totalSum += num;

    currentMax = Math.max(num, currentMax + num);
    maxSum = Math.max(maxSum, currentMax);

    currentMin = Math.min(num, currentMin + num);
    minSum = Math.min(minSum, currentMin);
  }

  if (maxSum < 0) {
    return maxSum;
  }

  return Math.max(maxSum, totalSum - minSum);
}
