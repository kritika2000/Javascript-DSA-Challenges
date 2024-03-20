const Node = require('../tree-implementation/trees');

function maxDepth(root) {
  if (!root) return 0;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}

module.exports = { Node, maxDepth };
