function calcEquation(equations, values, queries) {
  const graph = new Map();

  for (let i = 0; i < equations.length; i++) {
    const [dividend, divisor] = equations[i];
    const value = values[i];

    if (!graph.has(dividend)) graph.set(dividend, []);
    if (!graph.has(divisor)) graph.set(divisor, []);

    graph.get(dividend).push({ node: divisor, weight: value });
    graph.get(divisor).push({ node: dividend, weight: 1 / value });
  }

  function dfs(start, end, visited = new Set()) {
    if (start === end) return 1;
    visited.add(start);

    const neighbors = graph.get(start) || [];
    for (const neighbor of neighbors) {
      if (!visited.has(neighbor.node)) {
        const result = dfs(neighbor.node, end, visited);
        if (result !== -1) {
          return neighbor.weight * result;
        }
      }
    }
    return -1;
  }

  const results = [];
  for (const query of queries) {
    const [dividend, divisor] = query;
    if (!graph.has(dividend) || !graph.has(divisor)) {
      results.push(-1);
    } else {
      results.push(dfs(dividend, divisor));
    }
  }
  return results;
}
