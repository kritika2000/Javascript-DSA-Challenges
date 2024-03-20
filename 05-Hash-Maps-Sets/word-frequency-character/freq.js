function wordFrequencyCounter(str) {
  const map = new Map();
  let words = str
    .toLowerCase()
    .replace(/[^\w\s\']|_/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .split(' ')
    .filter((word) => word.length > 0);
  words.forEach((word) => {
    map.has(word) ? map.set(word, map.get(word) + 1) : map.set(word, 1);
  });
  return map;
}

wordFrequencyCounter('Hello hello hello kritika kritika');

module.exports = wordFrequencyCounter;
