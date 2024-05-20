const { Graph } = require('./graphOOP'); // Import the Graph class
   // ...existing code...
const graph = new Graph()

function dfs(start) {
    const visited = new Set();
    this._dfsHelper(start, visited);
}
function _dfsHelper(vertex, visited) {
    // Mark the vertex as visited
    visited.add(vertex);

    console.log(vertex); // Process the vertex

    // Visit all the neighbors
    for (let edge of this.edges) {
        if (edge.from === vertex && !visited.has(edge.to)) {
            this._dfsHelper(edge.to, visited);
        }
    }
}


