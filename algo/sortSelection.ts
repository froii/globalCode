
// Часова складність: o(n2)
// Виконує менше перестановок, але неефективний для майже відсортованих масивів.

export function selectionSort(array: number[]) {
    for (let i=0; i<array.length-1; i++) {
        let minNumIndex = i;

        for (let j= i + 1; j < array.length; j++) {
            if (array[minNumIndex] > array[j]) minNumIndex=j;
        }

        if (minNumIndex > i) [array[i], array[minNumIndex]] = [array[minNumIndex], array[i]];
    }

    return array;
}