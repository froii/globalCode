//
// O(n) O(1) best
// O(n2) O(1) average ..worst
//
// don`t use a lot - better insertionSort or
//
export function bubbleSort(arr: number[]): number[] {
    const leng = arr.length - 1
    for (let i = 0; i < leng; i++) {
        let swapped = false;

        for (let j = 0; j < leng - i; j++) {
            if (arr[j] > arr[j + 1]) {
                // move each element from left to right if right is less than left
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }

        if (!swapped) break;
    }
    return arr;
}
