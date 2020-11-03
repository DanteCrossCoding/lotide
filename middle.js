const assertArraysEqual = require('./assertArraysEqual');

 const middle = function(array) {
   let midElement = Math.floor(array.length / 2);
   if (array.length < 3) {
     console.log([]);
   } else if (array.length % 2 === 0) {
     console.log([array[midElement -1]], [array[midElement]]);
   } else {
     console.log([array[midElement]]);
   }
   };
 
   

module.exports = middle;