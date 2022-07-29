const Vertex = require("./Vertex");

class Graph {
  constructor() {
    this.vertices = [];
  }
  addVertex(data) {
    const newVertex = new Vertex(data);
    this.vertices.push(newVertex);
    return newVertex;
  }

  removeVertex(vertex) {
    this.vertices = this.vertices.filter((el) => el !== vertex);
  }

  print() {
    this.vertices.forEach((vertex) => vertex.print);
  }
}

module.exports = Graph;
