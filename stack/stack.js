class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(value) {
    let newNode = new Node(value);
    this.top = newNode;
    this.length = 1;
  }

  printStack() {
    let temp = this.top;
    while (temp.next) {
      console.log(temp);
      temp = temp.next;
    }
  }

  getTop() {
    if (this.top === null) {
      console.log(`Top: NULL`);
    } else {
      console.log(`Top: ${this.top.value}`);
    }
  }

  getLength() {
    console.log(`Lenght: ${this.length}`);
  }

  push(value) {
    let newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) return undefined;
    let temp = this.top;
    this.top = this.top.next;
    temp.next = null;
    this.length--;
    return temp;
  }
}

let myStack = new Stack(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);
myStack.push(5);
// myStack.pop();
// myStack.pop();

myStack.getTop();
myStack.getLength();
myStack.printStack();
