export class BinaryTree {
  value: number;
  left: BinaryTree | null;
  right: BinaryTree | null;
  parent: BinaryTree | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

export function findSuccessor(tree: BinaryTree, node: BinaryTree) {
  if(node.right !== null) return getLeft(node.right)
  return getRight(node)
}

function getLeft(node: BinaryTree) {
  while (node.left !== null) {
    node = node.left
  }
  return node
}

function getRight(node: BinaryTree) {
  while (node.parent !== null && node.parent.right === node) {
    node = node.parent
  }
  return node.parent
}


