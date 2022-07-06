import LinkedList from "./LinkedList";
/**
 * A stack is a data structure which contains an ordered set of data.

Stacks provide three methods for interaction:

Push - adds data to the “top” of the stack
Pop - returns and removes data from the “top” of the stack
Peek - returns data from the “top” of the stack without removing it

 */
class Stack {
  constructor(maxSize = Infinity) {
    this.stack = new LinkedList();
    this.maxSize = maxSize;
    this.size = 0;
  }
  hasRoom() {
    return this.size < this.maxSize;
  }
  isEmpty() {
    return this.size === 0;
  }
  peak() {
    if (!this.isEmpty()) {
      if (this.size > 0) return this.stack.head;
    } else {
      return null;
    }
  }
  push(value) {
    if (this.hasRoom()) {
      this.stack.addToHead(value);
      this.size++;
    } else {
      throw new Error("Stack is full");
    }
  }
  pop() {
    if (!this.isEmpty()) {
      const value = this.stack.removeHead();
      this.size++;
      return value;
    } else {
      throw new Error("Stack is empty");
    }
  }
}

module.export = Stack;


