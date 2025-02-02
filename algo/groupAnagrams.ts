
//  функція для групування анаграм - створюємо ключ від сортованого слова, і всі слова які мають таке значення, 
//  після сортування записуємо в масив який має ключ сортування.


// Для кожного слова ми створимо відсортовану версію як ключ
// Згрупуйте слова, які мають однаковий сортований ключ
// Повертає згруповані анаграми як масив масивів

// Кожен внутрішній масив міститиме слова, які є анаграмами одне одного. схожі - ["eat", "tea", "ate"]
// Порядок груп і порядок слів у кожній групі не має значення для правильності рішення.

export function groupAnagrams(words: string[]): string[][] {
    // Create a Map to store sorted characters as keys and arrays of anagrams as values
    const anagramGroups = new Map<string, string[]>();
    
    // Iterate through each word
    for (const word of words) {
      // Sort the characters of the word to create a key
      const sortedKey = word.split('').sort().join('');
      
      // If we've seen this key before, add the word to its group
      // Otherwise, create a new group with this word
      if (anagramGroups.has(sortedKey)) {
        anagramGroups.get(sortedKey)!.push(word);
      } else {
        anagramGroups.set(sortedKey, [word]);
      }
    }
    
    // Convert the Map values to an array of arrays and return
    return Array.from(anagramGroups.values());
  }

const words = ["eat", "tea", "tan", "ate", "nat", "bat"];
const result = groupAnagrams(words);
// Result: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]