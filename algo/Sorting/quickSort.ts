
// алгоритм швидкого сортування (QuickSort). 
// Вибираємо опорний елемент (pivot)
// Розділяємо масив на дві частини: елементи менші за pivot і більші за pivot
// Рекурсивно сортуємо обидві частини
// Об'єднуємо результати

// Часова складність:
// В середньому випадку: O(n log n)
// В найгіршому випадку: O(n²)
// В найкращому випадку: O(n log n)

// Просторова складність: O(log n) для рекурсивних викликів




export function quickSort(array: number[]): number[] {
    // Рекурсивно сортуємо масив
    quickSortHelper(array, 0, array.length - 1);
    return array;
  }
  
  function quickSortHelper(array: number[], startIdx: number, endIdx: number) {
    // Базовий випадок: якщо початковий індекс більший або рівний кінцевому
    if (startIdx >= endIdx) return;
  
    // Вибираємо опорний елемент (pivot)
    const pivotIdx = startIdx;
    let leftIdx = startIdx + 1;
    let rightIdx = endIdx;
  
    // Розділяємо масив відносно опорного елемента
    while (rightIdx >= leftIdx) {
      if (array[leftIdx] > array[pivotIdx] && array[rightIdx] < array[pivotIdx]) {
        // Міняємо місцями елементи, якщо знайдено пару для обміну
        swap(array, leftIdx, rightIdx);
      }
      if (array[leftIdx] <= array[pivotIdx]) {
        leftIdx++;
      }
      if (array[rightIdx] >= array[pivotIdx]) {
        rightIdx--;
      }
    }
    
    // Встановлюємо опорний елемент на його фінальну позицію
    swap(array, pivotIdx, rightIdx);
  
    // Рекурсивно сортуємо ліву та праву частини
    // Сортуємо меншу частину першою для оптимізації використання стеку
    const leftSubarrayIsSmaller = rightIdx - 1 - startIdx < endIdx - (rightIdx + 1);
    if (leftSubarrayIsSmaller) {
      quickSortHelper(array, startIdx, rightIdx - 1);
      quickSortHelper(array, rightIdx + 1, endIdx);
    } else {
      quickSortHelper(array, rightIdx + 1, endIdx);
      quickSortHelper(array, startIdx, rightIdx - 1);
    }
  }
  
  function swap(array: number[], i: number, j: number) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }