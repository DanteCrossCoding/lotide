const assert = require('chai').assert;
const tails = require('../tails');
const assertEqual = require('../assertEqual');

describe('#tails', () => {
  it("should return the tail of an array", () => {
    assert.deepEqual(tails(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
});
  



/*const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);*/