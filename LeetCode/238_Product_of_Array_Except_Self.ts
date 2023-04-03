// Link to problem
// https://leetcode.com/problems/product-of-array-except-self/description

function productExceptSelf(nums: number[]): number[] {
    let result : number[] = [];
    let multiplier : number = 1;
    for(let i : number = 0; i < nums.length; i++) {
        result[i] = multiplier; // right array
        multiplier *= nums[i];
    }
    multiplier = 1;//resetting
    for(let i : number = nums.length - 1; i >= 0; i--) {
        result[i] *= multiplier; // right array * left array
        multiplier *= nums[i];
    }
    return result;
};