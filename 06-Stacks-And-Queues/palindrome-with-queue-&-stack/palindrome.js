const Stack = require('../stack-implementation/stack');

function ifPalindrome(str) {
  str = str
    .replace(/[^\w\s\']|_/g, '')
    .replace(/\s/g, '')
    .toLowerCase();
  console.log(str);
  const stack = new Stack();
  str.split('').forEach((letter) => {
    stack.push(letter);
  });
  for (let letter of str) {
    if (stack.top() !== letter) return false;
    stack.pop();
  }
  return true;
}

console.log(ifPalindrome('A man, a plan, a canal, Panama'));

module.exports = ifPalindrome;
