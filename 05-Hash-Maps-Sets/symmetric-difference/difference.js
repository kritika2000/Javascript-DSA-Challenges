function symmetricDifference(arr1, arr2) {
  const allElems = [...arr1, ...arr2];
  console.log(allElems);
  return allElems.filter(
    (elem) =>
      (!(arr1.includes(elem) && arr2.includes(elem)) && !arr1.includes(elem)) ||
      !arr2.includes(elem)
  );
}

console.log(symmetricDifference([1, 2, 2, 3, 4], [2, 3, 3, 4, 5]));

module.exports = symmetricDifference;
