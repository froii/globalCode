// Levenshtein Distance algorithm in TypeScript.
// Цей алгоритм обчислює мінімальну кількість операцій (вставок, видалень або замін), 
// необхідних для перетворення одного рядка в інший.

// Як це працює:
// Створює матрицю, де matrix[i][j]представляє мінімум операцій, необхідних для перетворення перших i символів str1 у перші j символів str2
// Ініціалізує перший рядок і стовпець з поступовими числами (представляючи необхідні видалення/вставки)
// Для кожної комірки в матриці:

// Якщо символи однакові: скопіюйте значення діагоналі
// Якщо відрізняється: візьміть мінімум:

// Видалення (значення вище + 1)
// Вставка (значення зліва + 1)
// Заміна (діагональне значення + 1)


// Часова складність: O(nm), де n і m – довжини вхідних рядків. Просторова складність: O(nm) для матриці

// Цей алгоритм зазвичай використовується в:
// Перевірки орфографії
// Вирівнювання послідовності ДНК
// Обробка природної мови
// Нечітке зіставлення рядків


export function levenshteinDistance(str1: string, str2: string): number {
    // Create a matrix of dimensions (str1.length + 1) x (str2.length + 1)
    const matrix: number[][] = Array(str1.length + 1)
        .fill(null)
        .map(() => Array(str2.length + 1).fill(0));
    
    // Fill first row and column
    for (let i = 0; i <= str1.length; i++) {
        matrix[i][0] = i;
    }
    for (let j = 0; j <= str2.length; j++) {
        matrix[0][j] = j;
    }
    
    // Fill rest of the matrix
    for (let i = 1; i <= str1.length; i++) {
        for (let j = 1; j <= str2.length; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j] + 1,     // deletion
                    matrix[i][j - 1] + 1,     // insertion
                    matrix[i - 1][j - 1] + 1  // substitution
                );
            }
        }
    }
    
    return matrix[str1.length][str2.length];
}


console.log(levenshteinDistance("abc", "yabd")); // Output: 2
// Operations: insert 'y', substitute 'c' with 'd'

console.log(levenshteinDistance("horse", "ros")); // Output: 3
// Operations: delete 'h', substitute 'r' with 'r', delete 'e'

console.log(levenshteinDistance("", "abc")); // Output: 3
// Operations: insert 'a', insert 'b', insert 'c'

console.log(levenshteinDistance("abc", "")); // Output: 3
// Operations: delete 'a', delete 'b', delete 'c'