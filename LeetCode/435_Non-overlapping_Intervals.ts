// Link to problem
// https://leetcode.com/problems/non-overlapping-intervals/description/

var eraseOverlapIntervals = function(intervals) {
    intervals.sort((a, b) => a[1] - b[1]);
    let prev : number = intervals[0][1] 
    let remove : number = 0;
    
    for(let i = 1; i < intervals.length; i++) {
        if(intervals[i][0] < prev) remove++;
        else prev = intervals[i][1];
    }
    return remove;
};