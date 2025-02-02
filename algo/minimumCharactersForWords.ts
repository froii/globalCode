
// знайти мінімальну кількість символів, необхідних для побудови всіх заданих слів
// 

// Це рішення працює за допомогою:
// Створення карти для відстеження максимальної частоти, необхідної для кожного символу в усіх словах

// Опрацювання кожного слова:
// Підрахунок частоти символів у поточному слові
// Оновлення максимальних частот при необхідності
// Перетворення частотної карти в масив символів

// Часова складність: O(n * l), де n – кількість слів, а l – довжина найдовшого слова. 
// Просторова складність: O(c), де c – кількість унікальних символів у всіх словах

// Ключові особливості:
// Обробляє спеціальні символи та знаки пунктуації
// Працює зі словами будь-якої довжини
// Враховує повторювані символи в словах
// Повертає всі символи, необхідні для створення будь-якого слова у вхідному масиві


export function minimumCharactersForWords(words: string[]): string[] {
    // Create a map to store the maximum frequency of each character
    const maxCharFrequencies: { [key: string]: number } = {};
    
    // Process each word
    for (const word of words) {
      // Get current word's character frequencies
      const currentCharFrequencies: { [key: string]: number } = {};
      
      // Count frequencies in current word
      for (const char of word) {
        currentCharFrequencies[char] = (currentCharFrequencies[char] || 0) + 1;
      }
      
      // Update maximum frequencies
      for (const char in currentCharFrequencies) {
        const currentFreq = currentCharFrequencies[char];
        const maxFreq = maxCharFrequencies[char] || 0;
        
        // Update if current frequency is higher
        if (currentFreq > maxFreq) {
          maxCharFrequencies[char] = currentFreq;
        }
      }
    }
    
    // Convert the frequency map to array of characters
    const result: string[] = [];
    for (const char in maxCharFrequencies) {
      const frequency = maxCharFrequencies[char];
      // Add the character frequency times
      for (let i = 0; i < frequency; i++) {
        result.push(char);
      }
    }
    
    return result;
  }

  console.log(minimumCharactersForWords(["this", "that", "did", "deed", "them!", "a"]));
// Output: ["t", "t", "h", "i", "s", "a", "d", "d", "e", "e", "m", "!"]