class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    let newNode = new Node(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }

  printList() {
    let temp = this.head;
    while (temp !== null) {
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
    let newNode = new Node(value); //creating a new Node
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode; //the last Node will point to the new Node
      this.tail = newNode; //tail will poin to the new Node
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) return undefined;

    let temp = this.head;
    let pre = this.head;
    // when the while loop completes
    while (temp.next) {
      pre = temp; //pre will point to the second last node
      temp = temp.next; //temp will point to the last node
    }

    this.tail = pre;
    this.tail.next = null;
    this.length--;
    // when there is only one Node left in the list
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return temp;
  }

  unshift(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  shift() {
    if (this.length === 0) return undefined;

    let temp = this.head;
    this.head = this.head.next; //this will point the head to the next Node in the list
    this.length--;
    //when there is only one Node left in the list
    if (this.length === 0) {
      this.tail = null;
    }
    return temp;
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
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
    if (index === this.length) return this.push(value);
    if (index === 0) return this.unshift(value);

    let newNode = new Node(value);
    let temp = this.get(index - 1); //getting the Node just before the desired index
    newNode.next = temp.next;
    temp.next = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    let before = this.get(index - 1); //getting the Node just before the desired index
    let temp = before.next; //the desired Node
    before.next = temp.next;
    temp.next = null;
    this.length--;
    return temp;
  }

  reverse() {
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    //head and tails are reversed

    let next = temp;
    let pre = null;
    // initially temp, next and tail are pointing to the starting node

    for (let i = 0; i < this.length; i++) {
      next = temp.next; //next is now moved to the next Node in the list
      temp.next = pre; //temp.next is now pointing to pre
      pre = temp; //pre now points to what temp is pointing to
      temp = next; //temp and next are now pointing at the same node
    }
  }
}

let myLinkedList = new LinkedList(10);
myLinkedList.printList();
myLinkedList.push(11);
myLinkedList.push(12);
myLinkedList.push(13);
myLinkedList.push(14);
myLinkedList.push(15);
console.log(
  "****************after pushing 5 nodes in the list****************"
);
myLinkedList.printList();

myLinkedList.pop();
console.log("****************after popping node from the list****************");
myLinkedList.printList();

myLinkedList.unshift(9);
console.log(
  "****************after unshifting node in the list****************"
);
myLinkedList.printList();

myLinkedList.shift();
console.log("****************after shifting node in the list****************");
myLinkedList.printList();

console.log(
  "****************getting a node in the list at index 0 ****************"
);
console.log(myLinkedList.get(0));

console.log(
  "****************setting the node at index 3 to 99 ****************"
);
myLinkedList.set(3, 99);
myLinkedList.printList();

console.log(
  "****************inserting new node at index 4 with 100 ****************"
);
myLinkedList.insert(4, 100);
myLinkedList.printList();

console.log("****************removing node at index 4  ****************");
myLinkedList.remove(4);
myLinkedList.printList();

console.log("****************reversing the list  ****************");
myLinkedList.reverse();
myLinkedList.printList();

myLinkedList.getHead();
myLinkedList.getTail();
myLinkedList.getLength();
