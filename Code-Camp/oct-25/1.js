
/**
 * Given a string representing a binary number, return its decimal equivalent as a number.
 * @author Jonathan Reyes
 * @param {string} binary a string representing a binary digit
 * @returns {number} a Int representing the value of the given binary
 */
function toDecimal(binary) {
  const binArr = Array.from(binary);
  let calcValue = 0;
  for (let n = 0, c = binArr.length - 1; n < binArr.length; n++, c--) {
    const calcToDec = binArr[n] * 2 ** c;
    calcValue += calcToDec;
  }
  return calcValue;
}

/**
Tests
Passed:1. toDecimal("101") should return 5.
Passed:2. toDecimal("1010") should return 10.
Passed:3. toDecimal("10010") should return 18.
Passed:4. toDecimal("1010101") should return 85.
 */