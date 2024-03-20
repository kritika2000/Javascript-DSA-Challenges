function calculator(op1, op2, operator) {
  let result;
  switch (operator) {
    case '+':
      result = op1 + op2;
      break;
    case '-':
      result = op1 - op2;
      break;
    case '*':
      result = op1 * op2;
      break;
    case '/':
      result = op1 / op2;
      break;
    default:
      throw new Error('Invalid Operator');
  }
  return result;
}

module.exports = calculator;
