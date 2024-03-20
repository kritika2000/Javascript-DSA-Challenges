function arraySum(arr) {
  console.log(1);
  return arr.length ? arr[0] + arraySum(arr.slice(1)) : 0;
}

module.exports = arraySum;
