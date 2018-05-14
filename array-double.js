'use strict';
// Array Double
// Write a function that takes an array as input which contains an unknown set of numbers, and outputs an array with each input value doubled. Test your solution by trying a handful of different arrays. For example,

// Input: [1, 2, 3]
// Output: [2, 4, 6]

function double(arr) {
  //base case
  if(arr.length === 0) {
    return [];
  }
  return [(arr[0]*2), ...double(arr.slice(1))];
}

console.log(double([1, 2, 3]));