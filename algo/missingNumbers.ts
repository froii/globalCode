// Find the missing numbers in an array of integers.
// The function returns an array of missing numbers.  

export function missingNumbers(array: number[]) { // O(n) O(n) n - array length
    const seen = new Set(array)
    const missing: number[] = []

    for (let i = 1; i <= array.length + 2; i++) { // O(n)
        if (!seen.has(i)) missing.push(i)
    }
    return missing
}

// Example usage:
const array = [1, 2, 4, 5, 6];
const missing = missingNumbers(array);
console.log(missing); // Output: [3, 7]

