// Link to problem
// https://leetcode.com/problems/repeated-dna-sequences/description/

function findRepeatedDnaSequences(s: string): string[] {
    let subStringMap = new Map();
    let output : string[] = [];
    for(let i : number = 0; i < s.length-9; i++){
        let subString : string = "";
        for(let j : number = 0; j < 10; j++){
            subString += s[i+j]
        }
        subStringMap.set(subString, (subStringMap.get(subString) || 0) + 1)
    }
    subStringMap.forEach((value,key)=>{
        if(value > 1){
            output.push(key);
        }
    })
    return output
};