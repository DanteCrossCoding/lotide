const assertEqual = require('./assertEqual');

const tail = function(arr) {
  arr = arr.slice(1);
  return arr;

;}



module.exports = tail;