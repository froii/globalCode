
// Алгоритм для знаходження розмірів річок у матриці, де:
// 1 представляє частину річки
// 0 представляє сушу

// Основний алгоритм:
// Проходимо по всій матриці
// Якщо знаходимо невідвідану клітинку з 1 - починаємо DFS
// Зберігаємо розміри знайдених річок

// DFS для дослідження річки:
// Використовуємо стек для обходу
// Перевіряємо сусідів у 4 напрямках
// Рахуємо розмір річки

// Часова: O(wh), де w - ширина, h - висота матриці
// Просторова: O(wh) для матриці відвіданих клітинок

export function riverSizes(matrix: number[][]): number[] {
    const sizes: number[] = [];
    const visited: boolean[][] = matrix.map(row => row.map(() => false));
   
    // Проходимо по всій матриці
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[0].length; j++) {
        if (visited[i][j]) continue;
        // Якщо знайшли річку - починаємо DFS
        if (matrix[i][j] === 1) {
          sizes.push(exploreRiver(i, j, matrix, visited));
        }
        visited[i][j] = true;
      }
    }
   
    return sizes;
   }
   
   // DFS функція для дослідження річки
   function exploreRiver(
    row: number, 
    col: number, 
    matrix: number[][], 
    visited: boolean[][]
   ): number {
    let size = 1;
    // Всі можливі сусідні клітинки (вгору, вправо, вниз, вліво)
    const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    // Стек для DFS
    const stack: [number, number][] = [[row, col]];
    visited[row][col] = true;
   
    while (stack.length) {
      const [currentRow, currentCol] = stack.pop()!;
   
      // Перевіряємо всіх сусідів
      for (const [dx, dy] of directions) {
        const newRow = currentRow + dx;
        const newCol = currentCol + dy;
   
        // Перевіряємо чи в межах матриці
        if (
          newRow < 0 || 
          newRow >= matrix.length || 
          newCol < 0 || 
          newCol >= matrix[0].length
        ) {
          continue;
        }
   
        // Якщо вже відвідали або не річка - пропускаємо
        if (visited[newRow][newCol] || matrix[newRow][newCol] === 0) {
          continue;
        }
   
        // Позначаємо як відвідану і додаємо до стеку
        visited[newRow][newCol] = true;
        stack.push([newRow, newCol]);
        size++;
      }
    }
   
    return size;
   }


   const matrix = [
    [1, 0, 0, 1],
    [1, 0, 1, 0],
    [0, 0, 1, 0],
    [1, 0, 1, 0]
  ];
  
  console.log(riverSizes(matrix)); // [2, 1, 3, 1]