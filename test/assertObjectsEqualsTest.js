const assert = require('chai').assert;
const assertObjectsEquals = require('../assertObjectsEquals');

describe('#assertObjectsEquals', () => {
  it("should return Passed if input object is equal to expected object", () => {
    assert.deepEqual(assertObjectsEquals({a: "1", b: "2"}, {b: "2", a: "1"}));
  })
  it("should return Failed if objects are not equal", () => {
    assert.deepEqual(assertObjectsEquals({a: "1",  b: "2"}, { a: "1", b: "2", c: "3"}));
  })
})