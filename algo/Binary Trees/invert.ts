class BinaryTree {
    value: number;
    left: BinaryTree | null;
    right: BinaryTree | null;
  
    constructor(value: number) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  export function invertBinaryTree(tree: BinaryTree | null): BinaryTree | null {
    if (!tree) return null;
    [tree.left, tree.right] = [invertBinaryTree(tree.right), invertBinaryTree(tree.left)];
    return tree;
  }