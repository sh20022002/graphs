



class Node {
    constructor(from, distances) {
        this.from = from;
        this.distances = distances;
        
    }

}


adjacencyToMap = (distances, keys) => {
    // takes adjcancey array with the whigts of the Edges as the values and dictionery with the keys as the names 
    // of the nodes and the values as the indexes of th array
    // for weighted graphs
    const elments = []; // Initialize the elments array

    for (let i = 0; i < distances.length; i++) {
        let citdis = {};
        // innitalize the dict object that stores the next nodes and there resprctive Edges wights 
        

        for (let j = 0; j < distances[i].length; j++) {
            if (distances[i][j] == 0 || distances[i][j] == Number.POSITIVE_INFINITY) continue;
            // skips unconnected edges that are represented as infinity and intself represented as zero
            let [cityName, distance] = Object.entries(keys)[j];
            citdis[cityName] = distances[i][j];
            // asserts the city names and wights to the object
        }

        elments.push(new City(Object.keys(keys)[i], citdis)); // Create city objects and add them to elments array
    }

    return elments;
}   
mapToAdjacency = (elements) => {
    // opesite to the adjcacenceyToMap function
    const array = [];

    for (let element of elements) {
        // puts 0 if in the same city
        if (element.distances[keys] == 0) minArray.push(0);
        // puts infinity if no connections between cities
        else if (!element.next.includes(keys)) minArray.push(Number.POSITIVE_INFINITY);
        else minArray.push(element.distances[element.next.indexOf(keys)]);
    }
    array.push(minArray);
    return array;
}
class PrioityQueue{
    constructor() {
        this.queue = [];
    }
    enqueue(node, distance) {
        this.queue.push({ node, distance});
        this.sort();
    }

    dequeue() {
        if (!this.isEmpty()) {
            return this.queue.shift();
        }
        return null;
    }

    sort() {
        this.queue.sort((a, b) => a.distance - b.distance);
    }

    isEmpty() {
        return this.queue.length === 0;
    }
   
}




djakstra = (start, distances, dict) => {
    // accepts a string of the start node an arrey with the wights of edges and dictionery object of the names and indexes of the edges
    const elments = adjacencyToMap(distances, dict);
    // converts the array to Node objects(City) 
    var startCity = elments[dict[start]];
    // sets it to the first object in the search
    var currentCity = startCity;
    var lengthOfDist = elments.length;
    var minPath = 0;
    
    const visted = new Array(lengthOfDist).fill(false);
    // initalize a array for traking the nodes that the algoritham want thrguh
    const prev = new Array(lengthOfDist).fill(Number.POSITIVE_INFINITY);
    // initilaize a array with the minimum value of wights that is needed to get to a specific node


    prev[dict[startCity.name]] = 0;
    // sets the first node to wighet of zero
    const pq = new PrioityQueue();
    // initilaize the priority queue soo it would prioritize the lowest edges in the algoritham

    
    pq.enqueue(currentCity, 0);
    // var prevPriority = 0;
    // var prevNode = currentCity;
        
    

    while (!pq.isEmpty()){
        // stops the loop when queue is empty
        
        let currentNode = pq.dequeue();
        // sets the current node to lowest wight in queue
        let prevPriority = currentNode.distance;
        // for creating the next in the queue to add the wights of the path
        currentNode = currentNode.node;
        // console.log(currentNode.name);
        visted[dict[currentNode.name]] = true;
        // sets the current value as visted

        let minEdge = Number.POSITIVE_INFINITY;
        let minEdgeName = null;
        // varubules for chaking the minimum edge
        for (let [key, val] of Object.entries(currentNode.distances)) {
            // itrates al the edges from current node
            if(visted[dict[key]]){
                // chacks if a node was visted and if it was visited chacks if it can optimaize the path value
                if(prev[dict[key]] > val + prevPriority){
                    prev[dict[key]] = val + prevPriority;
                    pq.enqueue(elments[dict[key]], val + prevPriority);
                }else continue;

                
            }else{
                
                if(prev[dict[key]] > val + prevPriority){
                    
                    prev[dict[key]] = val + prevPriority;
                    pq.enqueue(elments[dict[key]], val + prevPriority);
            
                }
            }
            
        }
        
        
    }
    return(prev);
    // returns the minimum path to each node

}




const keys = {
    "New York": 0,
    "Los Angeles": 1,
    "Chicago": 2,
    "Miami": 3,
    "San Francisco": 4,
    "Another City": 5
};

const adjacencyMatrix = [
    [0, -5, 3, Infinity, Infinity, 10],
    [5, 0, 2, 1, Infinity, Infinity],
    [3, 2, 0, 4, 6, Infinity],
    [Infinity,1, 4, 0, 8, 2],
    [Infinity, Infinity, 6, 8, 0, 7],
    [10, Infinity, Infinity, 2, 7, 0]
];

