// Link to problem
// https://leetcode.com/problems/group-anagrams/description/

function groupAnagrams(strs: string[]): string[][] {
    let sortedStrs : string[] = [...strs];
    let alreadyPushed : boolean[] = [];
    for(let i : number = 0; i < strs.length; i++){
        alreadyPushed.push(false);
    }
    let output : string[][] = [];
    for(let i : number = 0; i < strs.length; i++){
        const tmp : string = strs[i]
        sortedStrs[i] = strs[i].split('').sort().join('');
        strs[i] = tmp
    }
    for(let i : number = 0; i < strs.length; i++){
        let group : string[] = [];
        if(alreadyPushed[i] == false){
            group.push(strs[i])
            alreadyPushed[i] = true;
            for(let j : number = i+1; j < strs.length; j++){
                if(sortedStrs[i] == sortedStrs[j]){
                    group.push(strs[j]);
                    alreadyPushed[j] = true;
                }
            }
            output.push(group);
        }
    }
    return output
};