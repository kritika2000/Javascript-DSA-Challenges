function reverseString(str) {
  // const letters = str.split('');
  // let i = 0,
  //   j = str.length - 1;
  // while (i < j) {
  //   let temp = letters[i];
  //   letters[i] = letters[j];
  //   letters[j] = temp;
  //   i++;
  //   j--;
  // }
  // return letters.join('');
  return str.split('').reverse().join('');
}

module.exports = reverseString;
