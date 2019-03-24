class Node {
	constructor(data, priority) {
		this.data=data;
		this.priority=priority;
		this.parent=null;
		this.left=null;
		this.right=null;
	}

	appendChild(node) {
		
		if(!this.left){
			this.left=node;
		}
		else if(!this.right){
			this.right=node;
		}
		node.parent=this;
	}

	removeChild(node) {
		if(this.left===node){
			this.left=null;
		}
		else if(this.right===node){
			this.right=null;
		}
		else {
			throw Error('Not a child');
		}
		
		node.parent = null;
	}

	remove() {
		if (this.parent) 
		this.parent.removeChild(this);
	}

	swapWithParent() {
		
	}
}

module.exports = Node;
