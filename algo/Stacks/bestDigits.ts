
// Це рішення використовує підхід монотонного стека, щоб знайти найбільше можливе число. Ось як це працює:
// Головний принцип алгоритму:
// Він намагається створити найбільше можливе число
// Для цього він видаляє менші цифри, якщо після них йде більша цифра

// Часова складність: O(n), де n – довжина числового рядка
// Складність простору: O(n) для стека

// Цей алгоритм має декілька практичних програм:
// Це популярна задача на співбесідах
// Оптимізація чисельних кодів транзакцій
// Формування найбільш вигідних комбінацій цифр для ідентифікаторів
// Оптимізація номерів партій товарів
// Створення оптимальних кодів для системного відстеження
// Оптимізація маршрутизації (маршрутизація номерів)
// Створення оптимальних кодів для мережевих ідентифікаторів
// Часто зустрічається в алгоритмічних змаганнях

// Працює за лінійний час O(n)
// Використовує мінімум додаткової пам'яті
// Гарантує отримання найбільшого можливого числа
// Стабільний для різних вхідних даних

export function bestDigits(number: string, numDigits: number): string {
    // Stack to build our result
    const stack: string[] = [];
    
    // Number of digits we still need to remove
    let digitsToRemove = numDigits;
    
    // Process each digit
    for (const digit of number) {
      // While we can still remove digits and current digit is larger than last digit in stack
      while (
        digitsToRemove > 0 && 
        stack.length > 0 && 
        stack[stack.length - 1] < digit
      ) {
        stack.pop();
        digitsToRemove--;
      }
      
      stack.push(digit);
    }
    
    // If we still need to remove digits, remove from the end
    while (digitsToRemove > 0) {
      stack.pop();
      digitsToRemove--;
    }
    
    return stack.join('');
  }


  
  // Покроковий розбір:
  // Крок 1: digit = '4'
  // stack: []
  // Додаємо 4
  // stack: ['4']
  
  // Крок 2: digit = '6'
  // stack: ['4']
  // 6 > 4, можемо видалити
  // Видаляємо 4 (digitsToRemove = 1)
  // Додаємо 6
  // stack: ['6']
  
  // Крок 3: digit = '2'
  // stack: ['6']
  // 2 < 6, просто додаємо
  // stack: ['6', '2']
  
  // Крок 4: digit = '8'
  // stack: ['6', '2']
  // 8 > 2, можемо видалити
  // Видаляємо 2 (digitsToRemove = 0)
  // Додаємо 8
  // stack: ['6', '8']
  
  // Крок 5: digit = '3'
  // stack: ['6', '8']
  // digitsToRemove = 0, просто додаємо
  // stack: ['6', '8', '3']
  
  // Крок 6: digit = '9'
  // stack: ['6', '8', '3']
  // digitsToRemove = 0, просто додаємо
  // stack: ['6', '8', '3', '9']
  


  // Example usage:
  // console.log(bestDigits("462839", 2));    // "6839"
  // console.log(bestDigits("54321", 2));     // "543"
  // console.log(bestDigits("11111", 3));     // "11"
  // console.log(bestDigits("12345", 2));     // "345"
  // console.log(bestDigits("989891", 3));    // "989"


  // Припустимо, у нас є набір номерів партій товарів
const batchNumbers = ["462839", "543891", "198723"];

// Нам потрібно оптимізувати їх, видаливши 2 цифри для економії місця
const optimizedBatches = batchNumbers.map(batch => bestDigits(batch, 2));

// Результат: ["6839", "5891", "9873"]
// Тепер ці коротші номери можна використовувати для маркування
