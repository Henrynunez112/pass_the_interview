const Graph = require("./Graph.js");

// const simpleGraph = new Graph(true, false);
// const startNode = simpleGraph.addVertex("v0.0.0");
// const v1 = simpleGraph.addVertex("v1.0.0");
// const v2 = simpleGraph.addVertex("v2.0.0");

// const v11 = simpleGraph.addVertex("v1.1.0");
// const v12 = simpleGraph.addVertex("v1.2.0");
// const v21 = simpleGraph.addVertex("v2.1.0");

// const v111 = simpleGraph.addVertex("v1.1.1");
// const v112 = simpleGraph.addVertex("v1.1.2");
// const v121 = simpleGraph.addVertex("v1.2.1");
// const v211 = simpleGraph.addVertex("v2.1.1");

// simpleGraph.addEdge(startNode, v1);
// simpleGraph.addEdge(startNode, v2);

// simpleGraph.addEdge(v1, v11);
// simpleGraph.addEdge(v1, v12);
// simpleGraph.addEdge(v2, v21);

// simpleGraph.addEdge(v11, v111);
// simpleGraph.addEdge(v11, v112);
// simpleGraph.addEdge(v12, v121);
// simpleGraph.addEdge(v21, v211);

// // simpleGraph.print();

// module.exports = simpleGraph;

const testGraph = new Graph(true, true);
const a = testGraph.addVertex("A");
const b = testGraph.addVertex("B");
const c = testGraph.addVertex("C");
const d = testGraph.addVertex("D");
const e = testGraph.addVertex("E");
const f = testGraph.addVertex("F");
const g = testGraph.addVertex("G");

testGraph.addEdge(a, c, 100);
testGraph.addEdge(a, b, 3);
testGraph.addEdge(a, d, 4);
testGraph.addEdge(d, c, 3);
testGraph.addEdge(d, e, 8);
testGraph.addEdge(e, b, -2);
testGraph.addEdge(e, f, 10);
testGraph.addEdge(b, g, 9);
testGraph.addEdge(e, g, -50);
module.exports = testGraph;
