const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe('#eqObjects', () => {
  it("should return true if object1 = { c: '1', d: ['2', 3] } and object2 = { d: ['2', 3], c: '1' } ", () => {
    assert.isTrue(eqObjects({ c: "1", d: ["2", 3] }, { d: ["2", 3], c: "1" }));
  })
  it("should return false if two objects keys possess different values", () => {
    assert.isFalse(eqObjects({ c: "1", d: ["2", 3] }, { c: "1", d: ["2", 3, 4] }));
  })
})


