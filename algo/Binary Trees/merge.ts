
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
  
  export function mergeBinaryTrees(tree1: BinaryTree | null , tree2: BinaryTree | null) {
    if (tree1 === null) return tree2
    if (tree2 === null) return tree1
  
    tree1.value += tree2.value
    tree1.left = mergeBinaryTrees(tree1.left, tree2.left)
    tree1.right = mergeBinaryTrees(tree1.right, tree2.right)
      
    return tree1;
  }
  