'use strict';

// Reverse String
// Write a function that reverses a string. Take a string as input, reverse the string, and return the new string.

function reverse(myString) {
  //base case
  if(myString === '') {
    return '';
  }
  return reverse(myString.slice(1)) + myString[0];
}

console.log(reverse('hey'));