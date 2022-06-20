import LinkedList from "./LinkedList"

/**
 * Queues
 * 
 * -A queue is a data structure which contains an ordered
 * set of data
 * 
 * -Queues provide 3 methods of interactions:
 *      -Enqueue: adds data to the "back" or end of the queue
 *      -Dequeue: provides and removes data from the "front"
 *                of beginning of the queue
 *      -Peek: reveals data from the "front" of the queue
 *             without removing it
 * 
 * Queues are a First In, First Out FIFO Structure
 */

class Queue{
    constructor(maxSize = Infinity){
        this.queue = new LinkedList()
        this.maxSize = maxSize
        this.size = 0
    }
    isEmpty(){
        return this.size === 0
    }
    hasRoom(){
        return this.size < this.maxSize
    }
    enqueue(data){
        if(this.hasRoom()){
            this.queue.addToTail(data);
            this.size++
        }else{
            throw new Error('Queue is full!')
        }
    }
    dequeue(){
        if(!this.isEmpty()){
            this.queue.removeHead()
            this.size--
            return data
        }else{
            throw new Error('Queue is empty!')
        }
    }
}

module.export = Queue