class Queue {
  constructor() {
    this.queue = [];
  }
  push(elem) {
    this.queue.push(elem);
  }
  pop() {
    if (this.isEmpty()) return "Can't perform this operation";
    const front = this.front();
    this.queue.shift();
    return front;
  }
  front() {
    if (this.isEmpty()) return "Can't perform this operation";
    return this.queue[0];
  }
  isEmpty() {
    return this.queue.length === 0;
  }
}

// const queue = new Queue();
// queue.push(1);
// queue.push(2);
// queue.push(3);
// queue.pop();
// console.log(queue.front());

module.exports = Queue;
