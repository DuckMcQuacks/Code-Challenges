// Link to problem
// https://leetcode.com/problems/minimum-flips-to-make-a-or-b-equal-to-c/description/

function minFlips(a: number, b: number, c: number): number {
    let answer : number = 0;

    while(a != 0 || b != 0 || c != 0){ 
        if((c & 1) == 1){
            if((a & 1) == 0 && (b & 1) == 0) answer++;
        }
        else answer += (a & 1) + (b & 1)

        // Shifts and assigns bits over
        a >>= 1;
        b >>= 1;
        c >>= 1;
    }
    
    return answer 
};