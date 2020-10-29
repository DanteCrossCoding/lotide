const eqArrays = function(actual, expected) {
  if (actual.length === expected.length) {
    let isEqual = true;
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) {
        isEqual = false;
      }
    }
    if (isEqual) {
      return true;
    } else {
      return false;
    }
  }
};

const assertArraysEqual = function(actual,expected){
  const isEqual = eqArrays(actual,expected)
  if (isEqual) {
    console.log(`🟢Assert succeeded: ${actual} = ${expected}`);
    
  } else {
    console.log(`🔴Assert failed: ${actual} != ${expected}`);
    
  }
};