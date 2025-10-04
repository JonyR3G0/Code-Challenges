/**
 * For today's challenge, you are given the surface temperature of a star in Kelvin (K) and need to determine its stellar classification based on the following ranges:
"O": 30,000 K or higher
"B": 10,000 K - 29,999 K
"A": 7,500 K - 9,999 K
"F": 6,000 K - 7,499 K
"G": 5,200 K - 5,999 K
"K": 3,700 K - 5,199 K
"M": 0 K - 3,699 K
Return the classification of the given star.
 * @author Jonathan Reyes
 * @param {*} temp 
 * @returns {*} 
 */
function classification(num) {
    // Is there a way to do this without hard comparison?
    // There's something that I'm not seeing?
  switch (true) {
    case num <= 0:
        return "Error: below range"
    case num <= 3699:
      return "M";
    case num <= 5199:
      return "K";
    case num <= 5999:
      return "G";
    case num <= 7499:
      return "F";
    case num <= 9999:
      return "A";
    case num <= 29999:
      return "B";
    case num >= 30000:
      return "O";
    default:
      return "Error: out of range";
  }
}

/**
 * Tests
Passed:1. classification(5778) should return "G".
Passed:2. classification(2400) should return "M".
Passed:3. classification(9999) should return "A".
Passed:4. classification(3700) should return "K".
Passed:5. classification(3699) should return "M".
Passed:6. classification(210000) should return "O".
Passed:7. classification(6000) should return "F".
Passed:8. classification(11432) should return "B".
 */