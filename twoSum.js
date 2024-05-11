"use strict";
// Definition for singly-linked list.
class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let carry = 0;
  let result = new ListNode();
  let summation = rest;
  while (l1 !== null || l2 !== null) {
    const val1 = l1 === null ? 0 : l1.val;
    const val2 = l2 === null ? 0 : l2.val;
    const val = val1 + val2 + carry;
    summation.val = val % 10;
    carry = val >= 10 ? 1 : 0;
    l1 = l1 != null ? l1.next : null;
    l2 = l2 != null ? l2.next : null;
    if (l1 == null && l2 == null) {
      if (carry == 1) {
        summation.next = new ListNode(1);
      }
      break;
    }
    summation.next = new ListNode();
    summation = summation.next;
    console.log(rest);
  }
  return rest;
};
