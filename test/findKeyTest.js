const assert = require('chai').assert;
const findKey = require('../findKey');

describe('#findKey', () => {
  it("should return 'noma' when x.stars === 2", () => {
    assert.deepEqual(findKey(obj, x => x.stars === 2), 'noma');
  })
})


const obj = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}