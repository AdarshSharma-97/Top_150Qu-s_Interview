var averageOfLevels = function (root) {
  const queue = [];
  const averagePerLevel = [];
  queue.push(root);
  while (queue.length) {
    let sum = 0;
    // Save the length value to calculate the average after getting the sum of all values in at that level
    let levelLength = queue.length;
    for (let i = 0; i < levelLength; i++) {
      let node = queue.shift();
      sum += node.val;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    averagePerLevel.push(sum / levelLength);
  }
  return averagePerLevel;
};
