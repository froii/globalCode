// Ця функція перевіряє чи є бінарне дерево збалансованим по висоті.
//  Дерево вважається збалансованим, якщо для кожного вузла різниця висот лівого і правого піддерев не перевищує 1.

// Рекурсивно обчислює висоту для кожного піддерева
// Порівнює різницю висот лівого і правого піддерев
// Якщо різниця > 1, позначає дерево як незбалансоване
// Повертає true якщо дерево збалансоване, false якщо ні

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
  
  interface Balance {
    isBalanced: boolean;
  }
  
  export function heightBalancedBinaryTree(tree: BinaryTree | null): boolean {
    const calcHeight = (tree: BinaryTree | null, height: number, balance: Balance): number => {
      if (balance.isBalanced === false) return 0;
      if (tree === null) return height;
  
      const leftHeight = calcHeight(tree.left, height + 1, balance);
      const rightHeight = calcHeight(tree.right, height + 1, balance);
  
      if (Math.abs(leftHeight - rightHeight) > 1) {
        balance.isBalanced = false;
        return 0;
      }
  
      return Math.max(leftHeight, rightHeight);
    };
  
    const balance: Balance = { isBalanced: true };
    calcHeight(tree, 0, balance);
    return balance.isBalanced;
  }