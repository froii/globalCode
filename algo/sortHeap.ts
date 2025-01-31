// Часова складність: O(n logn)
// Підходить для обмеженого обсягу пам'яті, оскільки працює "на місці".
// важкий для контролю

function heapSort(arr: number[]): number[] {
    const n = arr.length;
    const middle = Math.floor(n / 2)

    for (let i = middle - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }

    for (let i = n - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        heapify(arr, i, 0);
    }

    return arr;
}

function heapify(arr: number[], n: number, i: number): void {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    if (left < n && arr[left] > arr[largest]) largest = left;
    if (right < n && arr[right] > arr[largest]) largest = right;

    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]]; // Swap
        heapify(arr, n, largest);
    }
}

const numbers = [4, 10, 3, 5, 1];
console.log(heapSort(numbers)); // [1, 3, 4, 5, 10]