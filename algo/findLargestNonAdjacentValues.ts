
// O(n)
const findMaxValues = (data: number[]) => {
    if (data.length === 0) return 0
    if (data.length === 1) return data[0]

    const arrMaxSteps = new Array(data.length)
    arrMaxSteps[0] = data[0]
    arrMaxSteps[1] = Math.max(data[0], data[1])

    for (let i = 2; i < data.length; i++ ) {
        arrMaxSteps[i] = Math.max(arrMaxSteps[i-2] + data[i], arrMaxSteps[i-1])
    }

    return arrMaxSteps[arrMaxSteps.length - 1]
}

const data1 = [10, 5, 1, 2, 6, 7, 9, 4]
const data2 = [3, 2, 1, 5, 6, 2, 9, 7]
const data3 = [1,2,4,8, 5, 7, 10, 4, 1, 16]
console.log(findMaxValues(data1))
console.log(findMaxValues(data2))
console.log(findMaxValues(data3))
