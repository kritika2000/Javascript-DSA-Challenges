function arrayIntersection(arr1, arr2) {
  arr1 = arr1.sort((a, b) => a - b);
  arr2 = arr2.sort((a, b) => a - b);
  let result = [];
  let i = 0,
    j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] === arr2[j]) {
      result.push(arr1[i]);
      i++;
      j++;
      continue;
    }
    if (arr1[i] < arr2[j]) {
      i++;
    } else {
      j++;
    }
  }
  return result;
}

console.log(arrayIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));

module.exports = arrayIntersection;
