var invertTree = function (root) {
  if (!root) {
    return root;
  }
  const l = invertTree(root.left);
  const r = invertTree(root.right);
  root.left = r;
  root.right = l;
  return root;
};
