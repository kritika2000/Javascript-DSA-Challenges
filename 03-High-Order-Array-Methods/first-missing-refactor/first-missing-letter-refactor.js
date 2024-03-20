function firstMissingRefactor(letters) {
  let ans = '';
  letters.reduce((prev, curr) => {
    ans =
      Math.abs(prev.charCodeAt(0) - curr.charCodeAt(0)) > 1
        ? String.fromCharCode(prev.charCodeAt(0) + 1)
        : ans;
    prev = curr;
    return prev;
  }, letters[0]);
  return ans;
}

module.exports = firstMissingRefactor;
