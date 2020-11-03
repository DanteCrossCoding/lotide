const assertArraysEqual = require('./assertArraysEqual');

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item))
  }
  return results;
};



module.exports = map;




/*const results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEqual([ 'g', 'c', 't', 'm', 't' ], results1);

assertArraysEqual(["ground", "control", "to", "major", "tom"], results1);
assertArraysEqual([ 'g', 't', 't', 'm', 'c'], results1);*/