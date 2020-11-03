const assert = require('chai').assert;
const countOnly = require('../countOnly');

describe('#countOnly', () => {
  it("should return {Fang: 2, Jason: 1} when given firstNames {'Jason': true, 'Karima': true, 'Fang': true}", () => {
    assert.deepEqual(countOnly(firstNames, {'Jason': true, 'Karima': true, 'Fang': true}), {Fang: 2, Jason: 1});
  })
})

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];