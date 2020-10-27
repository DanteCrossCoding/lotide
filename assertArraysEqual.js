const eqArrays = function(arr1, arr2) {
  let string1 = arr1.join();
  let string2 = arr2.join();
  
  if (string1 === string2) {
    console.log("The arrays are equal");
  } else{
    console.log("The arrays are not equal");
  }
 };
 
 
 eqArrays([1, 2, 3], [1, 2, 3]);
 eqArrays([1, 2, 3], [3, 2, 1]);
 eqArrays([5, 9, 3], [4, 7, 1]);
 
 