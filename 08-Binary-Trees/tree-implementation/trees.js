const Stack = require('../../06-Stacks-And-Queues/stack-implementation/stack');
const Queue = require('../../06-Stacks-And-Queues/queue-implementation/queue');

/*
class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }
  insert(values, i = 0) {
    if (i >= values.length) {
      return null;
    }
    const root = new TreeNode(values[i]);
    if (!this.root) this.root = root;
    root.left = this.insert(values, 2 * i + 1);
    root.right = this.insert(values, 2 * i + 2);
    return root;
  }
  preOrderTraversal(root) {
    if (!root) return;
    // console.log(root.data);
    // this.preOrderTraversal(root.left);
    // this.preOrderTraversal(root.right);

    //Using Stacks
    const stack = new Stack();
    stack.push(root);

    while (!stack.isEmpty()) {
      const curr = stack.top();
      stack.pop();
      console.log(curr.data);
      curr.right && stack.push(curr.right);
      curr.left && stack.push(curr.left);
    }
  }
  levelOrderTraversal(root) {
    if (!root) return;

    // Using Queues
    const queue = new Queue();
    queue.push(root);

    while (!queue.isEmpty()) {
      const curr = queue.front();
      queue.pop();
      console.log(curr.data);
      curr.left && queue.push(curr.left);
      curr.right && queue.push(curr.right);
    }
  }
  postOrderTraversal(root) {
    const map = new Map();
    const stack = new Stack();
    stack.push(root);
    while (!stack.isEmpty()) {
      const curr = stack.top();
      if ((!curr.left && !curr.right) || map.has(curr)) {
        console.log(curr.data);
        stack.pop();
        continue;
      }
      curr.left && stack.push(curr.left);
      curr.right && stack.push(curr.right);
      map.set(curr, -1);
    }
  }
}
*/

class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {}
}

const tree = new Tree();
console.log(tree.root);
tree.insert([1, 2, 3, 4, 5, 6, 7, 8]);
console.log('Pre Order Traversal');
tree.preOrderTraversal(tree.root);
console.log('Level Order Traversal');
tree.levelOrderTraversal(tree.root);
console.log('Post Order Traversal');
tree.postOrderTraversal(tree.root);

module.exports = TreeNode;
