const { Graph} = require('./graphOOP.js');
const graph = new Graph();

function bfs(graph, current, end, keys){
    const visted = new Array(graph.vertecies.length);
    for(let e = 0; e < graph.edges.length; e++){
        if(graph.edges[e].from === current){
            if(graph.edges[e].to === end){
                return 'found';

            }else{
                visted[keys[graph.edges[e].from]] += 1;
            }
        }else{
            continue;
        }
    }
}