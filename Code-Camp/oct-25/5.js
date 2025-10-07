/**
 * you are given a string where each character
 * represents the luminosity reading of a star.
 * Determine if the readings have detected an exoplanet
 * using the transit method. The transit method is when
 * a planet passes in front of a star,
 * reducing its observed luminosity.
 *
 * Luminosity readings only comprise of characters 0-9 and A-Z
 * where each reading corresponds to the following numerical values:
 *
 * Characters 0-9 correspond to luminosity levels 0-9.
 * Characters A-Z correspond to luminosity levels 10-35.
 * A star is considered to have an exoplanet if any single reading is
 * less than or equal to 80% of the average of all readings. For example,
 * if the average luminosity of a star is 10, it would be considered
 * to have a exoplanet if any single reading is 8 or less.
 * @author Jonathan Reyes
 * @param {string} readings
 * @returns {boolean} True if it is an exoplanet, false otherwise
 */
function hasExoplanet(readings) {
  /**
   * This function takes a character and
   * returns an integer with a value rangin
   * from 10 - 35 following a - z values
   * @param {string} letter
   * @returns {number} value 10 - 35 or -1 if unvalid imput
   */
  const intFromLetter = (char) => {
    const letter = char.toLowerCase();
    const alphabet = [..."abcdefghijklmnopqrstuvwxyz"];
    return alphabet.indexOf(letter) + 10;
  };

  const readArr = Array.from(readings).sort();
  const integerArray = [];

  for (let n = 0; n < readArr.length; n++) {
    let element = parseInt(readArr[n]);
    if (isNaN(element)) {
      element = intFromLetter(readArr[n]);
    }
    integerArray.push(element);
  }

  const avrg =
    integerArray.reduce((a, b) => parseInt(a) + parseInt(b)) /
    integerArray.length;

  return integerArray[0] <= 0.8 * avrg ? true : false;
}

// hasExoplanet("FGFFCFFGG");

/*
Tests
Passed:1. hasExoplanet("665544554") should return false.
Passed:2. hasExoplanet("FGFFCFFGG") should return true.
Passed:3. hasExoplanet("MONOPLONOMONPLNOMPNOMP") should return false.
Passed:4. hasExoplanet("FREECODECAMP") should return true.
Passed:5. hasExoplanet("9AB98AB9BC98A") should return false.
Passed:6. hasExoplanet("ZXXWYZXYWYXZEGZXWYZXYGEE") should return true.
**/
