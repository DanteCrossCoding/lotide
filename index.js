const head = require('./head');
const tails = require('./tails');
const middle = require('./middle');

module.exports = {
  head:   head,
  tails:   tails,
  middle: middle,
  assertArraysEqual: assertArraysEqual,
  asserEqual: asserEqual,
  assertObjectsEquals: assertObjectsEquals,
  countLetters: countLetters,
  countOnly: countOnly,
  eqArrays: eqArrays,
  eqObjects: eqObjects,
  findKey: findKey,
  findKeyByValue: findKeyByValue,
  index: index,
  letterPositions: letterPositions,
  map: map,
  reverse: reverse,
  takeUntil: takeUntil,
  test: test,
  without: without,
};