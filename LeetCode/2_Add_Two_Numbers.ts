// Link to problem
// https://leetcode.com/problems/add-two-numbers/description/



//  Definition for singly-linked list.
  class ListNode {
      val: number
      next: ListNode | null
      constructor(val?: number, next?: ListNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.next = (next===undefined ? null : next)
      }
 }
 

function addTwoNumbers(l1: ListNode, l2: ListNode): ListNode | null {
    let node : ListNode = l1;
    let node2 : ListNode = l2;
    let node2End : boolean = false;
    let node1End : boolean = false;
    let output : number[] = [];
    let carry : number = 0;
    
    while(!node1End || !node2End){
      // Just to see whats happening
      //Adding the two numbers together, carry over included
      let number : number = node.val+node2.val+carry
      if(number>=10){
        number = number%10
        carry = 1;
      }
      else{
        carry = 0;
      }
      output.push(number)
      //checking if node1 has ended
      if(node.next == null){
        node1End = true;
        node.val = 0;
      }
      else{
        node = node.next
      }
      //checking if node2 has ended
      if(node2.next == null){
        node2End = true;
        node2.val = 0;
      }
      else{
        node2 = node2.next
      }
    }
    if(carry == 1){
      output.push(1);
    }
    let outputList : ListNode = new ListNode;
    let head : ListNode = outputList
    
    output.map((number,index)=>{
    outputList.val = number;
    if(index != output.length-1){
    outputList.next = new ListNode;
    outputList = outputList.next;
    }
    })
    return head
    };