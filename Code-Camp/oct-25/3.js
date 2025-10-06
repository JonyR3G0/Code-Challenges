/**
 * Given a password string, return "weak", "medium",
 * or "strong" based on the strength of the password.
 * A password is evaluated according to the following rules:
 * It is at least 8 characters long.
 * It contains both uppercase and lowercase letters.
 * It contains at least one number.
 * It contains at least one special character
 * from this set: !, @, #, $, %, ^, &, or *.
 * @param {*} password
 * @returns
 */
function checkStrength(password) {
  const symbols = /[!@#$%^&*]/;
  const numbers = /\d/;
  const upper = /[A-Z]/;
  const lower = /[a-z]/;
  let validations = 0;
  const pswA = Array.from(password);

  pswA.length >= 8 ? (validations += 1) : null;
  symbols.test(password) ? (validations += 1) : null;
  numbers.test(password) ? (validations += 1) : null;
  upper.test(password) && lower.test(password) ? (validations += 1) : null;

  let answ = validations >= 2 && validations < 4 ? "medium" : "strong";
  validations < 2 ? (answ = "weak") : null;

  return answ;
}

/** 
 *  It's 3:25 am fr if isn't the most optimized answer, at least it works just fine.
 *  console.log(checkStrength("123456"));
 * Tests
Passed:1. checkStrength("123456") should return "weak".
Passed:2. checkStrength("pass!!!") should return "weak".
Passed:3. checkStrength("Qwerty") should return "weak".
Passed:4. checkStrength("PASSWORD") should return "weak".
Passed:5. checkStrength("PASSWORD!") should return "medium".
Passed:6. checkStrength("PassWord%^!") should return "medium".
Passed:7. checkStrength("qwerty12345") should return "medium".
Passed:8. checkStrength("PASSWORD!") should return "medium".
Passed:9. checkStrength("PASSWORD!") should return "medium".
Passed:10. checkStrength("S3cur3P@ssw0rd") should return "strong".
Passed:11. checkStrength("C0d3&Fun!") should return "strong".
*/
