/*
class Stack {
  constructor() {
    this.maxSize = 100;
    this.stack = [];
  }
  push(elem) {
    this.stack.push(elem);
  }
  pop() {
    if (this.isEmpty()) return "Can't perform this operation";
    const top = this.top();
    this.stack.pop();
    return top;
  }
  top() {
    if (this.isEmpty()) return "Can't perform this operation";
    return this.stack[this.stack.length - 1];
  }
  size() {
    return this.stack.length;
  }
  isEmpty() {
    return this.stack.length === 0;
  }
}
*/

class Stack {
  constructor() {
    this.stack = [];
  }
  push(elem) {
    this.stack.push(elem);
  }
  pop() {
    if (this.isEmpty()) return;
    this.stack.pop();
  }
  top() {
    if (this.isEmpty()) return;
    const top = this.stack[this.size() - 1];
    return top;
  }
  size() {
    return this.stack.length;
  }
  isEmpty() {
    return this.stack.length === 0;
  }
}

module.exports = Stack;

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
console.log(stack.top());
stack.pop();
console.log(stack.top());
