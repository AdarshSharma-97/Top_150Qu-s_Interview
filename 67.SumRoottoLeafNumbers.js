var sumNumbers = function (root) {
  function dfs(root, s) {
    if (!root) return 0;
    s = s * 10 + root.val;
    if (!root.left && !root.right) return s;
    return dfs(root.left, s) + dfs(root.right, s);
  }
  return dfs(root, 0);
};
