const assert = require('chai').assert;
const without = require('../without');

describe('#without', () => {
  it("should return ['hello', 'world'] when given string ['hello', 'world', 'lighthouse']", () => {
    assert.deepEqual(without(words, ["lighthouse"]), ["hello", "world"] )
  })
  it("should return [1, 3] when given array [1, 2, 3]", () => {
    assert.deepEqual(without(num, [2]), [1, 3]);
  })
})

const words = ["hello", "world", "lighthouse"];
const num = [1, 2, 3];