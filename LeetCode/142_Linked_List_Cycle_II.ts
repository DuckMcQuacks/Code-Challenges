// Link to problem
// https://leetcode.com/problems/linked-list-cycle-ii/description/

 class ListNode {
     val: number
     next: ListNode | null
     constructor(val?: number, next?: ListNode | null) {
         this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
     }
 }
 

function detectCycle(head: ListNode | null): ListNode | null {
    if (head == null) {
      return null;
    }
  
    let slow : ListNode = head;
    let fast : ListNode = head;
    let hasCycle : boolean = false;
  
    // if slow meets fast, cycle is existed.
    while (fast.next != null && fast.next.next != null) {
      fast = fast.next.next;
      slow = slow.next!;
  
      if (slow == fast) {
        hasCycle = true;
        slow = head;
        break;
      }
    }
  
    if (!hasCycle) {
      return null;
    }
  
    while (slow != fast) {
      slow = slow.next!;
      fast = fast.next!;
    }
  
    return slow;
  };