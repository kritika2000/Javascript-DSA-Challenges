function highestScoringWord(text) {
  const words = text.split(' ');
  const charCodes = text
    .split(' ')
    .map((word) =>
      word.split('').reduce((acc, letter) => acc + letter.charCodeAt(0), 0)
    );
  let res = '';
  charCodes.reduce((prev, curr, index) => {
    if (curr > prev) res = words[index];
    prev = curr;
    return prev;
  });
  return res;
}

console.log(highestScoringWord('take me to semynak'));

module.exports = highestScoringWord;
