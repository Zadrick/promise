class LinkedListNode {
  val;
  next;

  constructor(val) {
      this.val = val;
  }
}

class LinkedList {
  head;
  tail;
  
  constructor(val) {
      this.head = new LinkedListNode(val);
      this.tail = this.head;
  }

  push(val) {
      this.tail.next = new LinkedListNode(val);
      this.tail = this.tail.next;
  }
}

module.exports = LinkedList;
