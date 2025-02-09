
// який використовується для пошуку k-го найменшого елемента в несортованому масиві. 
// Цей алгоритм має середню часову складність O(n) і працює подібно до швидкого сортування, але потребує лише розділення однієї сторони масиву.

// Ця реалізація включає кілька ключових компонентів:
// quickselect: Основна функція, яка приймає масив і k як вхідні дані
// quickselectHelper: рекурсивний помічник, який реалізує основний алгоритм
// partition: розбиває масив навколо опорного значення
// swap: допоміжна функція для заміни елементів

// Ключові особливості цієї реалізації:
// Використовує випадковий вибір опорної точки, щоб уникнути найгіршої продуктивності O(n²).
// Ітеративний підхід, а не рекурсивний, щоб уникнути переповнення стеку
// Розбиття на місці для мінімізації складності простору до O(1)
// Належним чином обробляє крайові випадки

export function quickselect(array: number[], k: number): number {
    // Convert k to 0-based index for internal use
    const position = k - 1;
    return quickselectHelper(array, 0, array.length - 1, position);
  }
  
  function quickselectHelper(
    array: number[],
    startIdx: number,
    endIdx: number,
    position: number
  ): number {
    while (true) {
      // If the start index equals the end index, we've found our element
      if (startIdx === endIdx) {
        return array[startIdx];
      }
  
      // Choose a random pivot to avoid worst-case scenario with sorted arrays
      const pivotIdx = Math.floor(Math.random() * (endIdx - startIdx + 1)) + startIdx;
      
      // Get the final position of the pivot after partitioning
      const finalPivotIdx = partition(array, startIdx, endIdx, pivotIdx);
  
      if (finalPivotIdx === position) {
        // We found the kth element
        return array[finalPivotIdx];
      } else if (finalPivotIdx > position) {
        // The kth element is in the left partition
        endIdx = finalPivotIdx - 1;
      } else {
        // The kth element is in the right partition
        startIdx = finalPivotIdx + 1;
      }
    }
  }
  
  function partition(
    array: number[],
    startIdx: number,
    endIdx: number,
    pivotIdx: number
  ): number {
    const pivotValue = array[pivotIdx];
    
    // Move pivot to the end
    swap(array, pivotIdx, endIdx);
    
    let lessThanIdx = startIdx;
    
    // Partition the array around the pivot
    for (let i = startIdx; i < endIdx; i++) {
      if (array[i] < pivotValue) {
        swap(array, i, lessThanIdx);
        lessThanIdx++;
      }
    }
    
    // Move pivot to its final position
    swap(array, lessThanIdx, endIdx);
    
    return lessThanIdx;
  }
  
  function swap(array: number[], i: number, j: number): void {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }


console.log(quickselect([8, 5, 2, 9, 7, 6, 3], 3)); // Output: 5 (3rd smallest element)