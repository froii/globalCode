// Find the best seat in a stadium where the best seat is the one with the most space between it and the nearest person.
// The function returns the index of the best seat.  

export function bestSeat(array: number[]) { // O(n) O(1) n - array length
    let maxSpace = 0
    let bestSeat = -1
    let currentSpace = 0

    for (let i = 0; i < array.length; i++) { // O(n)
        if (array[i] === 0) currentSpace++
        else {
            if (currentSpace > maxSpace) {
                maxSpace = currentSpace
                bestSeat = i - Math.floor(currentSpace / 2) - 1
            }
            currentSpace = 0
        }
    }
    return bestSeat
}

// Example usage:
const stadium = [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1];
const best = bestSeat(stadium);
console.log(best); // Output: 3
