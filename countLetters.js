const assertEqual = require('./assertEqual');


const countLetters = function(string) {
  const numOfLetters = {};

  for (const letters of string) {
    if (letters !== ' ') {
      if (numOfLetters[letters]) {
      numOfLetters[letters] += 1;
    } else {
      numOfLetters[letters] = 1;
    }
  } 
} return numOfLetters;
};


module.exports = countLetters;

//console.log(countLetters("lighthouse in the house"));
//assertEqual(countLetters("lighthouse in the house"), { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2,u: 2, s: 2, e: 3, n: 1});