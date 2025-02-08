

// Рішення:
// Зберігає всі вихідні інтервали (кілька пробілів залишаються на своїх початкових позиціях)
// Обробляє крайові випадки, наприклад рядки з пробілами на початку/закінченням
// Працює з рядками з одного слова
// Зберігає спеціальні символи та знаки пунктуації

// Часова складність: O(n), де n — довжина рядка. Просторова складність: O(n) для зберігання масиву символів
// Ключові особливості цієї реалізації:

// Він економить простір, оскільки змінює масив на місці під час розворотів
// Він зберігає точний інтервал між словами
// Він правильно обробляє всі крайові випадки
// Він зберігає початкове положення всіх пробілів


export function reverseWordsInString(string: string): string {
    // Convert string to array of characters for easier manipulation
    const chars: string[] = string.split('');
    
    // First, reverse the entire array of characters
    reverseArray(chars, 0, chars.length - 1);
    
    // Track the start of each word
    let wordStart = 0;
    
    // Iterate through the array to find and reverse each word
    for (let i = 0; i <= chars.length; i++) {
      // If we've reached a space or end of string, we reverse the word
      if (i === chars.length || chars[i] === ' ') {
        reverseArray(chars, wordStart, i - 1);
        wordStart = i + 1;
      }
    }
    
    // Join the characters back into a string
    return chars.join('');
  }
  
  // Helper function to reverse a portion of an array in place
  function reverseArray(array: string[], start: number, end: number): void {
    while (start < end) {
      const temp = array[start];
      array[start] = array[end];
      array[end] = temp;
      start++;
      end--;
    }
  }


 console.log(reverseWordsInString("AlgoExpert is the best!"));
// Output: "best! the is AlgoExpert"

console.log(reverseWordsInString("  Hello   World!  "));
// Output: "  World!   Hello  "