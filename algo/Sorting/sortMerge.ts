// Часова складність: O(n logn) у всіх випадках.
// Підходить для великих масивів, потребує додаткової пам'яті. ( другий після Quick Sort  хоча по таймеру швидший )

function mergeSort(arr: number[]): number[] {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

console.time("MyTimer");
function merge(left: number[], right: number[]): number[] {
    const result: number[] = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    return result.concat(left.slice(i)).concat(right.slice(j));
}
console.timeEnd("MyTimer");

// Використання
const arrmerge = [38, 27, 43, 3, 9, 82, 10, 5, 3, 4, 9, 11, 8, 4, 2, 14];
console.log(mergeSort(arrmerge)); // [3, 9, 10, 27, 38, 43, 82]