function SumUpTo(n) {
  if (n <= 0) return 0;
  return SumUpTo(n - 1) + n;
}

module.exports = SumUpTo;
