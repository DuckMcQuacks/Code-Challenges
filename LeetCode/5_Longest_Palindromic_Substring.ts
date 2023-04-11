// Link to problem
// https://leetcode.com/problems/longest-palindromic-substring/description/

function longestPalindromeSubString(s: string): string {
    let longest : string = '';
    
    for (let i : number = 0; i < s.length; i++){
        expandCheck(i, i);
        expandCheck(i, i+1);
    }
    
    function expandCheck(left, right){
        while (left >= 0 && right < s.length && s[left] === s[right]){
            if (right - left + 1 > longest.length){
                longest = s.slice(left, right + 1);
            }
            left--;
            right++;
        }
    }
    
    return longest;
};