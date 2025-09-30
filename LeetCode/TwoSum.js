/**
 * Leet code challenge
 * Easy
 * @link https://leetcode.com/problems/two-sum/
 * @author Jonathan Reyes
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {
  for (var i = 0; i <= nums.length - 2; i++) {
    let wStart = i;
    let wEnd = i + 2;

    let sub1 = nums.slice(wStart, wEnd);

    if (sub1.reduce((a, b) => a + b, 0) === target) {
      return [wStart, wEnd - 1 ];
    }
  }
  for (let i = 0; i < nums.length; i++) {
    for (let n = i + 1; n < nums.length; n++) {
      let newSum = nums[i] + nums[n];
      if (newSum === target) {
        return [i, n];
      }
    }
  }
};