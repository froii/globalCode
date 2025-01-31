const coins = [5, 7, 1, 1, 2, 3, 22]
// O(n log n) - sort is O(n) and for is O(log n)
// function that returns the minimum amount of number that you cannot create

export function nonConstructibleChange(coins: number[]): number {
    const orderCoins = coins.sort((a,b) => a-b)
    let sum = 0

    for (let num of orderCoins) {
        if(sum + 1 < num) break
        sum += num
    }

    return sum + 1
}

const result = nonConstructibleChange(coins)
console.log(result)



// Given an array of positive integers representing the values of coins in your
// possession, write a function that returns the minimum amount of change (the
// minimum sum of money) that you cannot create. The given coins can have
// any positive integer value and aren't necessarily unique (i.e., you can have
// multiple coins of the same value).
//
// For example, if you're given coins = [1, 2, 5], the minimum
// amount of change that you can't create is 4. . If you're given no
// coins, the minimum amount of change that you can't create is 1