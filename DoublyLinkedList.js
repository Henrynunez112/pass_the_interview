const Node = require('./Node');
/**
 * Doubly Linked List
 * 
 * -Just like a singly linked list, a doubly linked
 * list is compromised of a series of nodes.
 * 
 * -Each node contains data and TWO links to the
 * next and previous nodes in the list.
 * 
 * -The head node is the node at the beginning of the list,
 * the tail node is the node at the end of the list.
 * 
 * -The head node's previous pointer is set to NULL
 * 
 * -The tail node's nodes next pointer is set to NULL
 * 
 * Function DoublyLinkedList takes
 * .addToHead(data)
 * .addToTail(data)
 * .removeHead()
 * .removeTail()
 * .removeByData(data)
 * .printList()
 * 
 */

class DoublyLinkedList {
    constructor(){
        this.head = null
        this.tail = null
    }

    addToHead(data){
        const newHead = new Node(data)
        const currentHead = this.head
        if(currentHead){
            currentHead.setPreviousNode(newHead)
            newHead.setNextNode(currentHead)
        }
        this.head = newHead
        if(!this.tail){
            this.tail = newHead
        }
    }

    addToTail(data){
        const newTail = new Node(data)
        const currentTail = this.tail
        if(currentTail){
            currentTail.setToNextNode(newTail)
            newTail.setPreviousNode(currentTail)
        }
        this.tail = newTail
        if(!this.head){
            this.head = newTail
        }
    }
}
