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
}