export class BST {
    value: number;
    left: BST | null;
    right: BST | null;
  
    constructor(value: number) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  export function findKthLargestValueInBst(tree: BST, k: number) {
    const sortedValues: number[] = []
    orderTraverse(tree, sortedValues)
    return sortedValues[sortedValues.length - k]
  }
  
  function orderTraverse(node: BST | null, sortedValues: number[]) {
    if (!node) return
  
    orderTraverse(node.left, sortedValues)
    sortedValues.push(node.value)
    orderTraverse(node.right, sortedValues)
  }
  