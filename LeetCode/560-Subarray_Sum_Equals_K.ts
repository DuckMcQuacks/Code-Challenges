// Link to problem
// https://leetcode.com/problems/subarray-sum-equals-k/description

function subarraySum(nums: number[], k: number): number {
    let map = new Map();
    let sum : number = 0;
    let count : number = 0;
    map.set(0,1);
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (map.has(sum - k)) count += map.get(sum - k);
        if (map.has(sum)) map.set(sum, map.get(sum) + 1);
        else map.set(sum, 1);
    }
    return count;
};