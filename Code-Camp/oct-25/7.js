
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
    const landingCoordinates = []
// [9, 0, 3]
// [7, 0, 4]
// [8, 0, 5]
let sumaRowCero = null
let coordenadas = null
    for (let n = 0; n < matrix.length; n++) {
        for (let i = 0; i < matrix[n].length; i++) {
            const actualRow = matrix[n]
            if(actualRow[i] === 0){
                coordenadas = [[i], [n]]
                sumaRowCero = (i <= 0 ? 0 : actualRow[i - 1]) + (i >= actualRow.length - 1 ? 0 : actualRow[i + 1])
                console.log(`0D resum | ${sumaRowCero} en mat. ${n} en pos ${i}`)

            }
        }
    }
  return landingCoordinates;
}
// [1, 2, 1], 
// [0, 0, 2], 
// [3, 0, 0]
findLandingSpot([[1, 2, 1], [0, 0, 2], [3, 0, 0]])
/**
 * 1. findLandingSpot([[1, 0], [2, 0]]) should return [0, 1].
Waiting:2. findLandingSpot([[9, 0, 3], [7, 0, 4], [8, 0, 5]]) should return [1, 1].
Waiting:3. findLandingSpot([[1, 2, 1], [0, 0, 2], [3, 0, 0]]) should return [2, 2].
 */