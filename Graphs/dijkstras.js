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
  graph.vertices.forEach((vertex) => {
    if (!distances[vertex.data]) {
      distances[vertex.data] = Infinity;
    }
  });
};
const results = dijkstras(testGraph, testGraph.vertices[0]);

module.exports = dijkstras;
