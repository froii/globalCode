// Insertion Sort: вставка сортвування
// Часова складність:
// O(n) у найкращому (майже відсортовані дані).
// Найкращий з трьох для малих або частково відсортованих масивів.

export function insertionSort(arr: number[]): number[] {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > current) {
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            j--;
        }

        arr[j + 1] = current;
    }
    return arr;
}