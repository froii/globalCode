// Time complexity: O(n * m) where n is the target amount and m is number of denominations
// Space complexity: O(n) for the numOfCoins array
// The key difference between this and numberOfWaysToMakeChange is that this finds the minimum number of coins needed, 
// while the previous function counted all possible combinations.

function minNumberOfCoinsForChange(n: number, denoms: number[]): number {
    // Create array filled with Infinity to store minimum coins needed for each amount
    const numOfCoins: number[] = new Array(n + 1).fill(Infinity);
    
    // Base case: 0 coins needed to make 0 change
    numOfCoins[0] = 0;
    
    // For each denomination
    for (const denom of denoms) {
        // For each amount from the coin value up to n
        for (let amount = denom; amount <= n; amount++) {
            // Take minimum between current way and using current coin
            numOfCoins[amount] = Math.min(
                numOfCoins[amount],
                1 + numOfCoins[amount - denom]
            );
        }
    }
    
    // Return the result, if still Infinity then it's impossible to make change
    return numOfCoins[n] === Infinity ? -1 : numOfCoins[n];
}


// Створює масив numOfCoins, де numOfCoins[i] представляє мінімум монет, необхідних для суми i
// Базовий варіант: для суми 0 потрібно 0 монет, тому numOfCoins[0] = 0

// Для кожного номіналу монети:
// Перебирайте суми від вартості монети до цілі

// Для кожної суми візьміть мінімум між:
// Поточний мінімум для цієї суми
// 1 (з використанням поточної монети) + мінімум монет, необхідних для залишку


// Making change for 7 using coins [1, 5, 10]
console.log(minNumberOfCoinsForChange(7, [1, 5, 10])); // Output: 3
// Minimum coins: [1, 1, 5] (3 coins)

// Making change for 6 using coins [1, 5]
console.log(minNumberOfCoinsForChange(6, [1, 5])); // Output: 2
// Minimum coins: [1, 5] (2 coins)

// Making change for 4 using coins [2, 3]
console.log(minNumberOfCoinsForChange(4, [2, 3])); // Output: 2
// Minimum coins: [2, 2] (2 coins)

// Impossible case
console.log(minNumberOfCoinsForChange(3, [2])); // Output: -1
// Cannot make 3 using only 2's