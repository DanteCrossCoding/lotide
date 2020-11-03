const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe('#eqArrays', () => {
  it("should return [1,2] for [1,2]", () => {
    assert.isTrue(eqArrays([1,2], [1,2]));
  })
  it("should return false when ['1',2] is compared to [1,2]", () => {
    assert.isFalse(eqArrays(["1",2], [1,2]));
   });
});

