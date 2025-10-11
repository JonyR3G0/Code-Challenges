/**
 * For example, given a payload mass of 50 kg, you would need 10 kg of fuel to lift it 
 * (payload / 5), which increases the total mass to 60 kg, which needs 12 kg to lift (2 
 * additional kg), which increases the total mass to 62 kg, which needs 12.4 kg to lift - 
 * 0.4 additional kg - which is less 1 additional kg, so we stop here. The total mass to 
 * lift is 62.4 kg, 50 of which is the initial payload and 12.4 of fuel.
 * @author Jonathan Reyes
 * @param {number} payload Initial payload weight
 * @returns {number} weight on Kg of the fuel calculated
 */
function launchFuel(payload) {
  let acc = 0
  let fuel = 0
  let sob = payload
  while(sob > 1){
    sob = sob/5
    fuel += sob
    acc ++
  }
  return fuel.toFixed(1);
}
/**
 * Tests
Passed:1. launchFuel(50) should return 12.4.
Passed:2. launchFuel(500) should return 124.8.
Passed:3. launchFuel(243) should return 60.7.
Passed:4. launchFuel(11000) should return 2749.8.
Passed:5. launchFuel(6214) should return 1553.4.
 */