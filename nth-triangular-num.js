'use strict';
// nth Triangular Number
// Calculates the nth triangular number. A triangular number counts the objects that can form an equilateral triangle. The nth triangular number is the number of dots composing a triangle with n dots on a side, and is equal to the sum of the n natural numbers from 1 to n. This is the Triangular Number Sequence: 1, 3, 6, 10, 15, 21, 28, 36, 45

function calcTriangularNum(num) {
  //base case
  if (num === 1) {
    return 1;
  }
  return calcTriangularNum(num -1) + num;
}

console.log(calcTriangularNum(10));

// function calcTriangularNum(num, inc=0) {
//   2	  //base case
//   3	  if (num === 0) {
//   4	    return inc
//   5	  }
//   6	  return calcTriangularNum(num -1, num + inc);
//   7	}
//   8	
//   9	console.log(calcTriangularNum(10))