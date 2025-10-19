/**
 * @author Jonathan Reyes
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    // Hold the 1's consecutives on one segment before an 0
    let consecNow = 0
    // Hold the maximum
    let biggerBank = 0

    for (let n = 0; n < nums.length; n++) {
        // If we are on a 0 and we hold more on the 1's cons, 
        // assign to bigger bank
        if (nums[n] === 0 && consecNow > biggerBank) {
            biggerBank = consecNow
            consecNow = 0
            continue
        }
        // In case not need to store bigger bank
        if (nums[n] === 0) {
            consecNow = 0
            continue
        }
        else {
            consecNow++
        }
    }
    if (consecNow > biggerBank) {
        biggerBank = consecNow
    }
    return biggerBank
};