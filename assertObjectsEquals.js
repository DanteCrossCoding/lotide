const eqObjects = require('./eqObjects');

const assertObjectsEquals = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`🟢🟢Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`)
  } else {
    console.log(`🔴🔴Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};


module.exports = assertObjectsEquals;

/*obj1 = {
  a: "1",
  b: "2"
};

obj2 = {
  b: "2",
  a: "1"
};

obj3 = {
  a: "1",
  b: "2",
  c: "3"
};



assertObjectsEqual(obj1,obj2);
assertObjectsEqual(obj1,obj3);*/
