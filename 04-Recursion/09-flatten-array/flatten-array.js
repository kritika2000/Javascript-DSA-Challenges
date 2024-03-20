function flattenArray(arr) {
  if (arr.length === 0) return [];
  let res = [];
  if (!Array.isArray(arr[0])) res = [arr[0]];
  else res = flattenArray(arr[0]);
  return [...res, ...flattenArray(arr.slice(1))];
}

console.log(flattenArray([1, [2, [3, [4, [5]]]]]));

module.exports = flattenArray;
