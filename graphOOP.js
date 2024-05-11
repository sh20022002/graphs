class Edge {
    constructor(from, to, weight) {
        this.from = from;
        this.to = to;
        this.weight = weight;
    }
    vertices = [];
    edges = [];
    
    
    static addEdge(from, to, weight){
        this.edges.push(new Edge(from, to, weight));
        this.edges.sort()
    }
    static addVertcie(name){
        this.vertices.push(name);
        this.vertices.sort()
    }
    // takes a adjacency list reprsentition of a graph and returns a array with edge objects
    static adjacencyToGraph(arr, keys){
        
        for(let j = 0; j < arr.length; j++){
            this.addVertcie(keys[j])
            for(let i = 0; i < arr[j].length; i++){
                if(arr[j][i] != 'Infinity' && i !== j){
                    this.addEdge(keys[j], keys[i], arr[j][i]);
                }
                
            }
        }
        return graph;


    }
    __str__(keys){
        for(let i = 0; i < this.vertices.length; i++){
            console.log(keys[i]);
            for(let e = 0; e < this.edges.length ; e++){
                if(this.edges[e].from === this.vertices[i]){
                    console.log('\n', this.edges[e].to + '-' + this.edges[e].weight);
                }
            }
        }
    }
    
    sort(){
        this.edges.sort((a, b) => a.from - b.from);
    }
    sortV(){
        this.vertices.sort((a, b) => a.name - b.name);
    }
}
function main(){
    const adjacencyMatrix = [
        [Infinity, 5, 7, 3, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity],
        [5, Infinity, 2, Infinity, 6, Infinity, Infinity, Infinity, Infinity, Infinity],
        [7, 2, Infinity, 4, 1, Infinity, Infinity, Infinity, Infinity, Infinity],
        [3, Infinity, 4, Infinity, Infinity, 9, Infinity, Infinity, Infinity, Infinity],
        [Infinity, 6, 1, Infinity, Infinity, Infinity, 8, Infinity, Infinity, Infinity],
        [Infinity, Infinity, Infinity, 9, Infinity, Infinity, 3, Infinity, Infinity, Infinity],
        [Infinity, Infinity, Infinity, Infinity, 8, 3, Infinity, 2, Infinity, Infinity],
        [Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, 2, Infinity, 5, Infinity],
        [Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, 5, Infinity, 4],
        [Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, 4, Infinity]
      ];
    const keys = {
        0: '1',
        1: '2',
        2: '3',
        3: '4',
        4: '5',
        5: '6',
        6: '7',
        7: '8',
        8: '9',
        9: '10'
    }
    const graph = Edge.adjacencyToGraph(adjacencyMatrix, keys);
    graph.__str__(keys);
}
main();