
// щоб знайти всі четвірки, сума яких відповідає цільовій сумі:

// Спочатку відсортуйте масив (спрощує пропуск дублікатів і використання двох вказівників)
// Використовуйте два вкладених цикли, щоб виправити перші два числа
// Використовуйте техніку двох вказівників, щоб знайти два числа, що залишилися
// Пропускайте дублікати на кожному рівні, щоб уникнути повторюваних четвірок


// Часова складність: O(n³), де n – довжина вхідного масиву
// Сортування займає O(n log n)
// Два вкладених цикли та техніка двох вказівників дають O(n³)

// Складність простору: O(n), де n – довжина вхідного масиву
// Не рахуючи місця, необхідного для виведення
// Лише використання постійного додаткового місця для змінних

export function fourNumberSum(array: number[], targetSum: number): number[][] {
    // Sort array to help with skipping duplicates
    array.sort((a, b) => a - b);
    
    const quadruplets: number[][] = [];
    const n = array.length;
    
    // Use i as first number of quadruplet
    for (let i = 0; i < n - 3; i++) {
      // Skip duplicates for first number
      if (i > 0 && array[i] === array[i - 1]) continue;
      
      // Use j as second number of quadruplet
      for (let j = i + 1; j < n - 2; j++) {
        // Skip duplicates for second number
        if (j > i + 1 && array[j] === array[j - 1]) continue;
        
        // Use two pointers for remaining two numbers
        let left = j + 1;
        let right = n - 1;
        
        while (left < right) {
          const currentSum = array[i] + array[j] + array[left] + array[right];
          
          if (currentSum === targetSum) {
            // Found a valid quadruplet
            quadruplets.push([array[i], array[j], array[left], array[right]]);
            
            // Skip duplicates for third number
            while (left < right && array[left] === array[left + 1]) left++;
            // Skip duplicates for fourth number
            while (left < right && array[right] === array[right - 1]) right--;
            
            left++;
            right--;
          } else if (currentSum < targetSum) {
            left++;
          } else {
            right--;
          }
        }
      }
    }
    
    return quadruplets;
  }


const array = [7, 6, 4, -1, 1, 2];
const targetSum = 16;
console.log(fourNumberSum(array, targetSum));
// Output: [[7, 6, 4, -1], [7, 6, 1, 2]]