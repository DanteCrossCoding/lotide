const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

describe('#findKeyByValue', () => {
  it("should return sci_fi: when given show name 'The Expanse'", () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
  })
})


const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};