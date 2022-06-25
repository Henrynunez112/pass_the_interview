class TreeNode {
    constructor(data){
        this.data = data
        this.children = new Array()
    }
    addChild(child){
        if(child instanceof TreeNode){
            this.children.push(child)
        }else{
            this.children.push(new TreeNode(child))
        }
    }
    removeChild(childToRemove){
        const length = this.children.length
        this.children = this.children.filter(child =>{
            if(childToRemove instanceof TreeNode){
                return child !== childToRemove
            }else {
                return child.data !== childToRemove
            }
        })
        if(length === this.children.length){
            this.children.forEach(child => child.removeChild(childToRemove))
        }
    }
    
    print(level = 0){
        let result = ''
        for(let i = 0; i < level; i++){
            result += '-- '
        }
        console.log(`${result}${this.data}`)
        this.children.forEach(child => child.print(level + 1))
    }
    depthFirstTraversal(){
        console.log(this.data)
        this.children.forEach(child => child.depthFirstTraversal())
    }
    breadthFirstTraversal(){
        let queue = [this]
        while(queue.length > 0){
            const current = queue.shift()
            console.log(current.data)
            queue = queue.concat(current.children)
        }
    }

}

// const tree = new TreeNode(1);
// const randomize = () => Math.floor(Math.random() * 20);

// // add first-level children
// for (let i = 0; i < 3; i++) {
//     tree.addChild(randomize());
//   }
  
//   // add second-level children
//   for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 2; j++) {
//       tree.children[i].addChild(randomize());
//     }
//   }
  
//   // add third-level children
//   for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 2; j++) {
//       for (let k = 0; k < 2; k++) {
//         tree.children[i].children[j].addChild(randomize());
//       }
//     }
//   }
  
//   // pretty-print the tree
//   tree.print();
  

module.export = TreeNode