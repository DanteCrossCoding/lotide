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

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢Assert succeeded: ${actual} = ${expected}`);
  } else {
    console.log(`🔴🔴Assert failed: ${actual} != ${expected}`);
  }
};


eqArrays([1,2],[1,2]);
eqArrays(["1",2],["1","2"]);

assertEqual(eqArrays([1,2],[1,2]),true);
assertEqual(eqArrays([1,2],['1',2]),true);