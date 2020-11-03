const assert = require('chai').assert;
const reverse = require('../reverse');

describe('#reverse', () => {
  it("should return a string backwards", () => {
    assert.strictEqual(reverse("This is a test"), "tset a si sihT");
  })
})