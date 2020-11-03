const assert = require('chai').assert;
const map = require('../map');





describe('#map', () => {
  it("should return first letter of every word in array", () => {
    assert.deepEqual(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ])
  })
})

const words = ["ground", "control", "to", "major", "tom"];