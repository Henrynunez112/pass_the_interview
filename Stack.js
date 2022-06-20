import LinkedList from "./LinkedList"

class Stack {
    constructor(maxSize = Infinity){
        this.stack = new LinkedList()
        this.maxSize = maxSize
        this.size = 0
    }
    peak(){
        if(this.size > 0) return this.stack.head
    }
    push(value){
        this.stack.addToHead(value)
    }
    pop(){
        const value = this.stack.removeHead()
        return value
    }
}

module.export = Stack