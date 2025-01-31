// швидкий пошук чисел які === sum через зворотне збереження числа яка необхідне для результату,
// замість пошуку результату через додавання всіх чисел між собою
// O(N) замість O(N2)

// quick search for numbers that === sum through reverse saving of the result that is needed to save,
// instead of finding the result by adding all the numbers together
// O(N) instead of O(N2)

const arr = [3, 8, 2, 5, 1, 0, 9, 6, 7, 4]
const sumN = 10
let t = 0

function twoNumberSum(array: number[], targetSum: number): number[] {
    const hash: {[key: number]: true} = {}

    for (const n of array) {
        t++
        if (hash[n]) return [n, targetSum - n];
        hash[targetSum - n] = true
    }
    return []
}

const result = twoNumberSum(arr, sumN)
console.log(result)
console.log(t)