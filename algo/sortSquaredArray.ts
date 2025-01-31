// can be     array.map(v => v * v).sort((a, b) => a - b)
// but for avoiding sort logic O(N2)  can use this -
// multiplication + sort  in 1 cycle O(N) + revers = O(N)


const arr = [3, 8, 2, 5, 1, 0, 9, 6, 7, 4]
let t= 0

// export function sortedSquaredArray(array: number[]): number[] {
//     return array.map(v => v * v).sort((a, b) => a - b)
// }

function sortSquaredArray(array: number[]): number[] {
    const squaredArray = [];
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
        t++
        const leftSq = array[left] * array[left];
        const rightSq = array[right] * array[right];

        if (leftSq <= rightSq) {
            squaredArray.push(rightSq);
            right--;
        } else {
            squaredArray.push(leftSq);
            left++;
        }
    }

    return squaredArray.reverse() // Ensure consistent ascending order
}

const result = sortSquaredArray(arr)
console.log(result)
console.log(t)
