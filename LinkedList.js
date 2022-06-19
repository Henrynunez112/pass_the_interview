const Node = require('./Node');
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
    constructor(){
        this.head = null
    }
    addToHead(data){
        const newHead = new Node(data)
        const currentHead = this.head
        this.head = newHead
        if(currentHead){
            this.head.setNextNode(currentHead)
        }
    }
    addToTail(data){
        let tail = this.head
        if(!tail){
            this.head = new Node(data)
        }else{
            while(tail.getNextNode() !== null){
                tail = tail.getNextNode()
            }
            tail.setNextNode(new Node(data))
        }
    }
}

module.export = LinkedList;