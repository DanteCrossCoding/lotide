const assert = require('chai').assert
const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

describe('#middle', () => {
  it("should return [] for an array with a length less than 3", () => {
    assert.strictEqual(middle([1], []));
  })
  it("should return the two center elements for an even numbered array", () => {
    assert.strictEqual(middle([2,3], [1,2,3,4]));
  })
  it("should return the center element from a odd numbered array", () => {
    assert.strictEqual(middle([3], [1,2,3,4,5]));
  })
})