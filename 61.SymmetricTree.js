var isSymmetric = function (root) {
  if (root === null) return true;

  const compareNode = function (left, right) {
    if (
      (left === null && right !== null) ||
      (left !== null && right === null)
    ) {
      return false;
    } else if (left === null && right === null) {
      return true;
    } else if (left.val !== right.val) {
      return false;
    }

    let outside = compareNode(left.left, right.right);
    let inside = compareNode(left.right, right.left);
    return outside && inside;
  };

  return compareNode(root.left, root.right);
};
