const semestersRequired = (numCourses, prereqs) => {
  const graph = buildGraph(prereqs, numCourses);

  const distances = {};
  let maxDist = 0;

  for (let key = 0; key < numCourses; key++) {
    const thisDist = traverse(graph, key, distances);
    if (thisDist > maxDist) maxDist = thisDist;
  }

  return maxDist;
};

const traverse = (graph, key, distances) => {
  if (graph[key].length === 0) return 1;

  let maxDist = 0;
  for (const neighbour of graph[key]) {
    if (neighbour in distances) {
      const neighbourDist = distances[neighbour];
      if (neighbourDist > maxDist) maxDist = neighbourDist;
    } else {
      const neighbourDist = traverse(graph, neighbour, distances);
      if (neighbourDist > maxDist) maxDist = neighbourDist;
    }
  }

  distances[key] = maxDist + 1;
  return distances[key];
};

const buildGraph = (prereqs, numCourses) => {
  const graph = {};

  for (let key = 0; key < numCourses; key++) {
    graph[key] = [];
  }

  for (const prereq of prereqs) {
    const [key, val] = prereq;
    graph[key].push(val);
  }

  return graph;
};

module.exports = {
  semestersRequired,
};
