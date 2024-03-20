function fibonacciTest(num) {
  if (num <= 1) return num;
  return fibonacciTest(num - 1) + fibonacciTest(num - 2);
}

console.log(fibonacciTest(7));

module.exports = fibonacciTest;
