// Link to problem
// https://leetcode.com/problems/longest-palindrome/description/

function longestPalindrome(s: string): number {
    let letters = new Map();
    let output : number = 0;
    let OddNumberS : number = 0;
    for(let i = 0; i < s.length; i++){
        letters.set(s[i],(letters.get(s[i]) || 0) + 1);
    }
    letters.forEach((value,key)=>{
        if(value % 2 == 0){
            output = output + value
        }
        if(value % 2){
            output = output + value-1;
            OddNumberS++;
        }
    })
    if(OddNumberS){
        output++;
    }
    return output
};