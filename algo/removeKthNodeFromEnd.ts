// Це реалізація алгоритму видалення k-того елементу з кінця у зв'язаному списку (Linked List) на TypeScript.
// Алгоритм використовує техніку "двох вказівників" (two pointers), де один вказівник випереджає інший на k позицій.
// Це дозволяє знайти потрібний елемент за один прохід по списку, що робить алгоритм ефективним.
// Такий підхід особливо корисний, коли ми не знаємо загальну довжину списку і хочемо уникнути додаткового проходу для підрахунку елементів.

// LinkedList - це структура даних, де кожен елемент (вузол) містить значення і посилання на наступний елемент
// Функція removeKthNodeFromEnd видаляє k-тий елемент з кінця списку
//
// Де використовується?
// В задачах, де потрібно ефективно працювати з послідовними даними
// У реальних системах: історія браузера, плейлисти в медіаплеєрах
// В реалізаціях черг та стеків
//
// Часова складність: O(n), де n - довжина списку
// Просторова складність: O(1), оскільки використовується фіксована кількість додаткової пам'яті

export class LinkedList {
    value: number;
    next: LinkedList | null;

    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}

export function removeKthNodeFromEnd(head: LinkedList, k: number) {
    // Використовуємо два вказівника: first та second
    let first = head;
    let second = head;
    let counter = 1;

    // Просуваємо first на k позицій вперед
    while (counter <= k) {
        first = first.next!;
        counter++;
    }

    // Якщо first став null, значить треба видалити head
    if (first === null) {
        head.value = head.next!.value;
        head.next = head.next!.next;
        return;
    }

    // Рухаємо обидва вказівники поки first не дійде до кінця
    while (first.next !== null) {
        first = first.next;
        second = second.next!;
    }

    // Видаляємо k-тий вузол з кінця
    second.next = second.next!.next;
}


// Створюємо список: 1 -> 2 -> 3 -> 4 -> 5
let head = new LinkedList(1);
head.next = new LinkedList(2);
head.next.next = new LinkedList(3);
head.next.next.next = new LinkedList(4);
head.next.next.next.next = new LinkedList(5);

// Функція для виведення списку
function printList(head: LinkedList) {
    let current = head;
    let result = [];
    while (current !== null) {
        result.push(current.value);
        current = current.next!;
    }
    console.log(result.join(" -> "));
}

console.log("Початковий список:");
printList(head);

// Видаляємо 2-й елемент з кінця (4)
removeKthNodeFromEnd(head, 2);

console.log("Список після видалення 2-го елемента з кінця:");
printList(head);

// Початковий список:
// 1 -> 2 -> 3 -> 4 -> 5
// Список після видалення 2-го елемента з кінця:
// 1 -> 2 -> 3 -> 5