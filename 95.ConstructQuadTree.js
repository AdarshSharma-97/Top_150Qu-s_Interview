/**
 * Definition for a QuadTree node.
 * function Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *    this.val = val;
 *    this.isLeaf = isLeaf;
 *    this.topLeft = topLeft;
 *    this.topRight = topRight;
 *    this.bottomLeft = bottomLeft;
 *    this.bottomRight = bottomRight;
 * };
 */

/**
 * @param {number[][]} grid
 * @return {Node}
 */
const construct = (grid) => {
  const n = grid.length;

  const buildTree = (rowStart, colStart, size) => {
    if (size === 1) {
      return new Node(grid[rowStart][colStart] === 1, true);
    }

    const halfSize = size / 2;

    const topLeft = buildTree(rowStart, colStart, halfSize);
    const topRight = buildTree(rowStart, colStart + halfSize, halfSize);
    const bottomLeft = buildTree(rowStart + halfSize, colStart, halfSize);
    const bottomRight = buildTree(
      rowStart + halfSize,
      colStart + halfSize,
      halfSize
    );

    if (
      topLeft.isLeaf &&
      topRight.isLeaf &&
      bottomLeft.isLeaf &&
      bottomRight.isLeaf &&
      topLeft.val === topRight.val &&
      topRight.val === bottomLeft.val &&
      bottomLeft.val === bottomRight.val
    ) {
      return new Node(topLeft.val, true);
    } else {
      return new Node(false, false, topLeft, topRight, bottomLeft, bottomRight);
    }
  };

  return buildTree(0, 0, n);
};
