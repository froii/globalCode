// fib is nice example how a data can be used.

export function getNthFib(n: number) {
    if(!n || n === 1) return 0

    let n1 = 0, n2 = 1
    for (let i = 2; i < n; i++) {
        [n1, n2] = [n2, n1 + n2]
    }

    return n2;
}

// text verification ( Palindrome - when begin is the same as end - abcdcba )
export function isPalindrome(string: string) {
    const l = string.length - 1
    const n = Math.floor(l / 2)

    for (let i = 0; i <= n; i++) {
        if(string[i] !== string[l - i]) return false
    }

    return true;
}
