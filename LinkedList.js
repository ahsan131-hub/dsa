class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertNode(val, idx) {
    const newNode = new ListNode(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }

    let itr = 0;
    let cur = this.head;
    while (cur) {
      if (itr == idx - 1) break;
      cur = cur.next;
      itr++;
    }

    // 1 2 4
    newNode.next = cur.next;
    cur.next = newNode;
    cur = newNode;

    if (!cur.next) {
      this.tail = newNode;
    }
  }

  print() {
    let cur = this.head;
    while (cur) {
      console.log(`-> ${cur.val}`);
      cur = cur.next;
    }
  }
}

const linkedList = new LinkedList();
linkedList.insertNode("1", 0);
linkedList.insertNode("2", 1);
linkedList.insertNode("4", 2);
linkedList.insertNode("3", 2);

linkedList.print();
