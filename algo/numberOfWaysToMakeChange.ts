// Time complexity: O(n * m) where n is the target amount and m is number of denominations
// Space complexity: O(n) for the numOfCoins array

export function numberOfWaysToMakeChange(n: number, denoms: number[]): number {
    // Create an array to store the number of ways to make change for each amount
    const ways: number[] = new Array(n + 1).fill(0);
    
    // Base case - there is one way to make 0 change (using no coins)
    ways[0] = 1;
    
    // For each denomination
    for (const denom of denoms) {
        // For each amount from the coin value up to n
        for (let amount = denom; amount <= n; amount++) {
            // Add the number of ways we can make change using this coin
            ways[amount] += ways[amount - denom];
        }
    }
    
    return ways[n];
}

// Ми створюємо масив ways, де way[i] представляє кількість способів внести зміни для суми i
// Основний випадок: є 1 спосіб здати гроші на 0 (без монет), тому шляхи[0] = 1
// Для кожного номіналу монети:
// Ми повторюємо всі суми від вартості монети до нашої цільової суми
// До кожної суми ми додаємо кількість способів, якими ми можемо внести зміни за допомогою поточної монети

// Example: Making change for 6 using coins [1, 5]
console.log(numberOfWaysToMakeChange(6, [1, 5])); // Output: 2
// The two ways are: [1,1,1,1,1,1] and [1,5]

// Example: Making change for 10 using coins [1, 5, 10, 25]
console.log(numberOfWaysToMakeChange(10, [1, 5, 10, 25])); // Output: 4
// The four ways are: [1,1,1,1,1,1,1,1,1,1], [5,5], [1,1,1,1,1,5], [10]