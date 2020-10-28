const assertArraysEqual = function(arr1, arr2) {
  let string1 = arr1.join();
  let string2 = arr2.join();
  
  if (string1 === string2) {
    console.log("The arrays are equal");
  } else{
    console.log("The arrays are not equal");
  }
 };

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
 
let num1 = [1]
let num2 = [1, 2]
let num3 = [1, 2, 3, 4, 5]
let num4 = [1, 2, 3, 4]

middle(num1);
middle([1, 2, 3]);
middle([1, 2, 3, 4, 5]);
middle(num4);

assertArraysEqual(num4, [1, 2, 3, 4]);