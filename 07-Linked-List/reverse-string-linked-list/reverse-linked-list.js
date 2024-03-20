const LinkedList = require('../linked-list-implementation/linkedList');

function reverseString(str) {
  let reversedStr = '';
  const linkedList = new LinkedList();
  for (let letter of str) {
    linkedList.insertBegin(letter);
  }
  while (linkedList.length > 0) {
    reversedStr += linkedList.head;
    linkedList.removeBegin();
  }
  return reverseString;
}

module.exports = reverseString;
