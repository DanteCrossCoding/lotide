const assertArraysEqual = function(actual, expected) {
  if (Array.isArray(actual) && Array.isArray(expected) && actual.length === expected.length) {
    let isEqual = true;
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) {
        isEqual = false;
      }
    }
    if (isEqual) {
      console.log(`🟢Assert succeeded: ${actual} = ${expected}`);
      
    } else {
      console.log(`🔴Assert failed: ${actual} != ${expected}`);
      
    }
  }
};