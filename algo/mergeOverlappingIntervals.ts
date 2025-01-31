// Merge overlapping intervals in an array of intervals.
// Each interval is represented as a pair of numbers, the start and end of the interval.
// The function returns a new array of merged intervals.  


export function mergeOverlappingIntervals(array: number[][]) { // O(n) O(n) n - array length
    const sortedArray = array.sort((a, b) => a[0] - b[0])
    const mergedArray: number[][] = []
    let currentInterval = sortedArray[0]

    for (let i = 1; i < sortedArray.length; i++) {
        if (sortedArray[i][0] <= currentInterval[1]) {
            currentInterval[1] = Math.max(currentInterval[1], sortedArray[i][1])
        } else {
            mergedArray.push(currentInterval)
            currentInterval = sortedArray[i]
        }
    }
    mergedArray.push(currentInterval)
    return mergedArray  
  }
  
  // Example usage:
  const intervals = [[1, 3], [2, 6], [8, 10], [15, 18]];
  const merged = mergeOverlappingIntervals(intervals);
  console.log(merged); // Output: [[1, 6], [8, 10], [15, 18]]
    
