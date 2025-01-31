// nice recursion for searching inside BinaryTree

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

export function nodeDepths(root: BinaryTree | null, depth: number = 0): number {
    if(!root) return 0
    return depth + nodeDepths(root.right, depth + 1) + nodeDepths(root.left, depth + 1)
}

// just small recursion with verification - when we have array we just calculate depth of array and use multi
type SpecialArray = Array<number | SpecialArray>;
export function productSum(array: SpecialArray, multi = 1): number {
    let sum = 0
    for (const el of array) {
        if(Array.isArray(el)) sum += productSum(el, multi + 1)
        else sum += el
    }
    return sum * multi
}
