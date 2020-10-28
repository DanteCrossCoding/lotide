const assertArraysEqual = function(arr1, arr2) {
  let string1 = arr1.join();
  let string2 = arr2.join();
  
  if (string1 === string2) {
    console.log("The arrays are equal");
  } else{
    console.log("The arrays are not equal");
  }
 };