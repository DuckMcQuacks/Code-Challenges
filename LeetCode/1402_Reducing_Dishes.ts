// Link to problem
// https://leetcode.com/problems/reducing-dishes/

function maxSatisfaction(satisfaction: number[]): number {
satisfaction.sort((a,b)=>{return a-b});
let biggestSatisfaction = 0;
for(let i = 0; i<satisfaction.length; i++){
    let index = 1;
    let tempSatisfaction = 0;
    for(let j = i; j<satisfaction.length; j++){
        tempSatisfaction += index * satisfaction[j];
        index++;  
    }
    if(tempSatisfaction > biggestSatisfaction){
        biggestSatisfaction = tempSatisfaction
    }
}
return biggestSatisfaction
};