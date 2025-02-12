const trap = (height) => {
  //at least three elements to trap rain drops
  if (height.length < 3) return 0;
  // left max, right max
  const maxHeightLeft = height.slice();

  const maxHeightRight = height.slice();

  //start from left
  for (let i = 1; i < height.length; i++) {
    //find the max of left
    if (maxHeightLeft[i] < maxHeightLeft[i - 1])
      maxHeightLeft[i] = maxHeightLeft[i - 1];
  }

  //the same with the left
  for (let i = height.length - 2; i >= 0; i--) {
    if (maxHeightRight[i] < maxHeightRight[i + 1])
      maxHeightRight[i] = maxHeightRight[i + 1];
  }
  // calculate the drop counts
  return height.reduce(
    (acc, cur, idx) =>
      acc + Math.min(maxHeightLeft[idx], maxHeightRight[idx]) - cur,
    0
  );
};
