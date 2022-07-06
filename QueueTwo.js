class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Queue {
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }
    enqueue(val){
        //create a new node
        const newNode = new Node(val)
        //if empty update the head and tail
        if(this.isEmpty()){
            this.head = newNode
            this.tail = newNode
        }
        //add new node
        this.tail.next = newNode
        //update the tail
        this.tail = newNode
        //increase size
        this.size++

    }
    dequeue(){
        //return null if empty
        if(this.isEmpty()) return null
        //store current head
        const temp = this.head
        //move head to the node
        this.head = this.head.next
        //point stored node's next to null
        temp.next = null
        //decrement size
        this.size--
        //if empty make tail null
        if(this.isEmpty()) return this.tail = null
        //return store node's value
        return temp.value

    }
    isEmpty(){
        return this.size === 0
    }
}

exports.module = Queue

const newQueue = new Queue()
newQueue.enqueue(1)
newQueue.enqueue(2)
newQueue.enqueue(3)
newQueue.enqueue(4)
newQueue.dequeue()
console.log(newQueue)


