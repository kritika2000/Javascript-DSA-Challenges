// class Node {
//   constructor(data) {
//     this.data = data;
//     this.prev = null;
//     this.next = null;
//   }
// }

// class DoublyLinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.length = 0;
//   }
//   insertEnd(val) {
//     const node = new Node(val);
//     if (this.head === null) this.head = node;
//     else {
//       node.prev = this.tail;
//       this.tail.next = node;
//     }
//     this.tail = node;
//     this.length++;
//   }
//   insertBegin(val) {
//     const node = new Node(val);
//     if (this.head === null) {
//       this.head = node;
//       this.tail = node;
//       this.length++;
//       return;
//     }
//     node.next = this.head;
//     this.head.prev = node;
//     this.head = node;
//     this.length++;
//   }
//   removeBegin() {
//     if (this.head === null) return;
//     this.length--;
//     if (this.length === 1) {
//       this.head = null;
//       this.tail = null;
//       return;
//     }
//     this.head.next.prev = null;
//     this.head = this.head.next;
//   }
//   removeEnd() {
//     if (this.length === 0) return;
//     this.length--;
//     if (this.length === 1) {
//       this.head = null;
//       this.tail = null;
//       return;
//     }
//     let prev = null;
//     let temp = this.head;
//     while (temp.next) {
//       prev = temp;
//       temp = temp.next;
//     }
//     prev.next = null;
//     temp.prev = null;
//     this.tail = prev;
//   }
//   insertAtPosition(pos, val) {
//     if (pos <= 1) {
//       this.insertBegin(val);
//       return;
//     }
//     if (pos >= this.length + 1) {
//       this.insertEnd(val);
//       return;
//     }
//     this.length++;
//     let temp = this.head;
//     let prev = null;
//     for (let i = 1; i < pos; i++) {
//       prev = temp;
//       temp = temp.next;
//     }
//     const node = new Node(val);
//     node.prev = prev;
//     prev.next = node;
//     node.next = temp;
//     temp.prev = node;
//   }
//   size() {
//     return this.length;
//   }
//   printList() {
//     let temp = this.head;
//     while (temp) {
//       console.log(temp.data);
//       temp = temp.next;
//     }
//     console.log('---------------------');
//   }
//   printListReverse() {
//     let temp = this.tail;
//     while (temp) {
//       console.log(temp.data);
//       temp = temp.prev;
//     }
//     console.log('---------------------');
//   }
// }

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  insertBegin(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
      return;
    }
    node.next = this.head;
    this.head.prev = node;
    this.head = node;
  }
  insertEnd(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
      return;
    }
    let temp = this.head;
    while (temp.next) {
      temp = temp.next;
    }
    temp.next = node;
    node.prev = temp;
    this.tail = node;
  }
  insertAtPosition(pos, val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
      return;
    }
    if (pos === 1) {
      this.insertBegin(val);
      return;
    }
    if (pos >= this.size()) {
      this.insertEnd(val);
      return;
    }
    let i = 1,
      temp = this.head;
    while (i < pos) {
      temp = temp.next;
    }
    temp.prev.next = node;
    node.prev = temp.prev;
    node.next = temp;
    temp.prev = node;
  }
  removeBegin() {
    if (!this.head) return;
    this.head = this.head.next;
    this.head.next.prev = null;
  }
  removeEnd() {
    if (!this.head) return;
    let temp = this.head;
    while (temp.next) {
      temp = temp.next;
    }
    temp.prev.next = null;
    temp.next = null;
  }
  removeFromPosition(pos) {
    if (!this.head) {
      return;
    }
    if (pos === 1) {
      this.removeBegin();
      return;
    }
    if (pos === this.size()) {
      this.removeEnd();
      return;
    }
    let i = 1,
      temp = this.head;
    while (i < pos) {
      temp = temp.next;
    }
    temp.prev.next = temp.next;
    temp.prev = null;
    temp.next = null;
  }
  printList() {
    let temp = this.head;
    while (temp) {
      console.log(temp.data);
      temp = temp.next;
    }
  }
  printListReverse() {
    let temp = this.tail;
    while (temp) {
      console.log(temp.data);
      temp = temp.prev;
    }
  }
  size() {
    let temp = this.head;
    let len = 0;
    while (temp) {
      temp = temp.next;
      len++;
    }
    return len;
  }
}

const list = new DoublyLinkedList();
list.insertEnd(1);
list.insertEnd(2);
list.insertEnd(3);
list.insertEnd(4);
list.insertEnd(5);
list.insertBegin(6);
list.printList();
list.printListReverse();
list.removeBegin();
list.removeEnd();
list.insertAtPosition(5, 10);
list.printList();
list.printListReverse();

module.exports = DoublyLinkedList;
