
interface TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
}

// O(n) O(n)
const binarySearch = (node: TreeNode | null): number => {
    let answer = 0

    const checkMaxNode = (node: TreeNode | null) => {
        if (node === null) return 0

        const maxLeft = Math.max(checkMaxNode(node.left),  0)
        const maxRight = Math.max(checkMaxNode(node.right),  0)
        answer = Math.max(answer, maxRight + maxLeft + node.val)
        return Math.max(maxLeft, maxRight) + node.val
    }

    checkMaxNode(node)
    return answer
}

const tree: TreeNode = {
    val: 1,
    left: {
        val: -2,
        left: null,
        right: null
    },
    right: {
        val: 3,
        left: null,
        right: null
    }
};

const tree2: TreeNode = {
    val: 2,
    left: {
        val: 3,
        left: { val: 4, left: null, right: null },
        right: { val: 5, left: null, right: null },
    },
    right: {
        val: 6,
        left: { val: 7, left: null, right: null },
        right: { val: 8, left: null, right: null },
    },
}

const tree3: TreeNode = {
    val: -2,
    left: {
        val: -3,
        left: { val: 4, left: null, right: null },
        right: null
    },
    right: {
        val: 5,
        left: null,
        right: { val: 6, left: null, right: null },
    },
}

console.log(binarySearch(tree))
console.log(binarySearch(tree2))
console.log(binarySearch(tree3))