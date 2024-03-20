const LinkedList = require('../linked-list-implementation/linkedList');
function findMiddle(list) {
  let slow = list.head;
  let fast = list.head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next;
    if (!fast) return slow;
    fast = fast.next;
  }
  return slow;
}

const list = new LinkedList();
list.insertEnd(1);
list.insertEnd(2);
list.insertEnd(3);
list.insertEnd(4);
list.insertEnd(5);
list.printList();
const middleNode = findMiddle(list);
console.log(middleNode.data);

module.exports = findMiddle;
