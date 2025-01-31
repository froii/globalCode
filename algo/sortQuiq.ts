// O(n logn) у середньому.
// O(n2) у найгіршому (рідкісний випадок, якщо вибір опорного елемента невдалий).
// Один із найшвидших алгоритмів у більшості практичних застосувань.
console.time("MyTimer");
function quickSort(arr: number[]): number[] {
    if (arr.length <= 1) return arr;

    const pivot = arr[arr.length - 1]; // Опорний елемент
    const left: number[] = [];
    const right: number[] = [];

    for (let i = 0; i < arr.length - 1; i++) {
        arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
    }

    return  [...quickSort(left), pivot, ...quickSort(right)];
}
console.timeEnd("MyTimer");
const numbers = [38, 27, 43, 3, 9, 82, 10, 5, 3, 4, 9, 11, 8, 4, 2, 14];
console.log(quickSort(numbers)); // [2, 3, 4, 5, 8]