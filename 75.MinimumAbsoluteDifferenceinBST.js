var getMinimumDifference = function (root) {
  let [ans, pre] = [Infinity, -Infinity];
  const dfs = (root) => {
    if (!root) {
      return;
    }
    dfs(root.left);
    ans = Math.min(ans, root.val - pre);
    pre = root.val;
    dfs(root.right);
  };
  dfs(root);
  return ans;
};
