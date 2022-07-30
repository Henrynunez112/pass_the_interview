const Vertex = require("./Vertex");
const Edge = require("./Edge");

class Graph {
  constructor(isWeighted = false, isDirected = false) {
    this.vertices = [];
    this.isWeighted = isWeighted;
    this.isDirected = isDirected;
  }
  addVertex(data) {
    const newVertex = new Vertex(data);
    this.vertices.push(newVertex);
    return newVertex;
  }

  removeVertex(vertex) {
    this.vertices = this.vertices.filter((el) => el !== vertex);
  }

  addEdge(vertexOne, vertexTwo, weight) {
    const edgeWeight = this.isWeighted ? weight : null;
    if (vertexOne instanceof Vertex && vertexTwo instanceof Vertex) {
      vertexOne.addEdge(vertexTwo, edgeWeight);
      if (!this.isDirected) {
        vertexTwo.addEdge(vertexOne, edgeWeight);
      }
    } else {
      throw "Error!";
    }
  }

  removeEdge(vertexOne, vertexTwo) {
    if (vertexOne instanceof Vertex && vertexTwo instanceof Vertex) {
      vertexOne.removeEdge(vertexTwo);
      if (!this.isDirected) {
        vertexTwo.removeEdge(vertexOne);
      }
    } else {
      throw "One of these is not a Vertex";
    }
  }

  print() {
    this.vertices.forEach((vertex) => vertex.print());
  }
}

module.exports = Graph;

// const trainNetwork = new Graph(true, true);

// const atlantaStation = trainNetwork.addVertex("Atlanta");
// const newYorkStation = trainNetwork.addVertex("New York");
// const sanFranciscoStation = trainNetwork.addVertex("San Francisco");
// const losAngelesStation = trainNetwork.addVertex("Los Angeles");
// const denverStation = trainNetwork.addVertex("Denver");
// const calgaryStation = trainNetwork.addVertex("Calgary");

// trainNetwork.addEdge(sanFranciscoStation, losAngelesStation, 400);
// trainNetwork.addEdge(losAngelesStation, sanFranciscoStation, 400);
// trainNetwork.addEdge(newYorkStation, denverStation, 1800);
// trainNetwork.addEdge(denverStation, newYorkStation, 1800);
// trainNetwork.addEdge(calgaryStation, denverStation, 1000);
// trainNetwork.addEdge(denverStation, calgaryStation, 1000);
// trainNetwork.addEdge(losAngelesStation, atlantaStation, 2100);
// trainNetwork.addEdge(atlantaStation, losAngelesStation, 2100);

// trainNetwork.removeEdge(newYorkStation, denverStation);
// trainNetwork.removeEdge(calgaryStation, denverStation);
// trainNetwork.removeEdge(denverStation, calgaryStation);
// trainNetwork.removeVertex(calgaryStation);

// trainNetwork.print();

// const graph = new Graph(false, false);
// const v1 = graph.addVertex("v1");
// const v2 = graph.addVertex("v2");
// const v3 = graph.addVertex("v3");

// graph.addEdge(v1, v3);

// graph.print();

// const friendGroup = new Graph(true, false);
// const jimmy = friendGroup.addVertex("Jimmy");
// const sally = friendGroup.addVertex("Sally");
// const michael = friendGroup.addVertex("Michael");
// const sonny = friendGroup.addVertex("Sonny");

// friendGroup.addEdge(sonny, jimmy, 15);
// friendGroup.addEdge(sonny, michael, 2);

// friendGroup.addEdge(jimmy, michael, 8);
// friendGroup.addEdge(jimmy, sally, 1);

// friendGroup.addEdge(sally, michael, 4);

// friendGroup.print();
