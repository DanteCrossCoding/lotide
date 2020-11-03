const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe('#letterPositions', () => {
  it("should return list of letters with the index of each letters position", () => {
    assert.deepEqual(letterPositions("says"), {s: [0, 3], a: [1], y: [2]});
  })
})