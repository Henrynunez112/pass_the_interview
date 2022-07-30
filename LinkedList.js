const Node = require("./Node");
/**
 * Linked List
 * -Are compromised of Nodes
 *
 * -The nodes contain a link to the next node
 * (and also the previous node for bidirectional linked lists)
 *
 * -Can be unidirectional or bidirectional
 *
 * - Are a basic data structure and form the basis for many
 * other data structure.
 *
 * -Have a single head node, which serves as the first node
 * in the list
 *
 * -Require some maintenance in order to add or remove nodes
 *
 */

class LinkedList {
  constructor() {
    this.head = null;
  }
  addToHead(data) {
    const newHead = new Node(data);
    const currentHead = this.head;
    this.head = newHead;
    if (currentHead) {
      this.head.setNextNode(currentHead);
    }
  }
  addToTail(data) {
    let tail = this.head;
    if (!tail) {
      this.head = new Node(data);
    } else {
      while (tail.getNextNode() !== null) {
        tail = tail.getNextNode();
      }
      tail.setNextNode(new Node(data));
    }
  }
  removeHead() {
    const removedHead = this.head;
    if (!removedHead) {
      return;
    }
    this.head = removedHead.getNextNode();
    if (this.head) {
      this.head.getPreviousNode(null);
    }
    if (removedHead === this.tail) {
      this.removeTail();
    }
    return removedHead.data;
  }
  removeTail() {
    const removedTail = this.tail;
    if (!removeTail) {
      return;
    }
    this.tail = removedTail.getPreviousNode();
    if (this.tail) {
      this.tail.setNextNode(null);
    }
    if (removedTail === this.head) {
      this.removeHead();
    }
    return removedTail.data;
  }
  findNodeRecursively(data, currentNode = this.head) {
    if (currentNode === null) {
      return null;
    } else if (currentNode.data === data) {
      return currentNode;
    } else {
      return this.findNodeRecursively(data, currentNode.next);
    }
  }
  printList() {
    let currentNode = this.head;
    let output = "<Head> ";
    while (currentNode !== null) {
      output += currentNode.data + " ";
      currentNode.getNextNode();
    }
    output += "<tail>";
    console.log(output);
  }
}

module.exports = LinkedList;
