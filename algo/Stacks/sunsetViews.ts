/**
 * Призначення : Визначає, які будівлі можуть "бачити" захід сонця, враховуючи їх висоту та розташування.
 */
export enum Direction {
    East = 'EAST',   // Схід (будівлі дивляться на захід)
    West = 'WEST',   // Захід (будівлі дивляться на схід)
  }
  
  /**
   * Функція для визначення індексів будівель, які можуть бачити захід сонця
   * @param buildings Масив висот будівель
   * @param direction Напрямок огляду (EAST або WEST)
   * @returns Масив індексів будівель, які бачать захід сонця
   *
   * Приклад:
   * buildings = [3, 5, 4, 4, 3, 1, 3, 2]
   * direction = EAST (дивимось зі сходу)
   * 
   * Візуалізація (вид збоку):
   *     5
   *     | 4 4
   * 3   | | | 3   3
   * |   | | | |   | 2
   * |   | | | | 1 | |
   * |   | | | | | | |
   * ----------------->
   * 0 1 2 3 4 5 6 7  (індекси)
   * 
   * Результат для EAST: [1, 6]  (будівлі з висотами 5 та 3 бачать захід)
   */
  export function sunsetViews(buildings: number[], direction: Direction) {
    // Визначаємо напрямок огляду
    let isEast = direction === Direction.East;
    
    // Якщо дивимось зі сходу, розвертаємо масив для однакової логіки обробки
    if (isEast) buildings.reverse();
    
    let max = 0;  // Максимальна висота будівлі, яку ми вже бачили
    let res: number[] = [];  // Результуючий масив індексів
    
    // Проходимо по всіх будівлях
    buildings.forEach((height, i) => {
      // Якщо поточна будівля вища за всі попередні
      if (height > max) {
        max = height;  // Оновлюємо максимальну висоту
        
        // Додаємо індекс до результату
        // Якщо дивимось зі сходу, конвертуємо індекс назад
        res.push(isEast ? buildings.length - 1 - i : i);
      }
    });
    
    // Якщо дивились зі сходу, розвертаємо результат назад
    return isEast ? res.reverse() : res;
  }
  
  // Приклади використання:
  // const buildings = [3, 5, 4, 4, 3, 1, 3, 2];
  // console.log(sunsetViews(buildings, Direction.East));  // [1, 6]
  // console.log(sunsetViews(buildings, Direction.West));  // [0, 1]

// Зі сходу (EAST):
// - будівля висотою 5 (індекс 1) бачить захід
// - будівля висотою 3 (індекс 6) бачить захід
// Результат: [1, 6]

// Із заходу (WEST):
// - будівля висотою 3 (індекс 0) бачить захід
// - будівля висотою 5 (індекс 1) бачить захід
// Результат: [0, 1]