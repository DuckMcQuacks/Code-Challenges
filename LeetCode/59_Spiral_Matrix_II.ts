// Link to problem
// https://leetcode.com/problems/spiral-matrix-ii/description/

function generateMatrix(n: number): number[][] {
    let output : number[][] = new Array(n).fill(0).map(() => new Array(n).fill(0))
    let count : number = 0;

    let left : number = 0;
    let right : number = n - 1;
    let top : number = 0;
    let bottom : number = n -1;

    while(count < n * n){
        
        //going right
        for(let i : number = left; i <= right; i++){
            count++;
            output[top][i] = count;
        }
        top++;
                
        // going down
        for(let i : number = top; i <= bottom; i++){
            count++;
            output[i][right] = count;
        }
        right--;
        
        //going left
        for(let i : number = right; i >= left; i--){
            count++;
            output[bottom][i] = count;
        }
        bottom--;
        
        //going up
        for(let i : number = bottom; i >= top; i--){
            count++;
            output[i][left] = count;
        }
        left++;
    }
    return output;
};