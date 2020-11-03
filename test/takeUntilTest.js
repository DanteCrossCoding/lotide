const assert = require('chai').assert;
const takeUntil = require('../takeUntil');

describe('@takeUntil', () => {
  it("should return array of numbers until last number before index < 0", () => {
    assert.deepEqual(takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2]);
  })
})

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];