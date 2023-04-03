// Link to problem
// https://leetcode.com/problems/increasing-triplet-subsequence/description

function increasingTriplet(nums: number[]): boolean {
    let firstNumber : number = Infinity;
    let secondNumber : number = Infinity;
    
    for (let currentNumber of nums) {
      if (currentNumber > secondNumber && currentNumber > firstNumber) {
        return true;
      }
      if (currentNumber > firstNumber) {
        secondNumber = currentNumber;
      } else {
        firstNumber = currentNumber;
      }
    }
    return false;
  };