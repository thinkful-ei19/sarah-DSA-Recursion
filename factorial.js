'use strict';
// Factorial
// Write a recursive function that finds the factorial of a given number. The factorial of a number can be found by multiplying that number by each number between itself and one. The factorial of 5 is equal to 5 * 4 * 3 * 2 * 1 = 120

function factorial(num, result=1) {
  //base case
  if (num < 1) {
    return result;
  }
  return factorial(num - 1, result * num);
}

console.log(factorial(5));