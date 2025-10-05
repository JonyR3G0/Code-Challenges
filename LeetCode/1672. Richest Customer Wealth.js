/**
 * You are given an m x n integer grid accounts
 * where accounts[i][j] is the amount of money
 * the i​​​​​​​​​​​th​​​​ customer has in the 
 * j​​​​​​​​​​​th​​​​ bank. Return the wealth 
 * that the richest customer has.
 * @author Jonathan Reyes
 * @param {number[][]} accounts
 * @return {number} wealth of the richest customer
 */
var maximumWealth = function (accounts) {
  let res = 0;
  for (let n = 0; n < accounts.length; n++) {
    const calc = accounts[n].reduce((a, b) => a + b);
    res > calc ? null : (res = calc);
  }
  return res;
};

// console.log(maximumWealth([
//   [1, 2, 3],
//   [3, 2, 1],
// ]))
