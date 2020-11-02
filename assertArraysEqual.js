const eqArrays = require('./eqArrays');

const assertArraysEqual = function(actual,expected){
  const isEqual = eqArrays(actual,expected)
  if (isEqual) {
    console.log(`🟢Assert succeeded: ${actual} = ${expected}`);
    
  } else {
    console.log(`🔴Assert failed: ${actual} != ${expected}`);
    
  }
};



module.exports = assertArraysEqual;