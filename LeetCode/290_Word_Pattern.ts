// Link to problem
// https://leetcode.com/problems/word-pattern/description

function wordPattern(pattern: string, s: string): boolean {
    let stringArray : string[] = s.split(' ');

    if (pattern.length !== stringArray.length) return false;

    const charToWord = new Map();
    const wordToChar = new Map();

    for (let i = 0; i < pattern.length; i++) {
        charToWord.set(pattern[i], stringArray[i]);
        wordToChar.set(stringArray[i], pattern[i]);
    }

    for (let i = 0; i < pattern.length; i++) {
        if (charToWord.get(pattern[i]) !== stringArray[i] || wordToChar.get(stringArray[i]) !== pattern[i]) {
            return false;
        }
    }
    return true;
};