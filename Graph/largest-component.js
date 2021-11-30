const largestComponent = (graph) => {
  const visited = new Set();
  let largest = 0;
  for (let node in graph) {
    const currentSize = countSize(node, graph, visited);
    if (currentSize > largest) largest = currentSize;
  }
  return largest;
};

const countSize = (node, graph, visited) => {
  if (visited.has(String(node))) return 0;
  visited.add(String(node));

  let size = 1;

  for (let neighbor of graph[node]) {
    size += countSize(neighbor, graph, visited);
  }

  return size;
};

module.exports = {
  largestComponent,
};
