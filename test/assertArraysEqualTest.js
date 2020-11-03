const assert = require('chai').assert
const assertArraysEqual = require('../assertArraysEqual');

describe('#assertArraysEqual', () => {
  it("should return [1,2,3] for [1,2,3]", () => {
    assert.strictEqual(assertArraysEqual([1,2,3], [1,2,3]));
  })
  it("should return false for [3,2,1]", () => {
    assert.strictEqual(assertArraysEqual([3,2,1], [1,2,3]));
  });
});

