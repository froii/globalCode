// Find the longest "peak" in an array, where a peak is defined as a sequence of numbers
// that strictly increases until it reaches a peak and then strictly decreases.
// The peak is the highest number in this sequence.
// The function returns the length of the longest peak found in the array.  

export function longestPeak(array: number[]) { // O(n) O(1) n - array length
    let maxLength = 0;
    let count = 1

    for (let index = 1; index < array.length; index++) { // O(n)
      if (array[index - 1] < array[index] && array[index] > array[index + 1]) { // O(1)
        let j = index;
        let k = index;
        while (array[j - 1] < array[j]) { // O(n) - in worst case we traverse through n elements
          j--;
          count++;
        }
        while (array[k] > array[k + 1]) { // O(n) - in worst case we traverse through n elements
          k++;
          count++;
        }
        if (count > maxLength) maxLength = count; // O(1)
        count = 1
      }
    }

    return maxLength;
  }
  