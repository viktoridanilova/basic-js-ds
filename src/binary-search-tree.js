const { NotImplementedError } = require('../extensions/index.js');

 const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode ? this.rootNode : null;
  }

  add(data) {
    this.rootNode = addWithin(this.rootNode, data);
    
    function addWithin(node, data) {
      if (!node) {
        return new Node(data);
      }
      if (node.data === data) {
        return node;
      }
      if (data < node.data) {
        node.left = addWithin(node.left, data);
      } else {
        node.right = addWithin(node.right, data);
      }
      return node;
    }
  }

  has(data) {
    return Boolean(this.find(data));
  }

  find(data) {
		  return this.findNode(this.rootNode, data);
  }

  findNode(node, data) {
    if(node === null) {
      return null;
    }
    if(node.data === data){
      return node;
    }
    if(node.data > data) {
      return this.findNode(node.left, data);
    } else {
      return this.findNode(node.right, data);
    }
  }

  remove(data) {
    this.rootNode = this.removeNode(this.rootNode, data);
  }

  min() {
    if (this.rootNode === null) return;
		let node = this.rootNode;
		while (node.left) {
			node = node.left;
		}
		return node.data;
  }

  max() {
    if (this.rootNode === null) return;
		let node = this.rootNode;
		while (node.right) {
			node = node.right;
		}
		return node.data;
  }
  
  removeNode(node, data) {
    if (node === null) return null;

    if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node; 
    } else if (data > node.data) {
      node.right = this.removeNode(node.right, data);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        return null;
      }
      if (node.left === null) {
        node = node.right;
        return node;
      }
      if (node.right === null) {
        node = node.left;
        return node;
      }

      let minNode = node.left;
      while (minNode.right) {
        minNode = minNode.right;
      }
      node.data = minNode.data;
      node.left = this.removeNode(node.left, minNode.data);
      return node;

    }
  }

  findMinNode(node)
  {
    if(node.left === null)
        return node;
    else
        return this.findMinNode(node.left);
  }
}

module.exports = {
  BinarySearchTree
};