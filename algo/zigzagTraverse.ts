
// рішення для обходу двовимірного масиву зигзагом:

// Ключові особливості:
// Обробляє прямокутні масиви (а не тільки квадратні)
// Працює з масивами будь-якого розміру
// Обробляє крайові випадки (порожній масив, один рядок/стовпець)
// Зберігає правильний порядок у зигзагоподібному візерунку

// Часова складність: O(n), де n – загальна кількість елементів (висота × ширина)
//  Просторова складність: O(n) для зберігання масиву результатів

// Відстеження поточної позиції (рядок, стовпець) і напрямок (вниз)
// Для кожної позиції:
// Додати поточне число до результату
// Залежно від напрямку та положення:
// Якщо ви йдете вниз і торкаєтеся нижнього або лівого краю, змініть напрямок і рухайтеся праворуч або вниз
// Якщо піднімаєтеся вгору і торкаєтеся верхнього або правого краю, змініть напрямок і рухайтеся вниз або праворуч
// В іншому випадку продовжуйте в поточному напрямку по діагоналі

export function zigzagTraverse(array: number[][]): number[] {
    // Handle edge cases
    if (array.length === 0) return [];
    
    const height = array.length;
    const width = array[0].length;
    const result: number[] = [];
    
    let row = 0;
    let col = 0;
    let goingDown = true;
    
    while (!isOutOfBounds(row, col, height, width)) {
      result.push(array[row][col]);
      
      if (goingDown) {
        if (col === 0 || row === height - 1) {
          // Change direction to going up
          goingDown = false;
          
          if (row === height - 1) {
            col++;
          } else {
            row++;
          }
        } else {
          row++;
          col--;
        }
      } else {
        if (row === 0 || col === width - 1) {
          // Change direction to going down
          goingDown = true;
          
          if (col === width - 1) {
            row++;
          } else {
            col++;
          }
        } else {
          row--;
          col++;
        }
      }
    }
    
    return result;
  }
  
  function isOutOfBounds(row: number, col: number, height: number, width: number): boolean {
    return row < 0 || row >= height || col < 0 || col >= width;
  }


  const array = [
    [1,  3,  4, 10],
    [2,  5,  9, 11],
    [6,  8, 12, 15],
    [7, 13, 14, 16]
  ];
  
  console.log(zigzagTraverse(array));
  // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]