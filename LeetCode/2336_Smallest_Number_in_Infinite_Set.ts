// Link to problem
// https://leetcode.com/problems/smallest-number-in-infinite-set/description/

class SmallestInfiniteSet {
    private collection = new Set();
    constructor() {

    }

    popSmallest(): number {
        let i = 1;
        while(this.collection.has(i)){
            i++;
        }

        this.collection.add(i);
        return i;
    }

    addBack(num: number): void {
        if(this.collection.has(num)){
            this.collection.delete(num);
        }
    }
}