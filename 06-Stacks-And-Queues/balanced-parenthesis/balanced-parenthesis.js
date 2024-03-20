const Stack = require('../stack-implementation/stack');
function balancedParenthesis(parenthesis) {
  const stack = new Stack();
  for (let letter of parenthesis) {
    if (stack.isEmpty() || letter === '(') {
      if (letter === ')') return false;
      stack.push(letter);
      continue;
    }
    stack.pop();
  }
  return stack.isEmpty();
}

module.exports = balancedParenthesis;
