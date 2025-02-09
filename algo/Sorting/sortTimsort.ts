// Використовується в Java, Python, і JavaScript V8 як основний алгоритм сортування.
// Часова складність: O(n logn) Найкращий випадок: O(n) для майже відсортованих масивів.
// гібрид Merge Sort і Insertion Sort використовується в Python (sorted()) та Java. Добре працює з реальними даними.
// Insertion Sort:  Сортує малі підмасиви (розміром до MIN_RUN) швидше, ніж Merge Sort, завдяки низьким накладним витратам.
// Merge: Зливає відсортовані підмасиви з мінімальним числом копіювань.
// Динамічний розмір підмасивів: Масиви об'єднуються парами, розмір яких збільшується в геометричній прогресії (32, 64, 128 тощо).

const MIN_RUN = 32;

// Insertion Sort для малих підмасивів
function insertionSort(arr: number[], start: number, end: number): void {
    for (let i = start + 1; i <= end; i++) {
        const key = arr[i];
        let j = i - 1;
        while (j >= start && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
}

// Злиття двох відсортованих масивів
function merge(arr: number[], left: number, mid: number, right: number): void {
    const leftArr = arr.slice(left, mid + 1);
    const rightArr = arr.slice(mid + 1, right + 1);

    let i = 0, j = 0, k = left;

    while (i < leftArr.length && j < rightArr.length) {
        arr[k++] = leftArr[i] <= rightArr[j] ? leftArr[i++] : rightArr[j++];
    }

    while (i < leftArr.length) arr[k++] = leftArr[i++];
    while (j < rightArr.length) arr[k++] = rightArr[j++];
}

// Основна функція Timsort
function timSort(arr: number[]): number[] {
    const n = arr.length;

    // Сортування малих підмасивів Insertion Sort
    for (let i = 0; i < n; i += MIN_RUN) {
        insertionSort(arr, i, Math.min(i + MIN_RUN - 1, n - 1));
    }

    // Злиття підмасивів
    for (let size = MIN_RUN; size < n; size *= 2) {
        for (let left = 0; left < n; left += 2 * size) {
            const mid = left + size - 1;
            const right = Math.min(left + 2 * size - 1, n - 1);

            if (mid < right) {
                merge(arr, left, mid, right);
            }
        }
    }

    return arr;
}

const arrrr = [5, 21, 7, 23, 19, 3, 11, 4];
console.log(timSort(arrrr)); // [3, 4, 5, 7, 11, 19, 21, 23]