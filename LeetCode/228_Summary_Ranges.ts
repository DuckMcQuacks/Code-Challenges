// Link to problem
// https://leetcode.com/problems/summary-ranges/description/

function summaryRanges(nums: number[]): string[] {
    const result : string[] = []
     let str : string = ''
 
     let start : number = nums[0]
 
     for (let i = 1; i <= nums.length; i++) {
         if(nums[i] - nums[i - 1] === 1) continue
 
         if(start === nums[i-1]) str = start.toString()
         else str = `${start}->${nums[i - 1]}`
         
         result.push(str)
         start = nums[i]
     }
 
     return result
 };