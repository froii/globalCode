// create BST O(n)


export function minHeightBst(array: number[]) {
    return runMinHeightBST(array, 0, array.length - 1)
  }
  
  function runMinHeightBST(array: number[], startI: number, endI: number) {
    if (endI < startI) return null
    
    const midI = Math.floor((startI + endI) / 2)
    const bst = new BST(array[midI])
    bst.left = runMinHeightBST(array, startI, midI - 1)
    bst.right = runMinHeightBST(array, midI + 1, endI)
    return bst
  }
  
  export class BST {
    value: number;
    left: BST | null;
    right: BST | null;
  
    constructor(value: number) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  
    insert(value: number) {
      if (value < this.value) {
        if (this.left === null) {
          this.left = new BST(value);
        } else {
          this.left.insert(value);
        }
      } else {
        if (this.right === null) {
          this.right = new BST(value);
        } else {
          this.right.insert(value);
        }
      }
    }
  }
  

  // second version
export class BST2 {
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
