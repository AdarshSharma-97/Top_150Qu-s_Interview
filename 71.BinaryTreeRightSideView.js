var rightSideView = function (root) {
  const output = [];
  // Return an emtpy array if the root is null
  if (!root) return output;
  const queue = [];
  queue.push(root);
  while (queue.length) {
    // Push the first item in the queue to the output array
    // We populate the queue from right most node to left most node
    // Nodes in the front of the queue will be the closest to the right side
    output.push(queue[0].val);
    const levelLength = queue.length;
    // Add nodes into the queue from right to left
    for (let i = 0; i < levelLength; i++) {
      const cur = queue.shift();
      if (cur.right) queue.push(cur.right);
      if (cur.left) queue.push(cur.left);
    }
  }
  return output;
};
