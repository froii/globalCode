// speed and memory  =  O ( n log n )
// binary, нім. binär) — подвійний, двоїстий, той, що складається з двох частин. розділений на право і ліво - початок кінець
// O(log N) == binary - тому що використовує менше циклів ніж лінійний O(N) -від початку і до кінця. Якщо цей цикл працює.
// тому тут один n - цикл + log n/ якщо був би лінійний то n2 - бо в кожному циклу требя було ще робити цикл для отримання правильної позиції

// speed and memory = O ( n log n )
// binary, German binär) — double, double, that which consists of two parts. divided into right and left - the beginning is the end
// O(log N) == binary - because it uses fewer cycles than linear O(N) - from start to finish. If this cycle works.
// that's why there is one n - cycle + log n/ if it were linear, then n2 - because in each cycle it was necessary to make a cycle to obtain the correct position

const arr = [3, 8, 2, 5, 1, 0, 9, 6, 7, 4]
let t = 0

export function runCompare(arr: number[], left: number, right: number){
    const pivot = arr[Math.floor((left+right)/2)]
    while (left <= right) {
        while (arr[left] < pivot ) left++
        while (arr[right] > pivot ) right--

        if(left<=right) {
            const newV = arr[left]
            arr[left] = arr[right]
            arr[right] = newV
            left++
            right--
        }
    }
    return left
}

const runSort = (arr: number[], start: number, end: number) => {
    if(start >= end) return
    const rightStart = runCompare(arr, start, end)
    runSort(arr,start, rightStart - 1)
    runSort(arr,rightStart, end)
}

const runHoare = (arr: number[]) => {
   return runSort(arr, 0, arr.length - 1)
}

runHoare(arr)
console.log(t)
console.log(arr)