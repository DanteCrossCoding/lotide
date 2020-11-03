const assert = require('chai').assert;
const assertEqual = require('../assertEqual');


describe('#assertEqual', () => {
  it("should return failed for Lighthouse against Bootcaml", () => {
    assert.strictEqual(assertEqual("Lighthouse Labs", "Bootcamp"));
  })
  it("should return true for 1 compared to 1", () => {
    assert.strictEqual(assertEqual(1, 1));
  })
  it("should return false for 5 comapred to 12", () => {
    assert.strictEqual(assertEqual(5, 12));
  })
  it("should return true for Justin compared to Justin", () => {
    assert.strictEqual(assertEqual("Justin", "Justin"))
  });
});

