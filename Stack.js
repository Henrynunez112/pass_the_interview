import LinkedList from "./LinkedList"

class Stack {
    constructor(){
        this.stack = new LinkedList()
    }
    peak(){
        return this.stack.head
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