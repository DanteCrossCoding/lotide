const eqArrays = function(arr1, arr2) {
 let string1 = arr1.join();
 let string2 = arr2.join();
 
 if (string1 === string2) {
   return true;
 } else{
   return false;
 }
};




const eqArrays = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴Assertion Failed: ${actual} !== ${expected}`);
  }
};

