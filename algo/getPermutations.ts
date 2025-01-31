// Це корисно для задач, де потрібно перебрати всі можливі варіанти розташування елементів, наприклад:
// Розв'язання головоломок
// Оптимізаційні задачі
// Комбінаторні алгоритми


// Якщо в масиві один елемент - повертаємо цей масив як є
// Інакше для кожного елемента масиву:

// Беремо цей елемент
// Рекурсивно знаходимо всі перестановки решти елементів
// Додаємо поточний елемент на початок кожної знайденої перестановки


// Допоміжні функції:
// notEq - порівнює два значення на нерівність
// prepend - додає елемент на початок масиву

const notEq = <T>(first: T) => (second: T): boolean => first !== second;

const prepend = <T>(x: T) => (xs: T[]): T[] => [x, ...xs];

export function getPermutations<T>(array: T[]): T[][] {
  if (array.length === 1) return [array];

//   flatMap автоматично "розгладжує" цю структуру в один рівень, даючи нам просто масив перестановок, а не массив в масиві
  return array.flatMap(item => 
    getPermutations(array.filter(notEq(item))).map(prepend(item))
  );
}


// With numbers
const numPerms = getPermutations([1, 2, 3]);

// With strings
const strPerms = getPermutations(['a', 'b', 'c']);

// With custom types
interface User {
  id: number;
  name: string;
}

const userPerms = getPermutations<User>([
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' }
]);