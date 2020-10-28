const assertArraysEqual = function(arr1, arr2) {
  let string1 = arr1.join();
  let string2 = arr2.join();
  
  if (string1 === string2) {
    console.log("🟢The arrays are equal");
  } else {
    console.log("🔴The arrays are not equal");
  }
};

const without = function(source, itemsToRemove) {
  let kept = [];
  for (let i = 0; i < source.length; i++) {
    if (source[i] !== itemsToRemove[0]) {
      kept.push(source[i]);
      
    }
  }console.log(kept);
};


const words = ["hello", "world", "lighthouse"];

const words2 = ["golly", "gee", "willikers"];

const num = [1, 2, 3];

without(words, ["lighthouse"]);
without(words2, ["gee"]);
without(num, [2]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);