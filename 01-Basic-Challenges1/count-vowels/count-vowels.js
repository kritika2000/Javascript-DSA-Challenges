function isVowel(ch) {
  return ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u';
}
function countVowels(str) {
  return str
    .trim('')
    .toLowerCase()
    .split('')
    .filter((ch) => isVowel(ch)).length;
}

module.exports = countVowels;
