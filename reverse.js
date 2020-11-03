const flip = process.argv;

let reverse = function(string) {
  let result = "";
  for (let i = string.length-1; i >= 0; i--) {
    result += string[i];
  } return result;
};
  for (let i = 2; i < flip.length; i++) {
    let string = flip[i];
    console.log(reverse(string));
  }; 

console.log(reverse("This is a test"));

module.exports = reverse;