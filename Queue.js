class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  enqueue(val) {
    const newNode = new ListNode(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }

    this.tail.next = newNode;
    this.tail = newNode;
  }

  dequeue() {
    const dequeuedNode = this.head;
    this.head = this.head?.next;
    if (!this.head) {
      this.tail = null;
    }

    return dequeuedNode?.val;
  }

  print() {
    let cur = this.head;
    while (cur) {
      console.log(`-> ${cur.val}`);
      cur = cur.next;
    }
  }
}

const queue = new Queue();
queue.enqueue("1");
queue.enqueue("2");
queue.enqueue("4");
queue.enqueue("3");

console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
