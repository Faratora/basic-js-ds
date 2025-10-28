const { NotImplementedError } = require('../lib/errors');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  #storage = {};
  #size = 0;
  push(value) {

     this.#size += 1;
    this.#storage[this.#size] = value;
  }

  pop() {
    if (this.#size === 0) return undefined;
    const removed = this.#storage[this.#size];
    delete this.#storage[this.#size];
    this.#size -= 1;
    return removed;
  }

  peek() {
    if (this.#size === 0) return undefined;
    return this.#storage[this.#size];
  }
}

module.exports = {
  Stack,
};
