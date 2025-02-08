
// Це завдання на знаходження точки перетину (злиття) двох зв'язаних списків

// Як це працює:
// Коли вказівник досягає кінця свого списку, він переходить на початок іншого списку
// Якщо списки перетинаються, вказівники зустрінуться в точці перетину
// Якщо перетину немає, обидва вказівники стануть null
//
// Математика за цим:
// Якщо a - довжина унікальної частини першого списку
// b - довжина унікальної частини другого списку
// c - довжина спільної частини
// Тоді перший вказівник пройде: a + c + b
// Другий вказівник пройде: b + c + a
// В результаті обидва пройдуть однакову відстань і зустрінуться

// Часова складність: O(n + m), де n і m - довжини списків
// Просторова складність: O(1), використовується константна додаткова пам'ять

// Де використовується:
// В системах кешування для виявлення циклічних посилань
// В мережевих протоколах для виявлення точок з'єднання
// В системах версійного контролю для знаходження спільного предка
// В алгоритмах виявлення циклів у графах
// В системах відстеження залежностей
//
// Важливі особливості:
// Алгоритм знаходить перший спільний вузол двох списків
// Працює навіть якщо списки різної довжини
// Ефективний з точки зору пам'яті
// Може бути модифікований для виявлення циклів
//
// Цей алгоритм особливо корисний в ситуаціях, коли потрібно знайти точку перетину двох послідовностей або шляхів у графі.


export class LinkedList {
    value: number;
    next: LinkedList | null;

    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}

export function mergingLinkedLists(linkedListOne: LinkedList | null, linkedListTwo: LinkedList | null) {
  let One = linkedListOne
  let Two = linkedListTwo

  while (One !== Two) {
    One = One === null ? linkedListTwo : One.next;
    Two = Two === null ? linkedListOne : Two.next;
  }

  return One;
}

// Функція для створення тестового прикладу
function createTestCase(): [LinkedList, LinkedList] {
    // Створюємо спільну частину
    let common = new LinkedList(8);
    common.next = new LinkedList(10);

    // Створюємо перший список
    let list1 = new LinkedList(1);
    list1.next = new LinkedList(3);
    list1.next.next = new LinkedList(5);
    list1.next.next.next = common;

    // Створюємо другий список
    let list2 = new LinkedList(2);
    list2.next = new LinkedList(4);
    list2.next.next = common;

    return [list1, list2];
}

// Функція для виведення списку
function printList(head: LinkedList) {
    const values = [];
    let current: LinkedList | null = head;

    while (current !== null) {
        values.push(current.value);
        current = current.next;
    }

    console.log(values.join(' -> '));
}

// Тестуємо
const [list1, list2] = createTestCase();

console.log("Перший список:");
printList(list1);

console.log("Другий список:");
printList(list2);

const intersection = mergingLinkedLists(list1, list2);
console.log("Точка перетину:", intersection ? intersection.value : "немає перетину");

// Перший список:
// 1 -> 3 -> 5 -> 8 -> 10
// Другий список:
// 2 -> 4 -> 8 -> 10
// Точка перетину: 8