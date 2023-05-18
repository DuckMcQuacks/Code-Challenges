// Link to problem
// https://leetcode.com/problems/minimum-number-of-vertices-to-reach-all-nodes/description/

function findSmallestSetOfVertices(n: number, edges: number[][]): number[] {
    const numberOfNodes : number = n;
    let nodesWithInputs = new Set();
    let nodesWithoutInputs : number[] = [];
    
    for(let i = 0; i < edges.length ; i++){
        nodesWithInputs.add(edges[i][1]);
    }
    for(let i = 0; i < numberOfNodes; i++){
        if(!nodesWithInputs.has(i)){
            nodesWithoutInputs.push(i);
        }
    }
    return nodesWithoutInputs
};