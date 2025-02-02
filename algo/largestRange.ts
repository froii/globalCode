
// найбільшого діапазону послідовних чисел у масиві:

// Це рішення використовує хеш-набір для ефективного пошуку діапазонів. Ось як це працює:
// Створіть набір із масиву для пошуку O(1).
// Для кожного числа, якщо воно може бути початком діапазону (число 1 не існує):

// Порахуйте послідовні числа від цієї початкової точки
// Оновити найдовший діапазон, якщо поточний діапазон довший

// Часова складність: O(n), де n – довжина масиву
// Складність простору: O(n) для зберігання набору хешів


export function largestRange(array: number[]): [number, number] {
    // Create a hash set for O(1) lookups
    const nums = new Set(array);
    let longestRange: [number, number] = [-1, -1];
    let longestLength = 0;
    
    // Check each number as potential start of range
    for (const num of array) {
      // Skip if this number can't be start of a range
      // (because number-1 exists in set)
      if (nums.has(num - 1)) continue;
      
      // Found potential start of range
      let currentNum = num;
      let currentLength = 0;
      
      // Count consecutive numbers
      while (nums.has(currentNum)) {
        currentNum++;
        currentLength++;
      }
      
      // Update longest range if current is longer
      if (currentLength > longestLength) {
        longestLength = currentLength;
        longestRange = [num, currentNum - 1];
      }
    }
    
    return longestRange;
  }


  console.log(largestRange([1, 11, 3, 0, 15, 5, 2, 4, 10, 7, 12, 6]));
// Output: [0, 7]

console.log(largestRange([1, 1, 1, 3, 4]));
// Output: [3, 4]

console.log(largestRange([4, 2, 1, 3, 6]));
// Output: [1, 4]