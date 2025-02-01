// задача з сапера! Треба відкрити клітинку і якщо там немає міни, показати кількість мін навколо.

// Маємо поле де:
// 'M' - міна
// 'H' - прихована клітинка
// 'X' - вибух міни
// '0-8' - кількість мін навколо

// Коли користувач відкриває клітинку (row, column):
// Якщо там міна ('M'):
// Позначаємо як 'X' (вибух)
// Повертаємо поле

// Якщо клітинка вже відкрита:
// Нічого не робимо
// Повертаємо поле

// Якщо клітинка прихована ('H'):
// Рахуємо кількість мін навколо
// Заміняємо 'H' на цю кількість
// Якщо мін навколо немає (0):

// Рекурсивно відкриваємо всі сусідні клітинки


// Цей алгоритм використовує:
// Рекурсію для відкриття пустих областей
// Перевірку меж для безпеки
// Підрахунок сусідніх елементів

// Часова: O(NM) у гіршому випадку, де NM - розмір поля
// Просторова: O(N*M) через рекурсію

export function revealMinesweeper(board: string[][], row: number, column: number): string[][] {
    // Якщо натрапили на міну
    if (board[row][column] === 'M') {
      board[row][column] = 'X';  // Позначаємо вибух
      return board;
    }
    
    // Якщо клітинка вже відкрита
    if (board[row][column] !== 'H') {
      return board;
    }
    
    // Рахуємо міни навколо
    const mineCount = countAdjacentMines(board, row, column);
    
    // Оновлюємо поточну клітинку
    board[row][column] = mineCount.toString();
    
    // Якщо навколо немає мін, відкриваємо сусідні клітинки
    if (mineCount === 0) {
      // Перевіряємо всіх сусідів
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          const newRow = row + i;
          const newCol = column + j;
          
          // Перевіряємо чи в межах поля
          if (newRow >= 0 && newRow < board.length && 
              newCol >= 0 && newCol < board[0].length) {
            revealMinesweeper(board, newRow, newCol);
          }
        }
      }
    }
    
    return board;
  }
  
  function countAdjacentMines(board: string[][], row: number, column: number): number {
    let count = 0;
    
    // Перевіряємо всі сусідні клітинки
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        const newRow = row + i;
        const newCol = column + j;
        
        // Перевіряємо чи в межах поля
        if (newRow >= 0 && newRow < board.length && 
            newCol >= 0 && newCol < board[0].length) {
          if (board[newRow][newCol] === 'M') {
            count++;
          }
        }
      }
    }
    
    return count;
  }

  const board = [
    ["H", "H", "H", "H"],
    ["H", "H", "M", "H"],
    ["H", "H", "H", "H"],
    ["H", "H", "H", "H"]
  ];
  
  revealMinesweeper(board, 0, 0);
  /* Результат:
  [
    ["0", "1", "H", "H"],
    ["0", "2", "M", "H"],
    ["0", "1", "H", "H"],
    ["0", "0", "H", "H"]
  ]
  */