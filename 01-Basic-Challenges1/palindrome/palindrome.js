function palindrome(str) {
  str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return str.split('').reverse().join('') === str;
}

console.log(palindrome('Hello'));

module.exports = palindrome;
