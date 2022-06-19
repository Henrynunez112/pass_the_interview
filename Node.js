/**
 * Nodes Review
 * 
 *  -Contain data, which can be a variety of data types.
 * 
 *  -Contains links to other Nodes. If a node has no links, or they are all null
 *   you have reached the end of the path you were following.
 * 
 *  -Can be orphaned if there are no existing links to them.
 */

class Node {
    constructor(data){
        this.data = data
        this.next = null
    }
    setNextNode(node){
        /* this function is to check if the node argument is an instanceof 
         the Node class. If the argument is a Node or null,
         we then set this.next equal to node. Otherwise, throw an error.*/
        if(node instanceof Node || node === null){
            this.next = node
        }else{
            throw new Error('Next node must be a member of the Node class.')
        }
    }
    getNextNode(){
        /** method returns the correct next node property by logging the call */
        return this.next
    }
}

const firstNode = new Node("Henry");
const secondNode = new Node("Jason");
const thirdNode = new Node("Sulma")
firstNode.setNextNode(secondNode);
secondNode.setNextNode(thirdNode)
console.log(firstNode.getNextNode())


module.export = Node