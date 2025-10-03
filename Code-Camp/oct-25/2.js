/**
 * Given a non-negative integer,
 * return its binary representation as a string.
 * @author Jonathan Reyes
 * @param {number} decimal
 * @returns {string} binary relative
 */
function toBinary(decimal) {
  let binary = [];
  let res = decimal;
  while (res > 0) {
    const digit = res % 2;
    res -= digit;
    res /= 2;
    binary.unshift(digit);
  }
  return binary.join("")
}

/**
 * Tests
Passed:1. toBinary(5) should return "101".
Passed:2. toBinary(12) should return "1100".
Passed:3. toBinary(50) should return "110010".
Passed:4. toBinary(99) should return "1100011".
 */
