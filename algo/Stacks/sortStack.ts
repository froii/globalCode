
// Цей алгоритм використовує рекурсію для сортування стеку за зростанням, зберігаючи властивості структури даних стек (використовуючи тільки операції push та pop).

// Time Complexity: O(n²)   Space Complexity: O(n)

// Початковий стан:
// stack = [4, 2, 5, 1]
// tempStack = []
// Беремо 1: stack = [4, 2, 5], tempStack = [1]
// Беремо 5: stack = [4, 2], 1 < 5, тому 5 додається до tempStac, tempStack = [1, 5]
// Беремо 2: stack = [4]
// 5 > 2, тому 5 повертається: stack = [4, 5]
// tempStack = [1, 2]
// Беремо 4: stack = [5]
// Порівнюємо з tempStack
// Результат: tempStack = [1, 2, 4, 5]
// Повертаємо елементи назад у stack
// Результат: stack = [1, 2, 4, 5]

// Інакше:
// Додаємо елементи в порядку v2, потім v1


// default version 
export function sortStack(stack: number[]): number[] {
    // Базовий випадок: якщо у стеку 1 або менше елементів, повертаємо його як є
    if (stack.length <= 1) {
        return stack;
    }

    // Беремо верхній елемент стеку
    const v1 = stack.pop() as number;
    
    // Рекурсивно сортуємо решту стеку
    sortStack(stack);
    
    // Беремо наступний верхній елемент для порівняння
    const v2 = stack.pop() as number;

    // Порівнюємо елементи та розміщуємо їх у правильному порядку
    if (v2 > v1) {
        // Якщо v2 більший за v1, додаємо v1 назад
        stack.push(v1);
        // Рекурсивно сортуємо стек знову
        sortStack(stack);
        // Додаємо v2 назад
        stack.push(v2);
    } else {
        // Якщо v2 менший або рівний v1, додаємо їх назад у порядку v2, потім v1
        stack.push(v2);
        stack.push(v1);
    }

    return stack;
}


// Функція для виведення стану стеку
function printStack(message: string, stack: number[]): void {
    console.log(`${message}:`, [...stack]);
}

// Приклади використання:
function runExamples(): void {
    // Приклад 1: Простий невідсортований стек
    let stack1 = [4, 2, 5, 1, 3];
    printStack("Початковий стек", stack1);
    sortStack(stack1);
    printStack("Відсортований стек", stack1);

    // Приклад 2: Вже відсортований стек
    let stack2 = [1, 2, 3, 4, 5];
    printStack("Початковий стек", stack2);
    sortStack(stack2);
    printStack("Відсортований стек", stack2);

    // Приклад 3: Стек з повторюваними елементами
    let stack3 = [3, 3, 1, 4, 1, 5, 2];
    printStack("Початковий стек", stack3);
    sortStack(stack3);
    printStack("Відсортований стек", stack3);
}

// Запускаємо приклади
runExamples();

// Приклад 1:
// Початковий стек: [4, 2, 5, 1, 3]
// Відсортований стек: [1, 2, 3, 4, 5]

// Приклад 2:
// Початковий стек: [1, 2, 3, 4, 5]
// Відсортований стек: [1, 2, 3, 4, 5]

// Приклад 3:
// Початковий стек: [3, 3, 1, 4, 1, 5, 2]
// Відсортований стек: [1, 1, 2, 3, 3, 4, 5]