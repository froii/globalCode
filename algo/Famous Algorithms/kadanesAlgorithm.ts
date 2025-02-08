// Алгоритм Кадане (Kadane's Algorithm) використовується для знаходження підмасиву з максимальною сумою у одновимірному масиві.

// Переваги цієї реалізації:
// Часова складність: O(n) - один прохід по масиву
// Просторова складність: O(1) - використовує тільки дві змінні
// Простота: легко читати і підтримувати
// Робастність: працює з усіма типами чисел (позитивними, негативними, нулями)

// Де використовується:
// Аналіз фондового ринку: знаходження періоду максимального прибутку
// Обробка сигналів: пошук найсильнішого сигналу в послідовності
// Біоінформатика: аналіз послідовностей ДНК
// Комп'ютерне зору: обробка зображень та пошук патернів
// Аналіз даних: пошук трендів у часових рядах

// Оптимізації які вже включені:
// Починаємо з першого елемента замість 0
// Уникаємо додаткових перевірок в циклі
// Використовуємо Math.max замість if/else
// Мінімальне використання пам'яті

function kadanesAlgorithm(array: number[]): number {
    let maxEndingHere = array[0];
    let maxSoFar = array[0];
    
    for (let i = 1; i < array.length; i++) {
        // Вибираємо що краще: почати новий підмасив чи продовжити існуючий
        maxEndingHere = Math.max(array[i], maxEndingHere + array[i]);
        // Оновлюємо глобальний максимум якщо знайшли кращий
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }
    
    return maxSoFar;
}

// Якщо потрібно також знати позиції підмасиву, можна модифікувати так:
function kadanesAlgorithmWithIndices(array: number[]): { 
    maxSum: number; 
    startIndex: number; 
    endIndex: number; 
} {
    let maxEndingHere = array[0];
    let maxSoFar = array[0];
    let start = 0;
    let end = 0;
    let tempStart = 0;
    
    for (let i = 1; i < array.length; i++) {
        if (array[i] > maxEndingHere + array[i]) {
            maxEndingHere = array[i];
            tempStart = i;
        } else {
            maxEndingHere = maxEndingHere + array[i];
        }
        
        if (maxEndingHere > maxSoFar) {
            maxSoFar = maxEndingHere;
            start = tempStart;
            end = i;
        }
    }
    
    return { maxSum: maxSoFar, startIndex: start, endIndex: end };
}



// Тести
console.log("=== Kadane's Algorithm Tests ===");

// Test 1: Звичайний масив з позитивними і негативними числами
console.log("\nTest 1: Mixed numbers");
console.log(kadanesAlgorithm([3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4])); 
// Expected: 19 (сума підмасиву [1, 3, -2, 3, 4, 7, 2])

// Test 2: Всі негативні числа
console.log("\nTest 2: All negative numbers");
console.log(kadanesAlgorithm([-1, -2, -3, -4, -5])); 
// Expected: -1 (найбільше негативне число)

// Test 3: Всі позитивні числа
console.log("\nTest 3: All positive numbers");
console.log(kadanesAlgorithm([1, 2, 3, 4, 5])); 
// Expected: 15 (вся сума)

// Test 4: Масив з нулями
console.log("\nTest 4: Array with zeros");
console.log(kadanesAlgorithm([-2, 0, -1, 0, 3, 0, -4])); 
// Expected: 3