'use strict';

// Fibonacci
// Write a recursive function that prints the fibonacci sequence of a given number. The fibonnaci sequence a series of numbers in which each number is the sum of the two preceding numbers. For example the 7th fibonacci number in a fibonaci sequence is 13. The sequence looks as follows: 1 1 2 3 5 8 13.

function fibonacci(n) {
  if (n < 2) {
    return n;
  }
  else
    return fibonacci(n-1) + fibonacci(n-2);
}

console.log(fibonacci(1));
console.log(fibonacci(5));
console.log(fibonacci(7));
console.log(fibonacci(18));