function permutations(str) {
  if (str.length === 0) return [''];
  let res = [];
  const letters = str.split('');
  for (let i = 0; i < letters.length; i++) {
    const firstChar = letters[i];
    const remainingStr =
      letters.slice(0, i).join('') + letters.slice(i + 1).join('');
    const perms = permutations(remainingStr);
    perms.forEach((perm) => res.push(firstChar + perm));
  }
  return res;
}

console.log(permutations('abc'));

module.exports = permutations;
