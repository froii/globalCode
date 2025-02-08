//  функцію для перевірки, чи збалансовані дужки в рядку.
//  Це означає, що кожна відкривна дужка повинна мати відповідну закриваючу дужку в правильному порядку.

// У цьому рішенні використовується підхід на основі стека, щоб перевірити, чи збалансовані дужки. Ось як це працює:

// Ми підтримуємо стек, щоб відстежувати відкриття дужок
// Коли ми зустрічаємо відкриваючу дужку, ми штовхаємо її на стек
// Коли ми зустрічаємо закриваючу дужку:

// Якщо стек порожній, поверніть false (закриваюча дужка без відповідного відкриття)
// Якщо остання відкривна дужка не збігається з поточною закриваючою дужкою, поверніть false
// В іншому випадку витягніть відповідну відкриваючу дужку зі стеку

// Нарешті, повертає істину, лише якщо всі дужки збігаються (стек порожній)

// Часова складність: O(n), де n – довжина рядка
// Складність простору: O(n) у гіршому випадку для зберігання всіх відкриваючих дужок
// Обробляє три типи дужок: (), [], {}
// Ігнорує символи без дужок

// Функція поверне false, якщо:
// Закриваюча дужка з'являється перед відповідною відкриваючою дужкою
// Дужки закриті в неправильному порядку
// Є незакриті відкриваючі дужки
// Є невідповідні закриваючі дужки

export function balancedBrackets(string: string): boolean {
    // Stack to keep track of opening brackets
    const stack: string[] = [];
    
    // Define matching brackets
    const openBrackets = "({[";
    const closeBrackets = ")}]";
    const bracketPairs: { [key: string]: string } = {
      ")": "(",
      "}": "{",
      "]": "["
    };
  
    // Iterate through each character in the string
    for (const char of string) {
      // If it's an opening bracket, push to stack
      if (openBrackets.includes(char)) {
        stack.push(char);
      }
      // If it's a closing bracket
      else if (closeBrackets.includes(char)) {
        // If stack is empty, we have a closing bracket without an opening one
        if (stack.length === 0) {
          return false;
        }
  
        // If the last opening bracket doesn't match current closing bracket
        if (stack[stack.length - 1] !== bracketPairs[char]) {
          return false;
        }
  
        // Remove the matched opening bracket
        stack.pop();
      }
    }
  
    // Return true if all brackets were matched (stack is empty)
    return stack.length === 0;
  }
  
  // Example usage:
  // console.log(balancedBrackets("([])(){}(())()()"));  // true
  // console.log(balancedBrackets("[(])"));              // false
  // console.log(balancedBrackets("((("));               // false
  // console.log(balancedBrackets(")"));                 // false