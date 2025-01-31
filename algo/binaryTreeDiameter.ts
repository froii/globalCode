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
   
   function binaryTreeDiameter(tree: BinaryTree | null): number {
    let maxDiameter = 0;
   
    const getLength = (node: BinaryTree | null): number => {
      if (!node) return 0;
      
      const leftLength = getLength(node.left);
      const rightLength = getLength(node.right);
      maxDiameter = Math.max(maxDiameter, leftLength + rightLength);
      
      return 1 + Math.max(leftLength, rightLength);
    }
   
    getLength(tree);
    return maxDiameter;
   }
   
   export { binaryTreeDiameter, BinaryTree };