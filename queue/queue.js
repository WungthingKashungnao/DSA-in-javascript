class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(value) {
    let newNode = new Node(value);
    this.first = newNode;
    this.last = newNode;
    this.length = 1;
  }

  printQueue() {
    let temp = this.first;
    while (temp.next) {
      console.log(temp);
      temp = temp.next;
    }
  }

  getFirst() {
    if (this.first === null) {
      console.log(`First:  null`);
    } else {
      console.log(`First: ${this.first.value}`);
    }
  }

  getLast() {
    if (this.last === null) {
      console.log(`Last: null`);
    } else {
      console.log(`Last: ${this.last.value}`);
    }
  }

  getLength() {
    console.log(`Length: ${this.length}`);
  }

  enqueue(value) {
    let newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }

  dequeue() {
    if (this.length === 0) return undefined;
    let temp = this.first;
    if (this.length === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
      temp.next = null;
    }
    this.length--;
    return temp;
  }
}

let myQueue = new Queue(1);
console.log(`********* enqueueing two numbers *********`);
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.printQueue();
console.log(`********* denqueueing a number *********`);
myQueue.dequeue();
myQueue.printQueue();

myQueue.getFirst();
myQueue.getLast();
myQueue.getLength();
