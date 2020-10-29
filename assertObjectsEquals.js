const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(actual, expected) {
  if (actual.length === expected.length) {
    let isEqual = true;
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) {
        isEqual = false;
      }
    }
    if (isEqual) {
      return true;
    } else {
      return false;
    }
  }
};


const eqObjects = function(object1, object2) {
  const obj1 = Object.keys(object1);
  const obj2 = Object.keys(object2);

  if (obj1.length !== obj2.length) {
    return false
  } else {
    for (const key of obj1) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if (!eqArrays(object1[key], object2[key])) {
          return false;
        } 
      } else {
      if (object1[key] !== object2[key]) {
        return false;
      }
    } 
  }return true;
}
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`🟢🟢Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`)
  } else {
    console.log(`🔴🔴Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

obj1 = {
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
assertObjectsEqual(obj1,obj3);
