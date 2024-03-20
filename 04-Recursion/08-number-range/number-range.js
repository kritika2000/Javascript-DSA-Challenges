function numberRange(min, max) {
  if (min === max) return [min];
  return [...numberRange(min, max - 1), max];
}

console.log(numberRange(3, 10));

module.exports = numberRange;
