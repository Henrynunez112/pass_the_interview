class Vertex {
  constructor(data) {
    this.data = data;
    this.edge = [];
  }
  print() {
    const edgeList = this.edge.map((edge) =>
      edge.weight !== null ? `${edge.end.data}(${edge.weight})` : edge.end.data
    );
    const output = `${this.data} --> ${edgeList.join(", ")}`;
    console.log(output);
  }
}

module.exports = Vertex;
