const eqArrays = function(arr1, arr2) {
 let string1 = arr1.join();
 let string2 = arr2.join();
 
 if (string1 === string2) {
   return true;
 } else{
   return false;
 }
};




const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴Assertion Failed: ${actual} !== ${expected}`);
  }
};



assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([2, 7, 3], [1, 2, 2]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true);
assertEqual(eqArrays([1, 2, 3], [1, 2, 4]), true);
assertEqual(eqArrays([1, 2, 3], [7, 8, 9]), true);