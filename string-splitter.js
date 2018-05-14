'use strict';
// String Splitter
// Split a string based upon a separator (similar to String.prototype.split)

// function splitter(myString, separator) {
//   if (myString === ''){
//     return [];
//   }
//   if(myString[0] === separator) {
//     return [myString.slice(1), ...splitter(myString.slice(1), separator)];
//   }
//   return splitter(myString.slice(1), separator);
// }
// console.log(splitter('split this string please', ' '));

function splitter(myString, predicate, word='') {
  if (myString === ''){
    console.log(myString)
    return [word];
  }
  if(predicate(myString[myString.length - 1])) {
    return [...splitter(myString.slice(0, -1), predicate), word];
  }
  word = myString[myString.length - 1] + word;
  console.log(word);
  return splitter(myString.slice(0, -1), predicate, word);
}

console.log(splitter('split this string please', x => x === ' '));
