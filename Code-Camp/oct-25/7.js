/**
 * You are given a matrix of numbers (an array of arrays), representing potential landing spots for your rover. Find
 * the safest landing spot based on the following rules:
 * Each spot in the matrix will contain a number from 0-9, inclusive.
 * Any 0 represents a potential landing spot.
 * Any number other than 0 is too dangerous to land. The higher the number, the more dangerous.
 * The safest spot is defined as the 0 cell whose surrounding cells (up to 4 neighbors, ignore diagonals) have the
 * lowest total danger.
 * Ignore out-of-bounds neighbors (corners and edges just have fewer neighbors).
 * Return the indices of the safest landing spot. There will always only be one safest spot.
 * @author Jonathan Reyes
 * @param {*} matrix
 * @returns {*}
 */
function findLandingSpot(matrix) {
  let landingCoordinates = [];
  let lowestAccumulative = null;
  for (let n = 0; n < matrix.length; n++) {
    // Every col
    for (let i = 0; i < matrix[n].length; i++) {
      const actualRow = matrix[n];
      if (actualRow[i] === 0) {
        const dangerAbove = n !== 0 ? matrix[n - 1][i] : 0;
        const dangerBelow = n !== matrix.length - 1 ? matrix[n + 1][i] : 0;

        const dangerAhead = actualRow[i + 1] ?? 0;
        const dangerBehind = actualRow[i - 1] ?? 0;

        const dangerX = dangerAbove + dangerBelow;
        const dangerY = dangerAhead + dangerBehind;

        const dangerAcumulative = dangerX + dangerY;

        console.log(dangerAcumulative);
        if (
          dangerAcumulative < lowestAccumulative ||
          lowestAccumulative === null
        ) {
          lowestAccumulative = dangerAcumulative;
          landingCoordinates = [n, i];
        }
      }
    }
  }
  return landingCoordinates;
}

// console.log(
//   findLandingSpot([
//     [1, 0],
//     [2, 0],
//   ])
// );
/**
 * 1Tests
Passed:1. findLandingSpot([[1, 0], [2, 0]]) should return [0, 1].
Passed:2. findLandingSpot([[9, 0, 3], [7, 0, 4], [8, 0, 5]]) should return [1, 1].
Passed:3. findLandingSpot([[1, 2, 1], [0, 0, 2], [3, 0, 0]]) should return [2, 2].
Passed:4. findLandingSpot([[9, 6, 0, 8], [7, 1, 1, 0], [3, 0, 3, 9], [8, 6, 0, 9]]) should return [2, 1].
 */
