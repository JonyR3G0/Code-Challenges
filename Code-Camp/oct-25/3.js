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
    let validations = 0
    const pswA = Array.from(password)
    pswA.length >= 8 ? validations + 1 : null
    

   if(!(validations > 2 && validations < 4 ? 'medium' : 'strong')){
    return 'weak'
   }
  return 'Error';
}