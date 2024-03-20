function longestConsecutive(arr) {
  const map = {};
  for (let i = 0; i < arr.length; i++) {
    map[arr[i]] = map[arr[i]] ? map[arr[i]] + 1 : 1;
  }
  let maxLength = 0;
  for (let i = 0; i < arr.length; i++) {
    let len = 0;
    let elem = arr[i];
    while (map[elem]) {
      len++;
      elem++;
    }
    maxLength = Math.max(maxLength, len);
  }
  return maxLength;
}

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));

module.exports = longestConsecutive;
