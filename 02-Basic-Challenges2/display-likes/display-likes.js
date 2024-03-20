function displayLikes(names) {
  if (names.length === 0) return 'no one likes this';
  let res = '';
  if (names.length === 1) return `${names[0]} likes this`;
  if (names.length === 2) res = `${names[0]} and ${names[1]}`;
  else if (names.length === 3) res = `${names[0]}, ${names[1]} and ${names[2]}`;
  else res = `${names[0]}, ${names[1]} and ${names.length - 2} others`;
  return res + ' like this';
}

module.exports = displayLikes;
