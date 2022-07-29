const Edge = require("./Edge");
class Vertex {
  constructor(data) {
    this.data = data;
    this.edges = [];
  }

  addEdge(vertex, weight) {
    if (vertex instanceof Vertex) {
      this.edges.push(new Edge(this, vertex, weight));
    } else {
      throw "Error!";
    }
  }

  removeEdge(vertex) {
    this.edges = this.edges.filter((el) => el.end !== vertex);
  }

  print() {
    const edgeList = this.edges.map((edge) =>
      edge.weight !== null ? `${edge.end.data}(${edge.weight})` : edge.end.data
    );
    const output = `${this.data} --> ${edgeList.join(", ")}`;
    console.log(output);
  }
}

module.exports = Vertex;
