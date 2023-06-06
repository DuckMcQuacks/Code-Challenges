// Link to problem
// https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence/description/

function canMakeArithmeticProgression(arr: number[]): boolean {
    arr.sort((a,b)=>{return a-b})
    
    const diff : number = arr[0]-arr[1];

    for(let i : number = 2 ; i < arr.length; i++){
        if((arr[i-1]-arr[i])!= diff) return false
    }

    return true
};