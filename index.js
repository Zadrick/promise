const Queue = require('./data-structures/queue');

class MyPromise {
  #queue = new Queue();

  constructor(cb) {
      cb(this.#onResolve.bind(this));
  }

  #onResolve(data) {
      this.#iterate(data);
  }

  #iterate(data) {
      const cb = () => {
          if (this.#queue.length === 0) return;

          const result = this.#queue.shift()(data);

          if (result instanceof MyPromise) {
              while (this.#queue.length !== 0) result.then(this.#queue.shift());
          } else {
              this.#iterate(result);
          }
      };

      queueMicrotask(cb);
  }

  then(cb) {
      this.#queue.push(cb);
      return this;
  }
}

module.exports = MyPromise;
