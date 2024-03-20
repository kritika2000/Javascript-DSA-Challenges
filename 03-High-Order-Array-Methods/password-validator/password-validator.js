function isUpperCased(char) {
  return char >= 'A' && char <= 'Z';
}

function isLowerCased(char) {
  return char >= 'a' && char <= 'z';
}

function isDigit(char) {
  return char >= '0' && char <= '9';
}

function validatePassword(password) {
  if (password.length < 8) return false;
  const lowerCaseCount = password
    .split('')
    .reduce((acc, char) => (acc + isLowerCased(char) ? 1 : 0), 0);
  const upperCaseCount = password
    .split('')
    .reduce((acc, char) => (acc + isUpperCased(char) ? 1 : 0), 0);
  const digitCount = password
    .split('')
    .reduce((acc, char) => (acc + isDigit(char) ? 1 : 0), 0);
  return lowerCaseCount > 0 && upperCaseCount > 0 && digitCount > 0;
}

module.exports = validatePassword;
