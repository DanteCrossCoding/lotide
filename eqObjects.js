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


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);


const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), true); 


