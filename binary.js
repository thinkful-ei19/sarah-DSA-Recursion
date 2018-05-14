'use strict';
// Binary Representation
// Write a recursive function that prints out the binary representation of a given number. For example, the program should take 3 as an input and print 11 as output, or 25 as an input and print 11001 as an output. Note that the binary representation of 0 should be 0.

//base case = 0

function binaryConvert(num, result='') {
  if (num === 0) {
    return result;
  }
  result = (num % 2).toString();
  console.log(result);
  return result + binaryConvert(Math.floor(num/2));
}
console.log(binaryConvert(2));