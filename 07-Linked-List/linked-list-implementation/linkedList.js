/*class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  insertEnd(val) {
    const node = new Node(val);
    if (this.head === null) this.head = node;
    else this.tail.next = node;
    this.tail = node;
    this.length++;
  }
  insertBegin(val) {
    const node = new Node(val);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
      this.length++;
      return;
    }
    node.next = this.head;
    this.head = node;
    this.length++;
  }
  removeBegin() {
    if (this.head === null) return;
    this.length--;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      return;
    }
    this.head = this.head.next;
  }
  removeEnd() {
    if (this.length === 0) return;
    this.length--;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      return;
    }
    let prev = null;
    let temp = this.head;
    while (temp.next) {
      prev = temp;
      temp = temp.next;
    }
    prev.next = null;
    this.tail = prev;
  }
  insertAtPosition(pos, val) {
    if (pos <= 1) {
      this.insertBegin(val);
      return;
    }
    if (pos >= this.length + 1) {
      this.insertEnd(val);
      return;
    }
    this.length++;
    let temp = this.head;
    let prev = null;
    for (let i = 1; i < pos; i++) {
      prev = temp;
      temp = temp.next;
    }
    const node = new Node(val);
    prev.next = node;
    node.next = temp;
  }
  size() {
    return this.length;
  }
  printList() {
    let temp = this.head;
    while (temp) {
      console.log(temp.data);
      temp = temp.next;
    }
    console.log('---------------------');
  }
}
*/

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  insertEnd(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
    } else {
      this.tail.next = node;
    }
    this.tail = node;
  }
  insertAt(pos, val) {
    if (pos === 1) {
      this.insertEnd(val);
      return;
    }
    const node = new Node(val);
    let temp = this.head,
      prev = null;
    let i = 1;
    while (i < pos && temp) {
      i++;
      prev = temp;
      temp = temp.next;
    }
    prev.next = node;
    node.next = temp;
  }
  removeBegin() {
    if (!this.head) return;
    this.head = this.head.next;
  }
  removeEnd() {
    if (!this.head) return;
    let prev = null,
      temp = this.head;
    while (temp.next) {
      prev = temp;
      temp = temp.next;
    }
    prev.next = null;
    this.tail = prev;
  }
  removeFrom(pos, val) {
    if (!this.head) return;
    if (pos === 1) {
      this.removeBegin();
      return;
    }
    let prev = null,
      temp = this.head;
    let i = 1;
    while (i < pos && temp) {
      prev = temp;
      temp = temp.next;
      i++;
    }
    prev.next = temp?.next;
  }
  printList() {
    let temp = this.head;
    while (temp) {
      console.log(temp.data);
      temp = temp.next;
    }
  }
}

const list = new LinkedList();
list.insertEnd(1);
list.insertEnd(2);
list.insertEnd(3);
list.insertAt(2, 5);
list.insertEnd(6);
// list.printList();
list.removeBegin();
list.removeEnd();
list.removeFrom(5);
list.printList();

module.exports = LinkedList;
