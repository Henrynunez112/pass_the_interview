const testGraph = require("./testGraph");

//implement the algorithm to find the shortest distance to ever vertex.
//Our implementation will the following steps:
// -Evaluate the distance between the starting vertex and its neighbors
// -If the new distance to the neighbor is lower than the previous
//  distance, record it, and queue up the neighbor
// -Dequeue the next vertex to evaluate
// - Repeat steps 2-3 until there are no more vertices left in the queue.

const dijkstras = (graph, startingVertex) => {
  let distances = {};
  let previous = {};
  graph.vertices.forEach((vertex) => {
    distances[vertex.data] = Infinity;
    previous[vertex.data] = null;
  });
  distances[startingVertex.data] = 0;
  const vertex = startingVertex;
  vertex.edges.forEach((edge) => {
    const alternate = edge.weight + distances[vertex.data];
    const neighborValue = edge.end.data;
    if (alternate < distances[neighborValue]) {
      distances[neighborValue] = alternate;
      previous[neighborValue] = vertex;
    }
  });

  return { distances, previous };
};
const results = dijkstras(testGraph, testGraph.vertices[0]);
console.log(results);

module.exports = dijkstras;
