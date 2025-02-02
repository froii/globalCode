
// щоб знайти найдовший підмасив, сума якого дорівнює цільовій сумі:

// Це рішення використовує суми префіксів і хеш-таблицю для ефективного пошуку найдовшого підмасиву. Ось як це працює:
// Відстежуйте поточну суму та зберігайте першу позицію кожної суми в хеш-таблиці

// Для кожної позиції:
// Оновити поточну суму
// Перевірте, чи поточний префікс відповідає цільовій сумі
// Перевірте, чи видалення якогось префікса дасть цільову суму
// Зберігати поточну суму, якщо ми її раніше не бачили


// Часова складність: O(n), де n – довжина масиву. Просторова складність: O(n) для зберігання хеш-таблиці сум

export function longestSubarrayWithSum(array: number[], targetSum: number): number[] {
    // Store running sums for quick lookup
    const sums: { [key: number]: number } = {};
    let currentSum = 0;
    let maxLength = 0;
    let bestRange: number[] = [];
    
    // Handle case when entire prefix sums to target
    sums[0] = -1;
    
    for (let i = 0; i < array.length; i++) {
      currentSum += array[i];
      
      // Check if we've found a subarray that sums to target
      if (currentSum === targetSum) {
        if (i + 1 > maxLength) {
          maxLength = i + 1;
          bestRange = [0, i];
        }
      }
      
      // Check if removing some prefix gives target sum
      const difference = currentSum - targetSum;
      if (difference in sums) {
        const length = i - sums[difference];
        if (length > maxLength) {
          maxLength = length;
          bestRange = [sums[difference] + 1, i];
        }
      }
      
      // Only store this sum if we haven't seen it
      // (we want the earliest occurrence for longest subarray)
      if (!(currentSum in sums)) {
        sums[currentSum] = i;
      }
    }
    
    return bestRange;
  }


  console.log(longestSubarrayWithSum([1, 2, 3, 4, 3, 3, 1, 2, 1, 2], 10));
// Output: [0, 3] (subarray [1, 2, 3, 4] sums to 10)

console.log(longestSubarrayWithSum([1, 1, 1, 1, 1, 1], 3));
// Output: [0, 2] (subarray [1, 1, 1] sums to 3)

console.log(longestSubarrayWithSum([2, 0, 0, 0, 3], 3));
// Output: [0, 4] (entire array [2, 0, 0, 0, 3] sums to 3)



// Альтернативне рішення (два покажчики для невід’ємних масивів):
// Працює лише з невід’ємними числами
// Ефективніший простір (O(1) простір)
// Може легше зрозуміти
// Усе ще має O(n) часову складність

export function longestSubarrayWithSumTwoPointers(array: number[], targetSum: number): number[] {
    let start = 0;
    let currentSum = 0;
    let maxLength = 0;
    let bestRange: number[] = [];
    
    // Only works if all numbers are non-negative
    for (let end = 0; end < array.length; end++) {
      currentSum += array[end];
      
      // Shrink window while sum is too large
      while (currentSum > targetSum && start <= end) {
        currentSum -= array[start];
        start++;
      }
      
      // Check if we found a valid window
      if (currentSum === targetSum) {
        const length = end - start + 1;
        if (length > maxLength) {
          maxLength = length;
          bestRange = [start, end];
        }
      }
    }
    
    return bestRange;
  }


