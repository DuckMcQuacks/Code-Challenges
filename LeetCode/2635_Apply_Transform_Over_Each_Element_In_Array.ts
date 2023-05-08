// Link to problem
// https://leetcode.com/problems/apply-transform-over-each-element-in-array/description

function map(arr: number[], fn: (n: number, i: number) => number): number[] {
    let outputArr : number[] = new Array(arr.length) 
    arr.map((number,index)=>{
        outputArr[index] = (fn(number,index))
    })
    return outputArr
};