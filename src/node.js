class Node {
	constructor(data, priority) {
		this.parent = null;
		this.left = null;
		this.right = null;
		this.data = data;
		this.priority = priority;
	
	}

	appendChild(node) {

		if(this.left == null){
			this.left = node;
		}
		else if(this.right == null){
			this.right = node
		}
		// if(this.right == null){
		// 	this.right = node;
		// }
		 node.parent = this;
		
	}

	removeChild(node) {

		if(this.left !== node && this.right!==node){
			throw Error();
		}
		if(this.left == node){
			this.left = null;
		}
		if(this.right == node){
			this.right = null;
		}
		node.parent = null;	
		
	}

	remove() {
		if(this.parent !== null){
			this.parent.removeChild(this);
		}
		
		
	}

	swapWithParent() {
		
		if(this.parent !== null){

			if(this.parent.right == null){
			if(this.left == null){
			let parentNode= this.parent.parent;
			this.parent.parent = this;
			this.parent = parentNode;	
			}			
			} else {				
				
				if(this.left!= null){
					if(this.parent.right.left == null){
						let parentLeft = this.parent;
						this.right = this.parent.right;
						this.parent.left = this.left;		   
						this.left = parentLeft;
					}
								
				}
				else{
					this.parent.left.parent = this;
				}
			}		
		
		}
		
	}
}

module.exports = Node;