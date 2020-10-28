let arr = [1, 2, 3, 4, 5];
let arr2 = [1, 2, 3, 4]

const middle = function(array) {
let midElement = Math.floor(array.length / 2);
console.log([array[midElement]]);
}

const middle2 = function(array) {
  let midElement2 = Math.floor(array.length / 2);
  console.log([array[midElement2 -1]], [array[midElement2]]);
  }

middle(arr);
middle2(arr2);

console.log([1])