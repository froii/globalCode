export class BST {
    value: number;
    left: BST | null;
    right: BST | null;
  
    constructor(value: number, left: BST | null = null, right: BST | null = null) {
      this.value = value;
      this.left = left;
      this.right = right;
    }
  
    insert(value: number) {
      if ( value < this.value) {
        if (this.left) this.left.insert(value)
        else this.left = new BST(value)
      } else {
        if (this.right) this.right.insert(value)
        else this.right = new BST(value)
      }
    }
  }
  
  export function reconstructBst(preOrderTraversalValues: number[]): BST | null {
    const root = new BST(preOrderTraversalValues[0])
    for (let i = 1; i < preOrderTraversalValues.length; i++) {
      root.insert(preOrderTraversalValues[i])
    }
    return root;
  }
  