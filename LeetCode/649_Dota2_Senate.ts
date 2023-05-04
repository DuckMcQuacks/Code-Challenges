// Link to problem
// https://leetcode.com/problems/dota2-senate/description/

function predictPartyVictory(senate: string): string {
    const radiant : number[] = [];
    const dire : number[] = [];
    const length = senate.length;

    for (var i = 0; i < length; i++) {
        if (senate[i] === "R") {
            radiant.push(i);
        } else {
            dire.push(i);
        }
    }

    while (radiant.length > 0 && dire.length > 0) {
        if (radiant[0] < dire[0]) {
            radiant.push(radiant.shift() + senate.length);
            dire.shift();
        } else {
            dire.push(dire.shift() + senate.length);
            radiant.shift();
        }
    }

    return radiant.length > 0 ? "Radiant" : "Dire";
};