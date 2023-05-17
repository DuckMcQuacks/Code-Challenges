// Link to problem
// https://leetcode.com/problems/function-composition/description/

type F = (x: number) => number;

function compose(functions: F[]): F {
	return x => functions.reduceRight((acc,f)=>f(acc),x)
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */