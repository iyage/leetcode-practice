/**
 * Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.

k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.

You may not alter the values in the list's nodes, only nodes themselves may be changed.

Example 1:


Input: head = [1,2,3,4,5], k = 2
Output: [2,1,4,3,5]
Example 2:


Input: head = [1,2,3,4,5], k = 3
Output: [3,2,1,4,5]
 

Constraints:

The number of nodes in the list is n.
1 <= k <= n <= 5000
0 <= Node.val <= 1000
 */

// Definition for singly-linked list.

class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  let n = 0;
  let nextNode = null;
  let prevNode = null;
  let currentNode = head;
  for (let index = 0; index < k; index++) {
    //store the next node in temp node
    nextNode = currentNode.next;
    //point current node next to prev
    currentNode.next = prevNode;
    //point prevNode to current node as the head
    prevNode = currentNode;
    //point current to temp node
    currentNode = nextNode;
  }
  head = prevNode;
  let temp = head;
  let current = null;
  //move the node to the last node
  while (temp != null) {
    current = temp;
    temp = temp.next;
  }
  temp = null;
  current.next = currentNode;
  return head;
};
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);
console.log(reverseKGroup(head, 5));
