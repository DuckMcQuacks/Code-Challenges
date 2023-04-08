// Link to problem
// https://leetcode.com/problems/partition-labels/description/

function partitionLabels(s: string): number[] {
    const lastSeenIndices : object = {};
    
    for (let i : number = s.length - 1; i >= 0; i--) {
        const char : string = s[i];
        
        if (!lastSeenIndices[char]) {
            lastSeenIndices[char] = i;
        }
    }
    
    const partitions : number[] = [];
    let start : number = 0;
    let end : number = 0;
    
    for (let i = 0; i < s.length; i++) {
        const char : string = s[i];
        const lastCharIdx : number = lastSeenIndices[char];
        
        if (lastCharIdx > end) end = lastCharIdx;
        
        if (i === end) {
            const partition : number = end - start + 1;
            partitions.push(partition);
            start = i + 1;
        }
    }
    
    return partitions;
};