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
}