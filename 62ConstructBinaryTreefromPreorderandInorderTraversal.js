var buildTree = function (preorder, inorder) {
  if (preorder.length === 0 || inorder.length === 0) {
    return null;
  }
  const root = new TreeNode(preorder[0]);
  const rootIndex = inorder.indexOf(root.val);
  root.left = buildTree(
    preorder.slice(1, rootIndex + 1),
    inorder.slice(0, rootIndex)
  );
  root.right = buildTree(
    preorder.slice(rootIndex + 1, preorder.length),
    inorder.slice(rootIndex + 1, inorder.length)
  );
  return root;
};
