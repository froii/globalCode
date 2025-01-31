/**
 * Performs Lomuto partition on a sub-array of an integer array for quicksort.
 *
 * This function rearranges elements in the sub-array (arr[low] to arr[high])
 * such that all elements less than or equal to the chosen pivot (last element in this case)
 * are placed before the pivot, and elements greater than the pivot are placed after it.
 * The function also returns the index of the pivot element in its final sorted position.
 *
 * @param arr The integer array to be partitioned.
 * @param low The starting index of the sub-array (inclusive).
 * @param high The ending index of the sub-array (exclusive).
 * @returns The index of the pivot element after partitioning.
 *
 * Time Complexity: O(n) on average, O(n^2) in the worst case (pivot is always the largest or smallest element).
 * Space Complexity: O(1) - in-place modification of the array.
 */
function lomutoPartition(arr: number[], low: number, high: number): number {
    // Choose the last element as the pivot
    const pivot = arr[high];
    let i = low - 1; // Index for elements less than pivot

    for (let j = low; j < high; j++) {
        if (arr[j] <= pivot) {
            i++;
            // Swap elements at i and j
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }

    // Swap pivot with the first element greater than it
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1; // Index of the pivot element after partitioning
}

function quickSort(arr: number[], low = 0, high = arr.length - 1) {
    if (low < high) {
        const partitionIndex = lomutoPartition(arr, low, high);
        quickSort(arr, low, partitionIndex - 1); // Sort left sub-array
        quickSort(arr, partitionIndex + 1, high); // Sort right sub-array
    }
}

const unsortedArray = [8, 3, 1, 4, 2, 7, 6, 5];
quickSort(unsortedArray);
console.log(unsortedArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8]