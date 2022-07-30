const testGraph = require("./testGraph");
const Graph = require("./Graph");
const Queue = require("../Queue");

const breadthFirstTraversal = (start) => {
  const visitedVertices = [start];
  const visitQueue = new Queue();
  visitQueue.enqueue(start);
  while (!visitQueue.isEmpty()) {
    const current = visitQueue.dequeue();
    console.log(current.data);
    current.edges.forEach((edge) => {
      const neighbor = edge.end;
      if (!visitedVertices.includes(neighbor)) {
        visitQueue.enqueue(neighbor);
        visitedVertices.push(neighbor);
      }
    });
  }
};

breadthFirstTraversal(testGraph.vertices[0]);

// const graph = new Graph(true, false);
// const startNode = graph.addVertex("start");
// const a = graph.addVertex("a");
// const b = graph.addVertex("b");
// const c = graph.addVertex("c");

// graph.addEdge(startNode, a);
// graph.addEdge(startNode, b);
// graph.addEdge(startNode, c);
// graph.addEdge(a, c);
// graph.addEdge(b, c);
// graph.addEdge(c, b);

// breadthFirstTraversal(graph.vertices[0]);
