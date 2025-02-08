
// Алгоритм також відомий як "Floyd's Tortoise and Hare Algorithm" через різну швидкість руху покажчиків.

// Часова: O(n), де n - кількість вузлів
// Просторова: O(1), використовуємо лише два покажчики


// Перший етап (виявлення циклу):
// Використовуємо два покажчики: slow і fast
// slow рухається на 1 крок
// fast рухається на 2 кроки
// Якщо є цикл, вони обов'язково зустрінуться

// Другий етап (знаходження початку циклу):
// Повертаємо slow на початок списку
// Рухаємо обидва покажчики з однаковою швидкістю
// Точка зустрічі - початок циклу


// Чому це працює:
// Якщо є цикл, швидкий покажчик "наздожене" повільний
// Коли вони зустрінуться, швидкий пройде вдвічі більшу відстань
// Різниця між пройденими відстанями кратна довжині циклу
// На другому етапі покажчики зустрінуться на початку циклу


export class LinkedList {
    value: number;
    next: LinkedList | null;
    constructor(value: number) {
      this.value = value;
      this.next = null;
    }
   }
   
   export function findLoop(head: LinkedList): LinkedList {
    // Використовуємо алгоритм Флойда (Floyd's Cycle Finding Algorithm)
    // або алгоритм "черепахи і зайця"
    
    // Ініціалізуємо два покажчики
    let slow: LinkedList | null = head;
    let fast: LinkedList | null = head;
    
    // Перший етап: знаходження точки перетину
    // Швидкий рухається вдвічі швидше за повільний
    while (fast?.next) {
      slow = slow!.next;
      fast = fast.next.next;
      
      // Якщо покажчики зустрілися - знайшли цикл
      if (slow === fast) {
        break;
      }
    }
    
    // Другий етап: знаходження початку циклу
    // Повертаємо один покажчик на початок
    slow = head;
    
    // Рухаємо обидва покажчики з однаковою швидкістю
    while (slow !== fast) {
      slow = slow!.next;
      fast = fast!.next;
    }
    
    // Точка де зустрілись - початок циклу
    return slow!;
   }



   // 1 -> 2 -> 3 -> 4 -> 5
//           ^         |
//           |_________|

const head = new LinkedList(1);
head.next = new LinkedList(2);
head.next.next = new LinkedList(3);
head.next.next.next = new LinkedList(4);
head.next.next.next.next = new LinkedList(5);
head.next.next.next.next.next = head.next.next; // Створюємо цикл до 3

const result = findLoop(head);
console.log(result.value); // Виведе: 3