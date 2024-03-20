const Queue = require('../queue-implementation/queue');
function reverseQueue(queue) {
  if (queue.isEmpty()) {
    return;
  }
  const front = queue.front();
  queue.pop();
  reverseQueue(queue);
  queue.push(front);
  return queue;
}
function reverseString(str) {
  let queue = new Queue();
  let res = '';
  for (let letter of str) {
    queue.push(letter);
  }
  queue = reverseQueue(queue);
  while (!queue.isEmpty()) {
    res += queue.front();
    queue.pop();
  }
  return res;
}

module.exports = reverseString;
