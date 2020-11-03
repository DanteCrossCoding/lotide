const assert = require('chai').assert;
const tails = require('../tails');
const assertEqual = require('../assertEqual');

describe('#tails', () => {
  it("should return the tail of an array", () => {
    assert.deepEqual(tails(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
});
  



