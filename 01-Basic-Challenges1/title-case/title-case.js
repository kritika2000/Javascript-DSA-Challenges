// Capitalize each letter of words in a string.
function capitalizeEachLetterOfWord(str) {
  return str
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

module.exports = capitalizeEachLetterOfWord;
