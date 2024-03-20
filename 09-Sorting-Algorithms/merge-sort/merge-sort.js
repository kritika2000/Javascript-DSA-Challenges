function mergeTwoSortedArrays(arr1, arr2) {
  if (!arr1.length) return arr2;
  if (!arr2.length) return arr1;
  let mergedArr = [];
  let i = 0,
    j = 0,
    k = 0;
  while (i < arr1.length || j < arr2.length) {
    if (i === arr1.length) {
      mergedArr.push(arr2[j++]);
      continue;
    }
    if (j === arr2.length) {
      mergedArr.push(arr1[i++]);
      continue;
    }
    if (arr1[i] < arr2[j]) mergedArr.push(arr1[i++]);
    else mergedArr.push(arr2[j++]);
  }
  return mergedArr;
}
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const arr1 = mergeSort(arr.slice(0, mid));
  const arr2 = mergeSort(arr.slice(mid));
  console.log(arr1, arr2);
  return mergeTwoSortedArrays(arr1, arr2);
}

const unsortedArray = [4, 1, 3, 4, 2, 2];
console.log(mergeSort(unsortedArray));

module.exports = mergeSort;
