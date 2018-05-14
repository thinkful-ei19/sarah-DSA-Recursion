'use strict';

const str= 'hello';

console.log(str.slice(0, 0) + str.slice(1))// ="ast"
console.log(str.slice(0,1))
console.log(str.slice(2)) 
console.log(str.slice(0,1) + str.slice(2))//= "est"
console.log(str.slice(0, 2) + str.slice(3))