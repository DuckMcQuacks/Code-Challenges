// Link to problem
// https://leetcode.com/problems/counter-ii/description

type ReturnObj = {
    increment: () => number,
    decrement: () => number,
    reset: () => number,
}

function createCounter2(init: number): ReturnObj {
    let count = init
    
    function increment(){
        return ++count
    }
    function decrement(){
        return --count
    }
    function reset(){
        count = init
        return count
    }
    return {increment, decrement, reset}
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */