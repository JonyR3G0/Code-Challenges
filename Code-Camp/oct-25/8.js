/**
 * Given the mass of a star, return an array with the start and end distances
 * of its Goldilocks Zone in Astronomical Units.
 * To calculate the Goldilocks Zone:
 * Find the luminosity of the star by raising its mass to the power of 3.5.
 * The start of the zone is 0.95 times the square root of its luminosity.
 * The end of the zone is 1.37 times the square root of its luminosity.
 * Return the distances rounded to two decimal places.
 * For example, given 1 as a mass, return [0.95, 1.37].
 *
 * @param {*} mass
 * @returns {*}
 */
function goldilocksZone(mass) {
  const luminosity = mass ** 3.5;
  const godilockZoneStart = Math.sqrt(luminosity) * 0.95;
  const godilockZoneEnd = Math.sqrt(luminosity) * 1.37;

  return [
    parseFloat(godilockZoneStart.toFixed(2)),
    parseFloat(godilockZoneEnd.toFixed(2)),
  ];
}

// console.log(goldilocksZone(1))

/**
 * Tests
Passed:1. goldilocksZone(1) should return [0.95, 1.37].
Passed:2. goldilocksZone(0.5) should return [0.28, 0.41].
Passed:3. goldilocksZone(6) should return [21.85, 31.51].
Passed:4. goldilocksZone(3.7) should return [9.38, 13.52].
Passed:5. goldilocksZone(20) should return [179.69, 259.13].
 */
