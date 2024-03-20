function countOccurances(str, ch) {
  // return str.split('').filter((char) => char === ch).length;
  return str.split('').filter((c) => c === ch).length;
}

module.exports = countOccurances;
