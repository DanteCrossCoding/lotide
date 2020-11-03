const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe('#countLetters', () => {
  it("should return number of each letter in string given", () => { 
    assert.deepEqual(countLetters("says"), {s: 2, a: 1, y: 1});
  })
})