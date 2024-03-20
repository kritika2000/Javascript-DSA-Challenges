function removeDuplicates(arr) {
  const map = {};
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!map[arr[i]]) result.push(arr[i]);
    map[arr[i]] = 1;
  }
  return result;
}

console.log(removeDuplicates([1, 2, 3, 2, 4, 1, 5]));

module.exports = removeDuplicates;
