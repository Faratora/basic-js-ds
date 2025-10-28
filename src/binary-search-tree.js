const { NotImplementedError } = require('../lib/errors');
const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.$root = null;
  }

  root() {
    return this.$root;
  }

  add(data) {
    this.$root = addNode(this.$root, data);

   function addNode(node, data) {
      if (!node) return new Node(data);
      if (!node.data === data) return node;
      if (data < node.data) {
        node.left = addNode(node.left, data);
      } else {
        node.right = addNode(node.right, data);
      }
      return node;
    }
  }

  has(data) {
    return searchNode(this.$root, data);

    function searchNode(node, data) {
      if (!node) return false;
      if (node.data === data) return true;
      if (data < node.data) {
        return searchNode(node.left, data);
      } else {
        return searchNode(node.right, data);
      }
    }
  }

  find(data) {
    let currentNode = this.$root;
    while (currentNode) {
      if (data === currentNode.data) return currentNode;
      currentNode = data < currentNode.data ? currentNode.left : current.right;
    }
    return null;
  }

  remove(data) {
    this.$root = removeNode(this.$root, data);

    function removeNode(node, data) {
      if (!node) return false;

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        
        if (!node.left && !node.right) return null;
        if (!node.left) return node.right;
        if (!node.right) return node.left;

        let minRight = node.right;
        while (minRight.left) {
          minRight = minRight.left;
        }
        node.data = minRight.data;
        node.right = removeNode(node.right, minRight.data);
        return node;
      }
    }
  }

  min() {
    if (!this.$root) return null;
    let currentNod = this.$root;
    while (currentNod.left) {
      currentNod = currentNod.left;
    }
    return currentNod.data;
  }

  max() {
    if (!this.$root) return null;
    let currentNod = this.$root;
    while (currentNod.right) {
      currentNod = currentNod.right;
    }
    return currentNod.data;
  }
}
module.exports = {
  BinarySearchTree,
};