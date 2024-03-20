function anagramGrouping(arrStr) {
  const map = {};
  let sortedStrs = [...arrStr];
  sortedStrs = sortedStrs.map((str) => str.split('').sort().join(''));
  for (let i = 0; i < sortedStrs.length; i++) {
    if (!map[sortedStrs[i]]) {
      map[sortedStrs[i]] = [arrStr[i]];
    } else {
      map[sortedStrs[i]] = [...map[sortedStrs[i]], arrStr[i]];
    }
  }
  return Object.values(map);
}

const result1 = anagramGrouping(['cat', 'act', 'dog', 'god', 'tac']);
console.log(result1);

module.exports = anagramGrouping;
