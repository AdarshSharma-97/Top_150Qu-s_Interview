var hasPathSum = function (root, targetSum) {
  if (!root) return false;
  const recurse = (node, curSum) => {
    if (!node) return false;

    curSum += node.val;

    // If it's a leaf node
    if (!node.left && !node.right) {
      return curSum === targetSum;
    }

    // Recursively check the left and right subtrees
    return recurse(node.left, curSum) || recurse(node.right, curSum);
  };

  return recurse(root, 0);
};

// Example usage
let root = new TreeNode(
  5,
  new TreeNode(4, new TreeNode(11, new TreeNode(7), new TreeNode(2))),
  new TreeNode(8, new TreeNode(13), new TreeNode(4, null, new TreeNode(1)))
);
let targetSum = 22;
console.log(hasPathSum(root, targetSum)); // Output: true
