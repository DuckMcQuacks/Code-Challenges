// Link to problem
// https://leetcode.com/problems/kth-largest-element-in-a-stream/description/

class KthLargest {
    private num : number[] = [];
    private index : number = 0;
    
    constructor(k: number, nums: number[]) {
        this.num = nums.sort((a,b)=>{return b-a})
        this.index = k-1;
    }

    add(val: number): number {
        this.num.push(val)
        this.num.sort((a,b)=>{return b-a});
        return this.num[this.index]
    }
}