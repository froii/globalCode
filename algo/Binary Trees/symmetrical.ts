// This is an input class. Do not edit.
export class BinaryTree {
    value: number;
    left: BinaryTree | null;
    right: BinaryTree | null;
  
    constructor(value: number) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  export function symmetricalTree(tree: BinaryTree) {  
    return compare(tree.left, tree.right)
  }
  
  function compare(tree1: BinaryTree | null, tree2: BinaryTree | null): boolean {
    if(!tree2 || !tree1) return tree1 === tree2
    if(tree1.value !== tree2.value) return false
    
    return compare(tree1.left, tree2.right) && compare(tree1.right, tree2.left);
  }