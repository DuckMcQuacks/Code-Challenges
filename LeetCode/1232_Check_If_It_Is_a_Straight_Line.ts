// Link to problem
// https://leetcode.com/problems/check-if-it-is-a-straight-line/description/

function checkStraightLine(coordinates: number[][]): boolean {
    const xDiff : number = coordinates[1][0]-coordinates[0][0];
    const yDiff : number = coordinates[1][1]-coordinates[0][1];

    for(let i : number = 1; i < coordinates.length; i++){
        let x : number = coordinates[i][0]-coordinates[i-1][0];
        let y : number = coordinates[i][1]-coordinates[i-1][1];
        
        if(y * xDiff != x * yDiff){
            return false
        }
    }
    return true;
};