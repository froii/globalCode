
// методи suffix trie для вставки суфіксів і перевірки наявності рядка

// populateSuffixTrieFrom:
// Бере рядок і додає всі його суфікси до trie
// Для кожної позиції в рядку додається суфікс, що починається з цієї позиції
// Використовує допоміжний метод insertSubstringStartingAtдля очищення коду

// insertSubstringStartingAt:
// Бере початковий індекс і вихідний рядок
// Вставляє всі символи від цього індексу до кінця в спробу
// За потреби створює нові вузли
// Позначає кінець кожного суфікса за допомогою endSymbol

// contains:
// Бере рядок і перевіряє, чи існує він як суфікс у trie
// Слідкує за персонажами через спробу
// Повертає false, якщо будь-який символ відсутній
// Перевіряє endSymbol, щоб переконатися, що це повний суфікс


//  Часова складність: Конструкція: O(n²), де n – довжина рядка (кожен суфікс має довжину до n)
// Пошук: O(m), де m – довжина пошукового рядка
// Космічна складність: O(n²), де n - довжина рядка (збереження всіх суфіксів)


interface TrieNode {
    [key: string]: TrieNode | boolean;
  }
  
  export class SuffixTrie {
    root: TrieNode;
    endSymbol: string;
  
    constructor(string: string) {
      this.root = {};
      this.endSymbol = '*';
      this.populateSuffixTrieFrom(string);
    }
  
    populateSuffixTrieFrom(string: string) {
      // Start at each position to add all possible suffixes
      for (let i = 0; i < string.length; i++) {
        this.insertSubstringStartingAt(i, string);
      }
    }
  
    insertSubstringStartingAt(startIdx: number, string: string) {
      let currentNode = this.root;
  
      // Insert all characters from startIdx to end of string
      for (let i = startIdx; i < string.length; i++) {
        const char = string[i];
        
        // If character doesn't exist in current node, create new node
        if (!(char in currentNode)) {
          currentNode[char] = {};
        }
        
        // Move to next node
        currentNode = currentNode[char] as TrieNode;
      }
  
      // Mark end of suffix with endSymbol
      currentNode[this.endSymbol] = true;
    }
  
    contains(string: string): boolean {
      let currentNode = this.root;
  
      // Traverse the trie following the characters in string
      for (const char of string) {
        // If character isn't found, string is not in trie
        if (!(char in currentNode)) {
          return false;
        }
        
        // Move to next node
        currentNode = currentNode[char] as TrieNode;
      }
  
      // Check if this is a complete suffix by looking for endSymbol
      return this.endSymbol in currentNode;
    }
  }


const trie = new SuffixTrie("babc");
console.log(trie.contains("abc")); // true
console.log(trie.contains("ab")); // false
console.log(trie.contains("babc")); // true