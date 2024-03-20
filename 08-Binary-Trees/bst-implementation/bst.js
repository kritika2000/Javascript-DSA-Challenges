class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  insert(values) {
    if (values.length <= 0) return null;
    let mid = Math.ceil((values.length - 1) / 2);
    const root = new TreeNode(values[mid]);
    if (!this.root) this.root = root;
    root.left = this.insert(values.slice(0, mid));
    root.right = this.insert(values.slice(mid + 1));
    return root;
  }
  inorderTraversal(root) {
    if (!root) return;
    this.inorderTraversal(root.left);
    console.log(root.data);
    this.inorderTraversal(root.right);
  }
  _areAllSmall(root, val) {
    if (!root) return true;
    if (root.data > val) return false;
    return (
      this._areAllSmall(root.left, val) && this._areAllSmall(root.right, val)
    );
  }
  _areAllLarge(root, val) {
    if (!root) return true;
    if (root.data < val) return false;
    return (
      this._areAllLarge(root.left, val) && this._areAllLarge(root.right, val)
    );
  }
  validateBST(root) {
    if (!root) return true;
    return (
      this._areAllSmall(root.left, root.data) &&
      this._areAllLarge(root.right, root.data)
    );
  }
  insertNodeInBST(root, val) {
    const node = new TreeNode(val);
    if (!root) {
      this.root = node;
      return node;
    }
    if (!root.left && root.data > val) {
      root.left = node;
      return root;
    }
    if (!root.right && root.data < val) {
      root.right = node;
      return root;
    }
    if (root.data > val) root.left = this.insertNodeInBST(root.left, val);
    else root.right = this.insertNodeInBST(root.right, val);
    return root;
  }
}

const bst = new BST();
bst.insert([1, 2, 5, 7, 8, 9]);
// bst.inorderTraversal(bst.root);
const isValid = bst.validateBST(bst.root);
// console.log(isValid);
const root = bst.insertNodeInBST(bst.root, 3);
bst.inorderTraversal(root);
