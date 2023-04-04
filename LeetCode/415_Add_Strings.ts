// Link to problem
// https://leetcode.com/problems/add-strings/description/

function addStrings(num1: string, num2: string): string {
    //Hey this is just an adder, why we doing this?
    //need three spots 2 for the digits, and one for carry
    let length : number =  num1.length > num2.length ? num1.length : num2.length;
    let output : string = "";
    let carry : number = 0

    for(let i : number = 1; i < length+1; i++){

        let digit1 : number = Number(num1[num1.length-i]);
        let digit2 : number = Number(num2[num2.length-i]);
        // making sure its a number
        if(isNaN(digit1)){
            digit1 = 0;
        }
        if(isNaN(digit2)){
            digit2 = 0;
        }
        // making sure that it doesn't add something like 17
        let finalNum : number = (digit1+digit2+carry)%10
        // checking for carry
        if(digit1 + digit2 + carry >= 10){
            carry = 1;
        }
        else{
            carry = 0;
        }
        //putting the new digit at the front of the string
        output = finalNum+output
    }
    // Its here to make sure if we add 544 and 457 we get a 1001 and not 001 
    if(carry === 1){
        output = 1 + output;
    }
    return output
};