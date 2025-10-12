/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  const inputArray = Array.from(String(x), Number);
  let rpointer = inputArray.length - 1;
  let ans = true;
  for (let n = 0; n < inputArray.length; n++) {
    inputArray[n] === inputArray[rpointer] ? rpointer-- : (ans = false);
  }
  return ans
};
