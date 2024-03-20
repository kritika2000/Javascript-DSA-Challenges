const DoublyLinkedList = require('../doubly-linked-list-implementation/linked-list');

function findPairSum(nums, target) {
  nums.sort((a, b) => a - b);
  const list = new DoublyLinkedList();
  nums.forEach((element) => {
    list.insertEnd(element);
  });
  list.printList();
  let currBegin = list.head;
  let currEnd = list.tail;
  while (currBegin !== currEnd) {
    const sum = currBegin.data + currEnd.data;
    console.log(sum);
    if (sum === target) return [currBegin.data, currEnd.data];
    if (sum < target) currBegin = currBegin.next;
    else currEnd = currEnd.prev;
  }
  return null;
}

const nums = [2, 6, 3, 8, 10, 5];
const targetSum = 12;
const pair = findPairSum(nums, targetSum);
console.log(pair);

module.exports = findPairSum;
