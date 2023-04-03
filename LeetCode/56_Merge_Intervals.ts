// Link to problem
// https://leetcode.com/problems/merge-intervals/description/

function merge(intervals: number[][]): number[][] {
    let output : number[][] = [];
    intervals.sort((a,b)=>{return a[0] - b[0]});
    for(let i = 0; i < intervals.length; i++){
        let tempRange: number[] = [intervals[i][0]];
        let highestEndPoint : number = intervals[i][1]
        while(i != intervals.length-1 && highestEndPoint>=intervals[i+1][0]){
            if(highestEndPoint < intervals[i+1][1]){
                highestEndPoint = intervals[i+1][1];
            }
            i++;
        }
        tempRange.push(highestEndPoint);
        output.push(tempRange);
    }
    
    return output

};