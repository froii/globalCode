export class BST {
    value: number;
    left: BST | null;
    right: BST | null;

    constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insert(value: number): BST {
        let currNode: BST = this;

        while (true) {
            if (value < currNode.value) {
                if (currNode.left === null) {
                    currNode.left = new BST(value);
                    break;
                }
                currNode = currNode.left;
            } else {
                if (currNode.right === null) {
                    currNode.right = new BST(value);
                    break;
                }
                currNode = currNode.right;
            }
        }

        return this;
    }

    contains(value: number) {
        let currNode: BST | null = this
        while (currNode !== null) {
            if (value < currNode.value) {
                currNode = currNode.left
            } else if (value > currNode.value) {
                currNode = currNode.right
            } else {
                return true
            }
        }
        return false;
    }

    remove(value: number, parentNode: BST | null = null): BST {
        let currentNode: BST | null = this
        while (currentNode !== null) {
            if (value < currentNode.value) {
                [parentNode, currentNode] = [currentNode, currentNode.left]
            } else if (value > currentNode.value) {
                [parentNode, currentNode] = [currentNode, currentNode.right]
            } else {
                if (currentNode.left !== null && currentNode.right !== null) {
                    currentNode.value = currentNode.right.getMinValue()
                    currentNode.right.remove(currentNode.value, currentNode)
                } else if (parentNode === null) {
                    if (currentNode.left !== null) {
                        [currentNode.value, currentNode.right, currentNode.left] = [currentNode.left.value, currentNode.left.right, currentNode.left.left]
                    } else if (currentNode.right !== null) {
                        [currentNode.value, currentNode.left, currentNode.right] = [currentNode.right.value, currentNode.right.left, currentNode.right.right]
                    }
                } else if (parentNode.left === currentNode) {
                    parentNode.left = currentNode.left !== null ? currentNode.left : currentNode.right
                } else if (parentNode.right === currentNode) {
                    parentNode.right = currentNode.left !== null ? currentNode.left : currentNode.right
                }
                break
            }
        }

        return this;
    }

    getMinValue(): number {
        let currentNode: BST = this
        while (currentNode.left !== null) {
            currentNode = currentNode.left
        }
        return currentNode.value
    }
}
