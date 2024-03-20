function findMissingNumber(arr) {
  const n = arr.length + 1;
  const sumToN = (n * (n + 1)) / 2;
  const arrSum = arr.reduce((acc, curr) => acc + curr, 0);
  return sumToN - arrSum;
}

module.exports = findMissingNumber;
