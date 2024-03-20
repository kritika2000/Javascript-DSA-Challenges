function sumOfEvenSquares(numbers) {
  return numbers
    .filter((num) => num % 2 === 0)
    .reduce((acc, curr) => acc + curr * curr, 0);
}

console.log(sumOfEvenSquares([-1, 0, 1, 2, 3, 4]));

module.exports = sumOfEvenSquares;
