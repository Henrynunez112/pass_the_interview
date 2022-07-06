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
}

