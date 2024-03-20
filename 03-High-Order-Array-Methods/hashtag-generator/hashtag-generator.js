function capitalizeEachLetterOfWords(text) {
  return text
    .trim()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}
function generateHashtag(str) {
  const generatedHash = '#' + capitalizeEachLetterOfWords(str);
  return generatedHash.length > 1 && generatedHash.length <= 140
    ? generatedHash
    : false;
}

module.exports = generateHashtag;
