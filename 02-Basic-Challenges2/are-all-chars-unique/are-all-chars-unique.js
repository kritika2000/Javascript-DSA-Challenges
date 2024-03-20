function areAllCharsUnique(str) {
  /*
  const uniqueChars = new Set(str);
  return uniqueChars.size === str.length;
  */
  /*
  const alphabets = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let uniqueChars = '';
  for (let i = 0; i <= 51; i++) {
    if (
      str.includes(alphabets[i]) &&
      uniqueChars[uniqueChars.length - 1] !== alphabets[i]
    )
      uniqueChars += alphabets[i];
  }
  return uniqueChars.length === str.length;
  */
  const map = {};
  const letters = str.split('');
  for (let i = 0; i < letters.length; i++) {
    if (map[letters[i]]) return false;
    map[letters[i]] = 1;
  }
  return true;
}

console.log(areAllCharsUnique('programming'));

module.exports = areAllCharsUnique;
