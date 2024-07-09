class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let temp = this.root;
    while (true) {
      if (temp.value === newNode.value) return undefined;
      if (newNode.value < temp.value) {
        if (temp.left === null) {
          temp.left = newNode;
          return this;
        }
        temp = temp.left;
      } else {
        if (temp.right === null) {
          temp.right = newNode;
          return this;
        }
        temp = temp.right;
      }
    }
  }

  contains(value) {
    if (this.root === null) return false;
    let temp = this.root;
    while (temp) {
      if (value < temp.value) {
        temp = temp.left;
      } else if (value > temp.value) {
        temp = temp.right;
      } else {
        return true;
      }
    }
    return false;
  }

  BFS() {
    let currentNode = this.root;
    let queue = [];
    let results = [];
    queue.push(currentNode);
    while (queue.length) {
      currentNode = queue.shift();
      results.push(currentNode.value);
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }
    return results;
  }

  DFSPreOrder() {
    let results = [];
    function traverse(currentNode) {
      results.push(currentNode.value);
      if (currentNode.left) traverse(currentNode.left);
      if (currentNode.right) traverse(currentNode.right);
    }
    traverse(this.root);
    return results;
  }

  DFSPostOrder() {
    let results = [];
    function traverse(currentNode) {
      if (currentNode.left) traverse(currentNode.left);
      if (currentNode.right) traverse(currentNode.right);
      results.push(currentNode.value);
    }
    traverse(this.root);
    return results;
  }

  DFSInOrder() {
    let results = [];
    function traverse(currentNode) {
      if (currentNode.left) traverse(currentNode.left);
      results.push(currentNode.value);
      if (currentNode.right) traverse(currentNode.right);
    }
    traverse(this.root);
    return results;
  }
}

let myBST = new BST();

myBST.insert(47);
myBST.insert(21);
myBST.insert(76);
myBST.insert(18);
myBST.insert(27);
myBST.insert(52);
myBST.insert(82);

console.log("BST Contains 27:");
console.log(myBST.contains(27));

console.log("\nBST Contains 17:");
console.log(myBST.contains(17));

// console.log(JSON.stringify(myBST, null, 2));
console.log("BFS algo");
console.log(myBST.BFS());
console.log("DFS Preorder algo");
console.log(myBST.DFSPreOrder());
console.log("DFS Postorder algo");
console.log(myBST.DFSPostOrder());
console.log("DFS Inorder algo");
console.log(myBST.DFSInOrder());
