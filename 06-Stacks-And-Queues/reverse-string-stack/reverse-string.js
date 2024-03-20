const Stack = require('../stack-implementation/stack');
function reverseString(str) {
  let res = '';
  const stack = new Stack();
  str.split('').forEach((letter) => {
    stack.push(letter);
  });
  while (!stack.isEmpty()) {
    res += stack.top();
    stack.pop();
  }
  return res;
}

module.exports = reverseString;
