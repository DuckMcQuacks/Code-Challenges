// Link to problem
// https://leetcode.com/problems/find-smallest-letter-greater-than-target/description/

function nextGreatestLetter(letters: string[], target: string): string {

    letters.push(target);
    letters.sort();

    for(let i : number = 0; i < letters.length; i++){
        if(letters[i] == target){
            i++
            while(letters[i] == target) i++

            if(letters[i] == null) return letters[0]
            else return letters[i]
        }
    }
};