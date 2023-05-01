// Link to problem
// https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/description/

function average(salary: number[]): number {
    interface salaryData{
        min : number;
        max : number;
        all : number;
    }
    let info : salaryData = {
        min : salary[0],
        max : salary[0],
        all : 0
    }
    salary.map(number => {
        if(number > info.max){
            info.max = number
        }
        if(number < info.min){
            info.min = number
        }
        info.all += number
        return
    })
    info.all = info.all - (info.max + info.min)
    return info.all / (salary.length - 2)
};