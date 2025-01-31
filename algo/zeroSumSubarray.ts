// Find a subarray with a sum of zero in an array of integers.
// The function returns true if such a subarray exists, otherwise false.  

export function zeroSumSubarray(array: number[]) { // O(n) O(n) n - array length
    const seen = new Set()
    let sum = 0

    for (let num of array) { // O(n)
        sum += num
        if (seen.has(sum) || sum === 0) return true
        seen.add(sum)
    }
    return false
}   

// Example usage:
const array = [1, 2, -3, 4, 5, -6, 7, -8, 9, 10];
const result = zeroSumSubarray(array);
console.log(result); // Output: true

