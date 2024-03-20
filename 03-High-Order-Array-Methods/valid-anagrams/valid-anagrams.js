function areValidAnagrams(str1, str2) {
  const map1 = {};
  const map2 = {};
  str1 = str1.split('');
  str2 = str2.split('');
  for (let i = 0; i < str1.length; i++) {
    map1[str1[i]] = map1[str1[i]] ? map1[str1[i]] + 1 : 1;
  }
  for (let i = 0; i < str2.length; i++) {
    map2[str2[i]] = map2[str2[i]] ? map2[str2[i]] + 1 : 1;
  }
  for (let i = 0; i < str1.length; i++) {
    if (map1[str1[i]] !== map2[str1[i]]) return false;
  }
  return true;
}

console.log(areValidAnagrams('listen', 'silent'));

module.exports = areValidAnagrams;
