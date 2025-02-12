
// пошук наступного більшого елемента для кожного елемента в масиві.

// У кожному прикладі ми бачимо, що:
// Якщо справа є більший елемент, він записується в результат
// Якщо більшого елемента немає, залишається -1
// Алгоритм враховує циклічність масиву, тобто може шукати більший елемент з початку масиву

// Основна ідея:
// Використовуємо стек для зберігання індексів елементів
// Для кожного елемента шукаємо перший більший елемент справа
// Проходимо масив двічі для обробки циклічних випадків


// Часова складність: O(n), де n - довжина масиву
// Кожен елемент додається і видаляється зі стеку максимум один раз
// Просторова складність: O(n)


export function nextGreaterElement(array: number[]): number[] {
    // Створюємо стек для зберігання індексів
    const stack: number[] = [];
    // Створюємо масив результатів, заповнений -1
    const result = new Array(array.length).fill(-1);
    
    // Проходимо по масиву двічі для обробки циклічного масиву
    for (let i = 0; i < array.length * 2; i++) {
      // Отримуємо циклічний індекс
      const circularIdx = i % array.length;
      
      // Поки стек не порожній і поточний елемент більший за елемент на вершині стеку
      while (
        stack.length > 0 && 
        array[circularIdx] > array[stack[stack.length - 1]]
      ) {
        const top = stack.pop()!;
        result[top] = array[circularIdx];
      }
      
      // Додаємо поточний індекс до стеку, якщо ми в першому проході
      if (i < array.length) {
        stack.push(circularIdx);
      }
    }
    
    return result;
  }
  
  // Приклади використання з логуванням
  function testNextGreaterElement(): void {
    // Приклад 1: Простий масив
    const arr1 = [4, 5, 2, 10, 8];
    console.log("Вхідний масив:", arr1);
    console.log("Результат:", nextGreaterElement(arr1));
    // Очікуваний результат: [5, 10, 10, -1, -1]
    
    // Приклад 2: Циклічний випадок
    const arr2 = [2, 5, 3, 4, 1];
    console.log("Вхідний масив:", arr2);
    console.log("Результат:", nextGreaterElement(arr2));
    // Очікуваний результат: [5, -1, 4, 5, 2]
    
    // Приклад 3: Масив з повторюваними елементами
    const arr3 = [3, 3, 4, 2, 4];
    console.log("Вхідний масив:", arr3);
    console.log("Результат:", nextGreaterElement(arr3));
    // Очікуваний результат: [4, 4, -1, 4, -1]
  }
  
  // Запускаємо тести
  testNextGreaterElement();
  