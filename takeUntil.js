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

const assertArraysEqual = function(actual, expected){
  const isEqual = eqArrays(actual, expected)
  if (isEqual) {
    console.log(`🟢Assert succeeded: ${actual} = ${expected}`);
    
  } else {
    console.log(`🔴Assert failed: ${actual} != ${expected}`);
    
  }
};





const takeUntil = function(array, callback) {
  array.forEach(function(i, index) {
    if (callback(i)) {
      array = array.slice(0, index);
    }
  });
  return array;
};
 

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);



assertArraysEqual([ 1, 2, 5, 7, 2 ], results1);
console.log('---');
assertArraysEqual([ 'I\'ve', 'been', 'to', 'Hollywood' ], results2);


