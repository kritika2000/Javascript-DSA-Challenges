function findMissingLetter(arr) {
  let minChar = arr[0],
    maxChar = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (minChar.localeCompare(arr[i]) === 1) minChar = arr[i];
    if (maxChar.localeCompare(arr[i]) === -1) maxChar = arr[i];
  }
  for (let i = minChar.charCodeAt(0); i <= maxChar.charCodeAt(0); i++) {
    if (!arr.includes(String.fromCharCode(i))) return String.fromCharCode(i);
  }
  return '';
}

console.log(findMissingLetter(['J', 'G', 'H', 'F']));

module.exports = findMissingLetter;
