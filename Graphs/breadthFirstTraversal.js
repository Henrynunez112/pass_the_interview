const testGraph = require("./testGraph");
const Queue = require("../Queue");

const breadthFirstTraversal = (start) => {
  const visitedVertices = [start];
  const visitQueue = new Queue();
  visitQueue.enqueue(start);
  const current = visitQueue.dequeue();
  console.log(current.data);

  start.edges.forEach((edge) => {
    const neighbor = edge.end;
    if (!visitedVertices.includes(neighbor)) {
      visitedVertices.push(neighbor);
    }
  });
};

breadthFirstTraversal(testGraph.vertices[0]);
