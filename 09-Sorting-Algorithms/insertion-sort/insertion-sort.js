function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const temp = arr[i];
    for (var j = i - 1; j >= 0; j--) {
      if (temp >= arr[j]) break;
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = temp;
  }
  return arr;
}

const unsortedArray = [4, 1, 3, 4, 2, 2];
console.log(insertionSort(unsortedArray));

module.exports = insertionSort;
