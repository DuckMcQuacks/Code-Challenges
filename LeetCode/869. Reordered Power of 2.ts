// You are given an integer n. We reorder the digits in any order (including the original order) 
// such that the leading digit is not zero.

// Return true if and only if we can do this so that the resulting number is a power of two.

interface Dictionary<T>
    {
        [key: string]: T
    }
function frequencyMap(n: number): Dictionary<number>
{
    let digits: string[] = n.toString().split("");
    let frequencyMap : Dictionary<number> = {
        "0" : 0,
        "1" : 0,
        "2" : 0,
        "3" : 0,
        "4" : 0,
        "5" : 0,
        "6" : 0,
        "7" : 0,
        "8" : 0,
        "9" : 0,
    }
    digits.map((x)=>
        {
            frequencyMap[x] = frequencyMap[x]+1;
        })
    return frequencyMap;
}
function numberOfDigits(n: number) : number
{
    return n.toString().split("").length;
}
function powerOfTwoWithinDigit(digits: number) : number[]
{
    let lowerBound: number = Math.pow(10,digits - 1)
    let upperBound: number = Math.pow(10,digits)
    let powerOfTwoS: number[] = []
    let powerOfTwo : number = 1;
    let count : number = 0
    let i : number = 0;

    while(powerOfTwo <= upperBound)
    {
        if(powerOfTwo >= lowerBound)
        {
            powerOfTwoS.push(powerOfTwo)

        }
            count++;
            powerOfTwo = Math.pow(2,count)
    }
    return powerOfTwoS

}
function CompareDict<T>(a: Dictionary<T>, b: Dictionary<T>): boolean {
  const keysA = Object.keys(a);
  const keysB = Object.keys(b);
  if (keysA.length !== keysB.length)
    {
        return false;
    }

  for (const key of keysA) {
    if (a[key] !== b[key]) return false;
  }
  return true;
}
function reorderedPowerOf2(n: number): boolean {
    let canBeReordered: boolean = false
    let original: Dictionary<number> = frequencyMap(n)
    let powerOfTwoS: number[] = powerOfTwoWithinDigit(numberOfDigits(n))
    powerOfTwoS.forEach(element => {
        if(CompareDict(original,frequencyMap(element))){
            canBeReordered = true;
        }
    });
    return canBeReordered;
};

if(reorderedPowerOf2(15)){
    console.log("The number can be rearranged to be the power of 2");
}
else{
    console.log("The number cannot be rearranged to be the power of 2");
}