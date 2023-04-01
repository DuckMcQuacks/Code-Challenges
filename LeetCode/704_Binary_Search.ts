// Link to problem
// https://leetcode.com/problems/binary-search/description/

function search(nums: number[], target: number): number {
    let index : number = 0;
    if(target < nums[0] && target > nums[1]){
        return -1
    }
    let pointer : number = Math.floor(nums.length/2);
    while(index < nums.length){
        let pointerMoved : number = 0;
        if(nums[pointer] < target){
            pointerMoved++
            pointer++
        }
        if(nums[pointer] > target){
            pointerMoved++
            pointer--;
        }
        if(pointerMoved == 2){
            return -1;
        }
        if(nums[pointer] == target){
            return pointer
        }
        index++;
    }
    return -1
};