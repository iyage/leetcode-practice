/**
 * Longest Substring Without Repeating Characters
 * Given a string s, find the length of the longest 
substring
 without repeating characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.
 */

/**
 * @param {string} s
 * @return {number}
 */

const lengthOfLongestSubstring = function (s) {
  let strArr = [];
  let max_length = 0;
  for (let index = 0; index < s.length; index++) {
    //check if char is in array already
    if (strArr.indexOf(s.charAt(index)) > -1) {
      strArr.push(s.charAt(index));
      strArr.splice(0, strArr.lastIndexOf(s.charAt(index)));
    } else {
      strArr.push(s.charAt(index));
      max_length = strArr.length > max_length ? strArr.length : max_length;
    }
  }

  return max_length;
};
console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));

console.log(lengthOfLongestSubstring("pwwkew"));
