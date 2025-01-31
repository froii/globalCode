// Find the majority element in an array of integers.
// The function returns the majority element.  
// Алгоритм Boyer-Moore для пошуку елемента більшості (>50%): але не працює якщо не сортувати масив 


export function majorityElement(array: number[]) { // O(n) O(1) n - array length
    let count = 0
    let candidate = null

    for (const num of array) {
        if (count === 0) candidate = num
        count += (num === candidate) ? 1 : -1
    }
    return candidate
}

// Example usage:
const array = [1, 2, 3, 3, 3, 4, 4, 4, 4];
const majority = majorityElement(array);
console.log(majority); // Output: 4


const array2 = [1, 3, 2, 2, 3, 3, 3, 4, 4, 4, 4, 3];
const majority2 = majorityElement(array2);
console.log(majority2); // Output: 4 - неправильно , бо не сортуємо масив, мав бути 3


export function correctMajorityElement(array: number[]) { // O(n) O(n) n - array length
    const counts = new Map<number, number>();
    let maxCount = 0;
    let majorityNum = array[0];
    
    for (const num of array) {
        const count = (counts.get(num) || 0) + 1;
        counts.set(num, count);
        
        if (count > maxCount) {
            maxCount = count;
            majorityNum = num;
        }
    }
    
    return majorityNum;
}
  
  // Example usage:
const array3 = [1, 3,2, 2, 3, 3, 3, 4, 4, 4, 4, 3];
const majority3 = correctMajorityElement(array3);
console.log(majority3); // Output: 3

const array4 = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
const majority4 = correctMajorityElement(array4);
console.log(majority4); // Output: 4 - тепер правильно




