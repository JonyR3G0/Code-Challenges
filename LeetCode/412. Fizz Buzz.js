/**
 * Given an integer n, return a string array answer (1-indexed) where:
 * answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
 * answer[i] == "Fizz" if i is divisible by 3.
 * answer[i] == "Buzz" if i is divisible by 5.
 * answer[i] == i (as a string) if none of the above conditions are true.
 * @author Jonathan Reyes
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
    const answer = []
  for (let index = n; index >= 1; index--) {
    let checkout = index
    if(index % 3 === 0) checkout = 'Fizz'
    if(index % 5 === 0) checkout = checkout === 'Fizz' ? checkout = 'FizzBuzz' : checkout = 'Buzz'
    answer.unshift(`${checkout}`)
  }
  return answer
};

fizzBuzz(15);
