// Це завдання про додавання двох чисел, представлених у вигляді зв'язаних списків.
// Кожен вузол містить одну цифру, а число представлено в зворотному порядку.
// Цей алгоритм особливо корисний, коли потрібно працювати з дуже великими числами, які не поміщаються в стандартні числові типи даних.

// Де використовується:
// В калькуляторах для роботи з великими числами
// В криптографічних алгоритмах
// В системах, де потрібно працювати з числами, більшими за стандартні типи даних
// В задачах на обробку великих чисел в програмуванні

// Пояснення алгоритму:
// Створюємо фіктивний вузол (dummy node) для зручності роботи зі списком
// Проходимо по обох списках одночасно, додаючи відповідні цифри
// Враховуємо перенесення (carry) при додаванні
// Створюємо новий вузол для кожної цифри результату
//
// Складність:
// Часова складність: O(max(n, m)), де n і m - довжини вхідних списків
// Просторова складність: O(max(n, m)) для зберігання результату


export class LinkedList {
    value: number;
    next: LinkedList | null;

    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}

export function sumOfLinkedLists(linkedListOne: LinkedList, linkedListTwo: LinkedList) {
    // Створюємо новий список для результату
    const dummyHead = new LinkedList(0);
    let current = dummyHead;

    // Змінна для перенесення в наступний розряд
    let carry = 0;

    // Поточні вузли обох списків
    let nodeOne = linkedListOne;
    let nodeTwo = linkedListTwo;

    // Продовжуємо поки є цифри в будь-якому з списків або є перенесення
    while (nodeOne !== null || nodeTwo !== null || carry !== 0) {
        // Отримуємо значення з поточних вузлів або 0, якщо вузол відсутній
        const valueOne = nodeOne !== null ? nodeOne.value : 0;
        const valueTwo = nodeTwo !== null ? nodeTwo.value : 0;

        // Обчислюємо суму цифр та перенесення
        const sumOfValues = valueOne + valueTwo + carry;

        // Нова цифра - остача від ділення на 10
        const newValue = sumOfValues % 10;
        // Нове перенесення - цілочисельне ділення на 10
        carry = Math.floor(sumOfValues / 10);

        // Створюємо новий вузол з обчисленою цифрою
        current.next = new LinkedList(newValue);
        current = current.next;

        // Переходимо до наступних вузлів, якщо вони є
        nodeOne = nodeOne !== null ? nodeOne.next : null;
        nodeTwo = nodeTwo !== null ? nodeTwo.next : null;
    }

    return dummyHead.next;
}




// Функція для створення списку з масиву
function createLinkedList(arr: number[]): LinkedList {
    const dummy = new LinkedList(0);
    let current = dummy;

    for (const num of arr) {
        current.next = new LinkedList(num);
        current = current.next;
    }

    return dummy.next!;
}

// Функція для виведення списку
function printList(head: LinkedList | null) {
    const values = [];
    let current = head;

    while (current !== null) {
        values.push(current.value);
        current = current.next;
    }

    console.log(values.join(' -> '));
}

// Приклад використання
const list1 = createLinkedList([2, 4, 3]); // 342
const list2 = createLinkedList([5, 6, 4]); // 465

console.log("Перший список (342):");
printList(list1);

console.log("Другий список (465):");
printList(list2);

const sum = sumOfLinkedLists(list1, list2);
console.log("Результат (807):");
printList(sum);

//
// Перший список (342):
// 2 -> 4 -> 3
// Другий список (465):
// 5 -> 6 -> 4
// Результат (807):
// 7 -> 0 -> 8