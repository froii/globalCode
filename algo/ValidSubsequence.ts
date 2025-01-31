// Subsequence = Підпослідовність
// O(n)

const arr = [5, 1, 22, 25, 6, -1, 8, 10]
const subS = [1, 6, -1, 10]
let t = 0
function isValidSubsequence(array: number[], sequence: number[]) {
    let seqIndex = 0
    for(let v of array) {
        t++
        if(sequence.length === seqIndex) break
        if(sequence[seqIndex] === v) seqIndex++
    }

    return seqIndex === sequence.length;
}

const result = isValidSubsequence(arr, subS)
console.log(result)
console.log(t)
