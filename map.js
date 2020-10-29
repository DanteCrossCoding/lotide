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

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item))
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];


const results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEqual([ 'g', 'c', 't', 'm', 't' ], results1);

assertArraysEqual(["ground", "control", "to", "major", "tom"], results1);
assertArraysEqual([ 'g', 't', 't', 'm', 'c'], results1);