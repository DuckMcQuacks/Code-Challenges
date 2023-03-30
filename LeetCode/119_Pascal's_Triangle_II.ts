function getRow(rowIndex: number): number[] {
    let output = new Array(rowIndex);
    for(let i = 0; i<rowIndex+1; i++){
        output[i] = new Array(i+1);
        for(let j = 0; j<i+1;j++){
            if(j==0 || j == i){
                output[i][j] = 1;
            }
            else{
                output[i][j] = output[i-1][j-1]+output[i-1][j]
            }
        }
    }
    return output[rowIndex]
    };