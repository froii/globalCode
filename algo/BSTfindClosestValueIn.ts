// time O(logn) spice O(1)
// easy search ...in node tree (try to find minimal data

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

export function BSTfindClosestValueIn(tree: BST, target: number) {
    let treeNode: BST | null = tree
    let closestRange: number = Infinity
    let closest

    while (treeNode !== null) {
        const curClosest = Math.abs(treeNode.value - target)

        if(curClosest <= closestRange) {
            closestRange = curClosest
            closest = treeNode.value
        }

        if(closestRange === 0) break

        if(target < treeNode.value) treeNode = treeNode.left
        else treeNode = treeNode.right
    }

    return closest
}
