

// sums масив зберігає максимальні суми для кожної позиції
// sequences масив зберігає індекси попередніх елементів для відновлення послідовності
// maxSumIdx відстежує індекс максимальної суми


// Основний алгоритм:

// Для кожного елемента перевіряємо всі попередні елементи
// Якщо знаходимо менший елемент і можемо отримати більшу суму, оновлюємо sums і sequences


// Відновлення послідовності:

// Починаємо з індексу максимальної суми
// Рухаємось назад по sequences, додаючи елементи на початок результуючого масиву

// Часова складність: O(n²)
// Просторова складність: O(n)

export function maxSumIncreasingSubsequence(array: number[]): [number, number[]] {
    const n = array.length;
    if (n === 0) return [0, []];
    
    // Масив для збереження максимальних сум
    const sums: number[] = [...array];
    
    // Масив для відстеження індексів попередніх елементів
    const sequences: number[] = new Array(n).fill(-1);
    
    let maxSumIdx = 0;
    
    // Проходимо по кожному елементу
    for (let i = 0; i < n; i++) {
      // Перевіряємо всі попередні елементи
      for (let j = 0; j < i; j++) {
        // Якщо поточний елемент більший за попередній
        // і нова сума більша за поточну максимальну
        if (array[i] > array[j] && sums[j] + array[i] > sums[i]) {
          sums[i] = sums[j] + array[i];
          sequences[i] = j;
        }
      }
      
      // Оновлюємо індекс максимальної суми
      if (sums[i] > sums[maxSumIdx]) {
        maxSumIdx = i;
      }
    }
    
    // Відновлюємо послідовність
    const sequence: number[] = [];
    let currentIdx = maxSumIdx;
    
    while (currentIdx !== -1) {
      sequence.unshift(array[currentIdx]);
      currentIdx = sequences[currentIdx];
    }
    
    return [sums[maxSumIdx], sequence];
  }


  const array = [10, 70, 20, 30, 50, 11, 30];
console.log(maxSumIncreasingSubsequence(array));
// Виведе: [180, [10, 20, 30, 50, 70]]