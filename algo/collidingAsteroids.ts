
// симуляції зіткнення астероїдів.

// Додатні числа означають рух вправо
// Від'ємні числа означають рух вліво
// При зіткненні виживає більший за модулем астероїд
// При однаковому розмірі знищуються обидва

// Часова: O(n), де n - кількість астероїдів
// Просторова: O(n) для стеку


export function collidingAsteroids(asteroids: number[]): number[] {
    const stack: number[] = [];
    
    for (const asteroid of asteroids) {
      let collision = false;
      
      // Перевіряємо зіткнення, поки поточний астероїд існує
      // і може зіткнутися з астероїдом на вершині стеку
      while (
        stack.length > 0 && 
        asteroid < 0 && 
        stack[stack.length - 1] > 0
      ) {
        const topAsteroid = stack[stack.length - 1];
        
        // Якщо астероїд на вершині стеку більший - поточний знищується
        if (Math.abs(topAsteroid) > Math.abs(asteroid)) {
          collision = true;
          break;
        }
        // Якщо поточний астероїд більший - знищується верхній астероїд
        else if (Math.abs(topAsteroid) < Math.abs(asteroid)) {
          stack.pop();
        }
        // Якщо астероїди однакового розміру - обидва знищуються
        else {
          stack.pop();
          collision = true;
          break;
        }
      }
      
      // Додаємо астероїд до стеку, якщо він не був знищений
      if (!collision) {
        stack.push(asteroid);
      }
    }
    
    return stack;
  }
  
  // Функція для тестування
  function testCollisions(): void {
    // Тест 1: Базовий випадок зіткнень
    const test1 = [5, 10, -5];
    console.log("Вхідний масив:", test1);
    console.log("Результат:", collidingAsteroids(test1));
    // Очікуваний результат: [5, 10]
    
    // Тест 2: Складніший випадок з множинними зіткненнями
    const test2 = [8, -8];
    console.log("Вхідний масив:", test2);
    console.log("Результат:", collidingAsteroids(test2));
    // Очікуваний результат: []
    
    // Тест 3: Астероїди, що рухаються в одному напрямку
    const test3 = [-2, -1, 1, 2];
    console.log("Вхідний масив:", test3);
    console.log("Результат:", collidingAsteroids(test3));
    // Очікуваний результат: [-2, -1, 1, 2]
  }
  
  // Запускаємо тести
  testCollisions();