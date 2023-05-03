// Link to problem
// https://leetcode.com/problems/find-the-difference-of-two-arrays/description/

function findDifference(nums1: number[], nums2: number[]): number[][] {
    let allValues = new Map();
    let nums1Set = new Set(nums1);
    let nums2Set = new Set(nums2);
    let output : number[][] = [[],[]];
    nums1Set.forEach(number => {
        allValues.set(number,(allValues.get(number)+1) || 1)
    })
    nums2Set.forEach(number => {
        allValues.set(number,(allValues.get(number)+1) || 1)
    })
    nums1Set.forEach(number => {
        if(allValues.get(number) < 2){
            output[0].push(number)
        }
    })
    nums2Set.forEach(number => {
        if(allValues.get(number) < 2){
            output[1].push(number)
        }
    })
    return output
};