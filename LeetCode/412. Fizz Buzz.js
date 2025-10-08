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
  const answer = [];
  for (let i = 1; i <= n; i++) {
    const eval2 = i % 3;
    const eval1 = i % 5;

    if (eval1 === 0 || eval2 === 0) {
        if (eval1 + eval2 === 0) {
            answer.push('FizzBuzz')
            continue;
        }
      eval1 === 0 ? answer.push('Buzz') : answer.push('Fizz')
      continue;
    }
    // Usar concatenacion ${} es menos eficiente en runtime comparado al metodo toString
    answer.push(i.toString());
  }
  // console.log(answer)
  return answer;
};

// fizzBuzz(15);
