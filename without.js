const assertArraysEqual = require('./assertArraysEqual');

const without = function(source, itemsToRemove) {
  let kept = [];
  for (let i = 0; i < source.length; i++) {
    if (source[i] !== itemsToRemove[0]) {
      kept.push(source[i]);
      
    }
  }return kept;
};



module.exports = without;
/* const words = ["hello", "world", "lighthouse"];

const words2 = ["golly", "gee", "willikers"];

const num = [1, 2, 3];

without(words, ["lighthouse"]);
without(words2, ["gee"]);
without(num, [2]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]); */