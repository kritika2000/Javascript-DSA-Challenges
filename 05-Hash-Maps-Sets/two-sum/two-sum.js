function twoSum(arr, target) {
  const map = new Map();
  const res = [];
  arr.forEach((elem, index) => {
    if (map.has(target - elem)) {
      res.push(map.get(target - elem));
      res.push(index);
      return;
    }
    map.set(elem, index);
  });
  return res;
}

module.exports = twoSum;
