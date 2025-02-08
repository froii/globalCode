
//  пошуку найдовшого паліндрому у рядку. два підходи: простіший та оптимізований.

// Часова складність: O(n²), де n - довжина рядка. Для кожного символу можемо розширюватись до країв рядка
// Просторова складність: O(1)

// Важливі моменти:
// Алгоритм враховує як парні, так і непарні паліндроми
// Повертає перший знайдений паліндром максимальної довжини
// Коректно обробляє граничні випадки (пустий рядок, один символ)
// Не створює додаткових копій рядка, працює з оригінальним рядком

// Цей підхід є ефективним для більшості практичних випадків. 
// Існує також алгоритм Манакера зі складністю O(n), але він складніший в реалізації і зазвичай не дає значного приросту продуктивності на реальних даних.


// Оптимізований підхід використовуючи метод розширення навколо центру - поки дані співпадають - права і ліва буква, то розширюємо пошук ( тому і починаємо з цетрна )
export function longestPalindromicSubstring(string: string): string {
    // Якщо рядок пустий або складається з 1 символу
    if (string.length < 2) return string;
  
    let start = 0;
    let maxLength = 1;
  
    // Функція розширення навколо центру
    function expandAroundCenter(left: number, right: number): void {
      // Розширюємось поки символи однакові і не вийшли за межі
      while (
        left >= 0 && 
        right < string.length && 
        string[left] === string[right]
      ) {
        // Якщо знайшли довший паліндром
        if (right - left + 1 > maxLength) {
          start = left;
          maxLength = right - left + 1;
        }
        left--;
        right++;
      }
    }
  
    // Перевіряємо кожну можливу позицію центру
    for (let i = 0; i < string.length; i++) {
      // Для паліндромів непарної довжини
      expandAroundCenter(i, i);
      // Для паліндромів парної довжини
      expandAroundCenter(i, i + 1);
    }
  
    return string.slice(start, start + maxLength);
  }
  
  // Тестуємо функцію
  function testPalindrome(): void {
    const testCases = [
      "abaxyzzyxf",    // очікуємо "xyzzyx"
      "it's highnoon", // очікуємо "noon"
      "abba",          // очікуємо "abba"
      "a",             // очікуємо "a"
      "",              // очікуємо ""
      "abcba",         // очікуємо "abcba"
      "abb"            // очікуємо "bb"
    ];
  
    testCases.forEach((test, index) => {
      console.log(`Тест ${index + 1}:`);
      console.log(`Вхідний рядок: "${test}"`);
      console.log(`Найдовший паліндром: "${longestPalindromicSubstring(test)}"`);
      console.log('---');
    });
  }
  
  // Запускаємо тести
  testPalindrome();



  export function longestPalindromicSubstringManakera(string: string): string {
    if (string.length < 2) return string;
  
    // Перетворюємо рядок, додаючи спеціальні символи
    const processedString = '#' + string.split('').join('#') + '#';
    const n = processedString.length;
    
    // Масив для зберігання радіусів паліндромів
    const p: number[] = new Array(n).fill(0);
    
    let center = 0;      // Центр поточного паліндрому
    let right = 0;       // Права межа поточного паліндрому
    let maxLength = 0;   // Довжина найдовшого паліндрому
    let maxCenter = 0;   // Центр найдовшого паліндрому
    
    for (let i = 0; i < n; i++) {
      // Якщо i менше правої межі, використовуємо симетрію
      if (i < right) {
        const mirror = 2 * center - i;
        p[i] = Math.min(right - i, p[mirror]);
      }
      
      // Розширюємо паліндром навколо i
      let leftBound = i - (p[i] + 1);
      let rightBound = i + (p[i] + 1);
      
      while (
        leftBound >= 0 && 
        rightBound < n && 
        processedString[leftBound] === processedString[rightBound]
      ) {
        p[i]++;
        leftBound--;
        rightBound++;
      }
      
      // Оновлюємо center і right, якщо потрібно
      if (i + p[i] > right) {
        center = i;
        right = i + p[i];
      }
      
      // Оновлюємо інформацію про найдовший паліндром
      if (p[i] > maxLength) {
        maxLength = p[i];
        maxCenter = i;
      }
    }
    
    // Відновлюємо оригінальний паліндром
    const start = Math.floor((maxCenter - maxLength) / 2);
    return string.slice(start, start + maxLength);
  }
  
  // Тестуємо оптимізовану версію
  function testOptimizedPalindrome(): void {
    const testCases = [
      "abaxyzzyxf",      // xyzzyx
      "abcdefggfedcba",  // abcdefggfedcba
      "abababababa",     // abababababa
      "aaaaaaaaa",       // aaaaaaaaa
      "abcde",           // a/b/c/d/e (будь-який символ)
      "bananas"          // anana
    ];
  
    console.log("Тестування оптимізованої версії:\n");
    
    testCases.forEach((test, index) => {
      const start = performance.now();
      const result = longestPalindromicSubstringManakera(test);
      const end = performance.now();
      
      console.log(`Тест ${index + 1}:`);
      console.log(`Вхід: "${test}"`);
      console.log(`Результат: "${result}"`);
      console.log(`Час виконання: ${(end - start).toFixed(4)}ms`);
      console.log('---');
    });
  }
  
  // Запускаємо тести
  testOptimizedPalindrome();