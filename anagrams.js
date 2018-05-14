'use strict';

// Anagrams
// An anagram is any word or phrase that exactly reproduces the letters in another order. Write a function that creates an anagram (listing all the rearrangements of a word) of a given word. For example, if the user types east, the program should list all 24 permutations, including eats, etas, teas, and non-words like tsae.

// Hint: For your algorithm, you might want to think about a prefix and use that to create the new words. For example, given east, use e as a prefix and you would place e in front of all six permutations of ast — ast, ats, sat, sta, tas, and tsa. This will give you the words east, eats, esat, esta, etas, and etsa. Continue this way until you find all the anagrams for east. There should be 24 of them.
//input = string
//output = array of strings
//set prefix
//set remaining letters const

function anagram(str, result=[], prefix='') {
  if (str.length ===0) {
    result.push(prefix);
    return result;
  }
  //setup loop to check permutations
  for ( let i=0; i < str.length; i++) {
    anagram((str.slice(0, i) + str.slice(i +1)), result, (prefix + str[i]));
    console.log(prefix);
  }
  console.log(result.length);
  return result;
}

// function anagram(str, result = []) {
//   if(str.length === 2) {
//     return [str[0] + str[1], str[1] + str[0]];
//   }
//   console.log(str);
//   for (let i=0; i < str.length; i++) {
//     let remaining= str.slice(0, i) + str.slice(i +1);
//     console.log(remaining, 'remaining');
//     // let firstLetter = str[i];
//     // let newStr = str.splice(i, 1);
//     let anagrams = (anagram(remaining));
//     console.log(anagrams, 'anagrams');

//     for (let j=0; j < anagrams.length; j++) {
//       result.push(str[i] + anagrams[j]);
//     }
//   }
//   console.log(result);
// }

console.log(anagram('east'));

// const str="east"
// console.log(str.slice(0, 0) + str.slice(1))// ="ast"
// console.log(str.slice(0,1) + str.slice(2)) //= "est"
// console.log(str.slice(0, 2) + str.slice(3)) //= "eat"



// function anagram(str) {
// str = "asd"
//   for (let i = 0; i < str.length; i++)
//   //
//   firstLetter = "a"//0
//   newStr = str.splice(0,1); //"sd"
//   recursiveFn(firstLetter, newStr)
  
//   //1
//   firstLetter = "s"//0
//   newStr = str.splice(1,1); //"ad"
//   recursiveFn()

//   //2
//   firstLetter = "d"//0
//   newStr = str.splice(2,1); //"as"
//   recursiveFn()

//   if(newStr.length == 1) return firstLetter + newStr;
// }