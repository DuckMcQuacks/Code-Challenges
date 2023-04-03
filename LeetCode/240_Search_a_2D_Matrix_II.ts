// Link to problem
// https://leetcode.com/problems/search-a-2d-matrix-ii/description/

function searchMatrix(matrix: number[][], target: number): boolean {
    for(let i : number = 0; i < matrix.length; i++){
        for(let j : number = 0; j < matrix[0].length; j++){
            if(matrix[i][j] == target){
                return true;
            }
        }
    }
    return false
};