// Link to problem
// https://leetcode.com/problems/matrix-diagonal-sum/description/

function diagonalSum(mat: number[][]): number {

    function middleIndex(length : number){
        return Math.floor(length/2)
    }

    let sum : number = 0;
    const len = mat.length

    for(let i = 0; i < len; i++){
        sum += mat[i][i]
        sum += mat[i][len-1-i]
    }

    if(mat.length % 2){
        sum -= mat[middleIndex(len)][middleIndex(len)]
    }

    return sum
};