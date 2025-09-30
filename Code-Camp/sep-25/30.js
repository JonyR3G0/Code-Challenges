/**
 * Given a string of ten digits, return the string as a phone number in this format: "+D (DDD) DDD-DDDD".
 * @author Jonathan Reyes
 * @param {string} inputString a string of 11 numbers
 * @returns {string} a phone number string with this format +D (DDD) DDD-DDDD
 */

function formatNumber(inputString) {
  const number = Array.from(inputString);
  const firstDigit = number[0];
  const secondDigits = number.slice(1, 4).join("");
  const thirdDigits = number.slice(4, 7).join("");
  const lastDigits = number.slice(7, 11).join("");
  const expNumber = `+${firstDigit} (${secondDigits}) ${thirdDigits}-${lastDigits}`;
  return expNumber;
}

// Tests
// Passed:1. formatNumber("05552340182") should return "+0 (555) 234-0182".
// Passed:2. formatNumber("15554354792") should return "+1 (555) 435-4792".