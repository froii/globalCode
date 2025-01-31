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
  
  
  export function splitBinaryTree(tree: BinaryTree): number {
    let found = false;
    
    const sumTree = (tree: BinaryTree | null, targetSum: number | null = null): number => {
      if (tree === null || found) return 0;
      
      const currentSum = tree.value + sumTree(tree.left, targetSum) + sumTree(tree.right, targetSum);
      
      if (targetSum !== null && currentSum === targetSum) {
        found = true;
      }
      
      return currentSum;
    };
  
    const totalSum = sumTree(tree, null);
    // Check if total sum is even, as we need equal parts
    if (totalSum % 2 !== 0) return 0;
    
    const halfSum = totalSum / 2;
    sumTree(tree, halfSum);
    
    return found ? halfSum : 0;
  }