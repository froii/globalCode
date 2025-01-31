
// O(n)

class BST {
    value: number;
    left: BST | null;
    right: BST | null;
  
    constructor(value: number) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  export function validateBst(tree: BST | null, min: number = -Infinity, max: number = Infinity): boolean {
    if (tree === null) return true
    if (tree.value < min || tree.value >= max) return false
  
    return validateBst(tree.left, min, tree.value) && validateBst(tree.right, tree.value, max)
  }
  