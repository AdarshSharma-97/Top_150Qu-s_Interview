function Node(val, neighbors) {
  this.val = val === undefined ? 0 : val;
  this.neighbors = neighbors === undefined ? [] : neighbors;
}

function cloneGraph(node) {
  if (!node) {
    return null;
  }

  const visited = new Map();

  function dfs(node) {
    if (visited.has(node.val)) {
      return visited.get(node.val);
    }

    const clonedNode = new Node(node.val);
    visited.set(node.val, clonedNode);

    for (const neighbor of node.neighbors) {
      clonedNode.neighbors.push(dfs(neighbor));
    }

    return clonedNode;
  }

  return dfs(node);
}
