const LinkedList = require('../linked-list-implementation/linkedList');
const findMiddle = require('./find-middle');

describe('findMiddle', () => {
  test('should return the middle node for a linked list with an odd number of nodes', () => {
    const list = new LinkedList();
    list.insertEnd(1);
    list.insertEnd(2);
    list.insertEnd(3);
    list.insertEnd(4);
    list.insertEnd(5);

    const middleNode = findMiddle(list);
    expect(middleNode.data).toBe(3);
  });

  test('should return the second middle node for a linked list with an even number of nodes', () => {
    const list = new LinkedList();
    list.insertEnd(1);
    list.insertEnd(2);
    list.insertEnd(3);
    list.insertEnd(4);
    list.insertEnd(5);
    list.insertEnd(6);

    const middleNode = findMiddle(list);
    expect(middleNode.data).toBe(4);
  });
});
