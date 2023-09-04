const LinkedList = require('./linked-list');

class Queue {
  #list;
  length = 0;
  
  shift(element) {
      if (this.length === 0) return undefined;

      const head = this.#list.head;

      this.#list.head = head.next;

      this.length--;

      return head.val;
  }
  
  push(val) {
      if (this.#list === undefined) this.#list = new LinkedList(val);
      else this.#list.push(val);

      this.length++;
  }
}

module.exports = Queue;
