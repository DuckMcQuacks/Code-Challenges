// Link to problem
// https://leetcode.com/problems/multiply-strings/description/

function multiply(num1: string, num2: string): string {
    if (num1 === '0' || num2 === '0') return '0'
    
    const m : number = num1.length;
    const n : number = num2.length;
    const res : number[] = new Array(m + n).fill(0);
    
    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            const p1 : number = i + j 
            const p2 : number = i + j + 1;
            const sum : number = res[p2] + Number(num1[i]) * Number(num2[j])
            res[p2] = sum % 10
            res[p1] += Math.floor(sum / 10)
        }
    }
    if (res[0] === 0) res.shift()
    return res.join('')

};