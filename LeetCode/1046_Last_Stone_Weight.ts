// Link to problem
// https://leetcode.com/problems/last-stone-weight/description/

function lastStoneWeight(stones: number[]): number {
    while(stones.length > 1){
        stones.sort((a,b)=>{return a-b})
        const biggest : number = Number(stones.pop());
        const secondBiggest : number = Number(stones.pop());
        if(biggest != secondBiggest){
            stones.push(biggest - secondBiggest)
        }
    }
    if(stones.length == 0){
        return 0
    }
    return stones[0]
};