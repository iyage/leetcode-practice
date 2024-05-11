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
  //check the list length
  let l = 0;
  let tempNode = head;
  while (tempNode !== null) {
    l += 1;
    tempNode = tempNode.next;
  }
  let store = null;
  let currentNode = head;
  let prev = null;
  let next = null;
  let n = k;
  while (n <= l) {
    let count = 1;
    while (count <= k) {
      count++;
      next = currentNode.next;
      currentNode.next = prev;
      prev = currentNode;
      currentNode = next;
    }
    if (n == k) {
      store = prev;
    } else {
      let tail = store;
      let current = null;
      while (tail != null) {
        current = tail;
        console;
        tail = tail.next;
      }
      current.next = prev;
    }
    prev = null;
    next = null;
    n += k;
  }
  let tail = store;
  let current = null;
  while (tail != null) {
    current = tail;
    console;
    tail = tail.next;
  }
  current.next = currentNode;

  return store;
};
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);
console.log(reverseKGroup(head, 3));
