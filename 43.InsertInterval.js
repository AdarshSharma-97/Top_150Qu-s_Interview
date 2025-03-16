const insert = (intervals, newInterval) => {
  let results = [];
  let currentIdx = 0;

  // Part 1
  while (intervals[currentIdx] && intervals[currentIdx][1] < newInterval[0]) {
    results.push(intervals[currentIdx]);
    currentIdx++;
  }

  // Part 2
  results.push(newInterval);

  // Part 3
  while (currentIdx < intervals.length) {
    let lastInterval = results[results.length - 1];
    let currentInterval = intervals[currentIdx];
    if (lastInterval[1] < currentInterval[0]) {
      results.push(currentInterval);
    } else {
      let merged = [
        Math.min(currentInterval[0], lastInterval[0]),
        Math.max(currentInterval[1], lastInterval[1]),
      ];
      results.pop();
      results.push(merged);
    }
    currentIdx++;
  }

  return results;
};
