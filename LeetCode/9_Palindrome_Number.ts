// Link to problem
// https://leetcode.com/problems/palindrome-number/description/

function getDigit(value : number, digitPos : number){
    //digitPos is right indexed
    // 123, at index 0 is 3, index 1 is 2;
    return Math.floor(value % Math.pow(10,digitPos+1) / Math.pow(10,digitPos))
  }
  
  function isPalindrome(x: number): boolean {
    if(x < 0){
        return false;
    }
    if(x < 10){
      return true;
    }
    let digits : number = Math.floor(Math.log10(x));
    for(let i : number = 0; i <= Math.floor(digits/2);i++){
      if(getDigit(x,i) != getDigit(x,digits-i)){
        return false
      }
    }
    return true;
  };