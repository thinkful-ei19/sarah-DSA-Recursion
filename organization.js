'use strict';

// Organization Chart
// Write a recursive function that prints the following organization chart. Your output should be as shown below with proper indentation to show the hierarchy.

// Zuckerberg
//     Schroepfer
//         Bosworth
//             Steve
//             Kyle
//             Andra
//         Zhao
//             Richie
//             Sofia
//             Jen
//     Schrage
//         VanDyck
//             Sabrina
//             Michelle
//             Josh
//         Swain
//             Blanch
//             Tom
//             Joe
//     Sandberg
//         Goler
//             Eddie
//             Julie
//             Annie
//        Hernandez
//             Rowi
//             Inga
//             Morgan
//        Moissinac
//             Amy
//             Chuck
//             Vinni
//        Kelley
//             Eric
//             Ana
//             Wes

const fbHierarchy = [
  {id: 'Zuckerberg', parent: null},
  {id: 'Schroepfer', parent: 'Zuckerberg'},
  {id: 'Bosworth', parent:'Schroepfer' },
  {id: 'Steve', parent:'Bosworth' },
  {id: 'Kyle', parent:'Bosworth' },
  {id: 'Andra', parent:'Bosworth' },
  {id: 'Zhao', parent: 'Schroepfer'},
  {id: 'Richie', parent: 'Zhao'},
  {id: 'Sofia', parent: 'Zhao'},
  {id: 'Jen', parent: 'Zhao'},
  {id: 'Schrage', parent: 'Zuckerberg'},
  {id: 'VanDyck', parent: 'Schrage'},
  {id: 'Sabrina', parent: 'VanDyck'},
  {id: 'Michelle', parent: 'VanDyck'},
  {id: 'Josh', parent: 'VanDyck'},
  {id: 'Swain', parent: 'Zuckerberg'},
];

function numToSpace(num) {
  let arr=[];
  for (let i=0; i<num; i++) {
    arr.push('    ');
  }
  return arr.join('');
}

// ==============================
function traverse(fbHierarchy, parent, inc=0) {
  inc++;
  fbHierarchy
    .filter(item => item.parent === parent)
    .forEach(
      item => {console.log(numToSpace(inc),item.id), traverse(fbHierarchy, item.id, inc);}); 
}
// console.log(traverse(fbHierarchy, null));