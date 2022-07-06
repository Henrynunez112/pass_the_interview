//node based implementation
class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Stack {
    constructor(){
        this.head = null
        this.size = 0
    }

    push(val){
        const newNode = new Node(val)
        newNode.next = this.head
        this.head = newNode
        this.size++
    }
    pop(){
        if(this.head === null) return null
        const temp = this.head
        this.head = this.head.next
        temp.next = null
        this.size--
        return temp.value
    }
    peek(){
        return this.head.value
    }
    isEmpty(){
        return this.size === 0
    }
    getSize(){
        return this.size
    }
}
exports.module = Node


const newStack = new Stack()

newStack.push(1)
newStack.push(2)
newStack.push(3)
newStack.push(4)
console.log(newStack.getSize(), 'this is the size of newStack')
console.log(newStack.pop(), "removed Node")
console.log(newStack.pop(), 'removed node')
console.log(newStack.peek(), 'this is the head')
console.log(newStack.getSize(), 'this is the size of newStack once the two stacks are removed')
console.log(newStack)

