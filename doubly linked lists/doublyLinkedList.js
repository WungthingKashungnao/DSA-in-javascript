class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    let newNode = new Node(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }

  printList() {
    let temp = this.head;
    while (temp) {
      console.log(temp);
      temp = temp.next;
    }
  }

  getHead() {
    if (this.head === null) {
      console.log("Head: null");
    } else {
      console.log(`Head: ${this.head.value}`);
    }
  }

  getTail() {
    if (this.tail === null) {
      console.log("Tail: null");
    } else {
      console.log(`Tail: ${this.tail.value}`);
    }
  }

  getLength() {
    console.log(`Length: ${this.length}`);
  }

  push(value) {
    let newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) return undefined;
    let temp = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      temp.prev = null;
    }
    this.length--;
    return temp;
  }

  unshift(value) {
    let newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  shift() {
    if (this.length === 0) return undefined;
    let temp = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      temp.next = null;
    }
    this.length--;
    return temp;
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    let temp = this.head;
    if (index < this.length / 2) {
      for (let i = 0; i < index; i++) {
        temp = temp.next;
      }
    } else {
      temp = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        temp = temp.prev;
      }
    }
    return temp;
  }

  set(index, value) {
    let temp = this.get(index);
    if (temp) {
      temp.value = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);

    let newNode = new Node(value);
    let before = this.get(index - 1);
    let after = before.next;
    before.next = newNode;
    newNode.next = after;
    newNode.prev = before;
    after.prev = newNode;
    this.length++;
    return this;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    let temp = this.get(index);
    temp.prev.next = temp.next;
    temp.next.prev = temp.prev;
    temp.next = null;
    temp.prev = null;
    this.length--;
    return temp;
  }
}

let myDoublyLinkedList = new DoublyLinkedList(1);
myDoublyLinkedList.printList();

console.log("*********pushing 5 new nodes in the list*********");
myDoublyLinkedList.push(2);
myDoublyLinkedList.push(3);
myDoublyLinkedList.push(4);
myDoublyLinkedList.push(5);
myDoublyLinkedList.push(6);
myDoublyLinkedList.printList();

console.log("*********popping a node from the list*********");
console.log(`Popped Node: `, myDoublyLinkedList.pop());
myDoublyLinkedList.printList();

console.log("*********unshifting a node to the list with value 0*********");
myDoublyLinkedList.unshift(0);
myDoublyLinkedList.printList();

console.log("*********shifting a node from the list*********");
console.log(`Shifted Node: `, myDoublyLinkedList.shift());
myDoublyLinkedList.printList();

console.log("*********getting a node from the list at index 4*********");
console.log(`Retrieved Node: `, myDoublyLinkedList.get(4));
myDoublyLinkedList.printList();

console.log("*********setting the node at index 4 with value of 99*********");
myDoublyLinkedList.set(4, 99);
myDoublyLinkedList.printList();

console.log(
  "*********inserting a new node at index 5 with value of 5*********"
);
myDoublyLinkedList.insert(5, 5);
myDoublyLinkedList.printList();

console.log("*********removing node at index 3 *********");
myDoublyLinkedList.remove(3);
myDoublyLinkedList.printList();

myDoublyLinkedList.getHead();
myDoublyLinkedList.getTail();
myDoublyLinkedList.getLength();
