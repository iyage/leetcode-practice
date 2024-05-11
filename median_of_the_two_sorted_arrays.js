/**
 * Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).

 

Example 1:

Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
Example 2:

Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
 

Constraints:

nums1.length == m
nums2.length == n
0 <= m <= 1000
0 <= n <= 1000
1 <= m + n <= 2000
-106 <= nums1[i], nums2[i] <= 106
 */

// /**
//  * @param {number[]} nums1
//  * @param {number[]} nums2
//  * @return {number}
//  */
// let findMedianSortedArrays = function (nums1, nums2) {
//   let medianIndex = Math.floor((nums1.length + nums2.length) / 2);
//   let pointer = 0;
//   let m1 = [];
//   let i = 0,
//     j = 0;
//   //
//   if (nums1.length === 0 && nums2.length === 0) {
//     return 0;
//   }
//   while (pointer <= medianIndex) {
//     const val1 = i < nums1.length ? nums1[i] : null;
//     const val2 = j < nums2.length ? nums2[j] : null;
//     if (val1 === null) {
//       m1.push(val2);
//       j++;
//     } else if (val2 === null) {
//       m1.push(val1);
//       i++;
//     } else {
//       if (val1 <= val2) {
//         m1.push(val1);
//         i++;
//       } else {
//         m1.push(val2);
//         j++;
//       }
//     }
//     pointer++;
//   }

//   return (nums1.length + nums2.length) % 2 === 0
//     ? (m1[m1.length - 1] + m1[m1.length - 2]) / 2
//     : m1.pop();
// };

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
let findMedianSortedArrays_1 = function (nums1, nums2) {
  let medianIndex = Math.floor((nums1.length + nums2.length) / 2);
  let pointer = 0;
  let m1 = [];
  let i = 0,
    j = 0;
  //
  if (nums1.length === 0 && nums2.length === 0) {
    return 0;
  }
  while (i < nums1.length) {
    if (pointer === medianIndex) {
      break;
    }
    if (nums2[j] < nums1[i] && j < nums2.length) {
      m1[pointer] = nums2[j];
      j++;
    } else {
      m1[pointer] = nums1[i];
      i++;
    }
    pointer++;
  }
  // return m1;
  return (nums1.length + nums2.length) % 2 === 0
    ? (m1[m1.length - 1] + m1[m1.length - 2]) / 2
    : m1.pop();
};

console.log(findMedianSortedArrays_1([1, 3, 7, 9, 11], [2, 4, 5, 6]));
//1|,2|,3|,4|,5,|6,|7,|9,|10,|11
//[1, 3, 7, 9, 11], [2, 4, 5, 6, 10]
