// Link to problem
// https://leetcode.com/problems/snapshot-array/description/

class SnapshotArray {
    private curr = {};
    private snaps = [];
    private hasChanges = false;

    constructor(length: number) {

    }

    set(index: number, val: number): void {
        this.curr[index] = val
        this.hasChanges = true;
    }

    snap(): number {
        if(this.hasChanges || this.snaps.length === 0){
            this.snaps.push({...this.curr});
        }
        else{
            this.snaps.push(this.snaps[this.snaps.length - 1])
        }
        this.hasChanges = false;
        return this.snaps.length - 1

    }

    get(index: number, snap_id: number): number {
        if(this.snaps[snap_id][index] == undefined) return 0
        return this.snaps[snap_id][index]
    }
}