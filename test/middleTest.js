const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

let num1 = [1]
let num4 = [1, 2, 3, 4]

middle(num1);
middle([1, 2, 3]);
middle([1, 2, 3, 4, 5]);
middle(num4);