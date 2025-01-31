// Аналіз складності: Рішення для динамічного програмування:
// Часова складність: O (ширина × висота)
// Складність простору: O (ширина × висота)

// Аналіз складності: Математичне рішення:
// Часова складність: O (ширина + висота)
// Просторова складність: O(1)

// Цей алгоритм використовується в багатьох сферах:

// Робототехніка:
// Планування маршруту роботів на складах
// Оптимізація руху автоматизованих систем
// Навігація дронів у обмеженому просторі

// Ігрова індустрія:
// Розрахунок можливих шляхів персонажа
// Головоломки на основі сітки
// Генерація рівнів

// Логістика:
// Планування маршрутів доставки
// Оптимізація складських операцій
// Аналіз ефективності маршрутів

// Математичний підхід зазвичай найшвидший
export function fastestTraverseGraph(width: number, height: number): number {
    // Використовуємо меншу кількість для оптимізації обчислень
    const smallerNum = Math.min(width - 1, height - 1);
    const biggerNum = Math.max(width - 1, height - 1);
    let result = 1;
    
    // Оптимізоване обчислення комбінації
    for (let i = 0; i < smallerNum; i++) {
        result *= (biggerNum + i + 1) / (i + 1);
    }
    
    return Math.round(result);
}

// Оптимізований DP підхід швидший за базовий DP,  
export function optimizedNumberOfWaysToTraverseGraph(width: number, height: number): number {
    const dp: number[] = new Array(width).fill(1);
    
    for (let i = 1; i < height; i++) {
        for (let j = 1; j < width; j++) {
            dp[j] += dp[j - 1];
        }
    }
    
    return dp[width - 1];
}


function numberOfWaysToTraverseGraph(width: number, height: number): number {
    // Create a 2D array to store number of ways to reach each point
    const dp: number[][] = Array(height)
        .fill(0)
        .map(() => Array(width).fill(0));
    
    // Fill first row - can only go right
    for (let x = 0; x < width; x++) {
        dp[0][x] = 1;
    }
    
    // Fill first column - can only go down
    for (let y = 0; y < height; y++) {
        dp[y][0] = 1;
    }
    
    // Fill rest of the grid
    for (let y = 1; y < height; y++) {
        for (let x = 1; x < width; x++) {
            // Number of ways to reach current cell is sum of:
            // 1. Ways to reach cell above (going down)
            // 2. Ways to reach cell to the left (going right)
            dp[y][x] = dp[y-1][x] + dp[y][x-1];
        }
    }
    
    return dp[height-1][width-1];
}



// alternative math method 
function numberOfWaysToTraverseGraphMath(width: number, height: number): number {
    // Using combination formula: (r+c-2)! / ((r-1)! * (c-1)!)
    const numerator = factorial(width + height - 2);
    const denominator = factorial(width - 1) * factorial(height - 1);
    return numerator / denominator;
}

function factorial(n: number): number {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}


// Давайте протестуємо всі три підходи з різними розмірами сітки

// Тест 1: маленька сітка 3x3
console.log("=== Test 1: 3x3 grid ===");
console.log("Basic DP approach:", numberOfWaysToTraverseGraph(3, 3));         // 6
console.log("Optimized DP approach:", optimizedNumberOfWaysToTraverseGraph(3, 3)); // 6
console.log("Mathematical approach:", numberOfWaysToTraverseGraphMath(3, 3));  // 6
console.log();

// Тест 2: прямокутна сітка 4x3
console.log("=== Test 2: 4x3 grid ===");
console.log("Basic DP approach:", numberOfWaysToTraverseGraph(4, 3));         // 10
console.log("Optimized DP approach:", optimizedNumberOfWaysToTraverseGraph(4, 3)); // 10
console.log("Mathematical approach:", numberOfWaysToTraverseGraphMath(4, 3));  // 10
console.log();

// Тест 3: більша сітка 5x5
console.log("=== Test 3: 5x5 grid ===");
console.log("Basic DP approach:", numberOfWaysToTraverseGraph(5, 5));         // 70
console.log("Optimized DP approach:", optimizedNumberOfWaysToTraverseGraph(5, 5)); // 70
console.log("Mathematical approach:", numberOfWaysToTraverseGraphMath(5, 5));  // 70
console.log();

// Тест 4: довга вузька сітка 2x6
console.log("=== Test 4: 2x6 grid ===");
console.log("Basic DP approach:", numberOfWaysToTraverseGraph(2, 6));         // 6
console.log("Optimized DP approach:", optimizedNumberOfWaysToTraverseGraph(2, 6)); // 6
console.log("Mathematical approach:", numberOfWaysToTraverseGraphMath(2, 6));  // 6
console.log();

// Тест 5: велика сітка для порівняння продуктивності 10x10
console.log("=== Test 5: 10x10 grid ===");
console.time('Basic DP');
console.log("Basic DP approach:", numberOfWaysToTraverseGraph(10, 10));
console.timeEnd('Basic DP');

console.time('Optimized DP');
console.log("Optimized DP approach:", optimizedNumberOfWaysToTraverseGraph(10, 10));
console.timeEnd('Optimized DP');

console.time('Mathematical');
console.log("Mathematical approach:", numberOfWaysToTraverseGraphMath(10, 10));
console.timeEnd('Mathematical');

// Test 1: Small grid (3x3)
console.log("\nTest 1: 3x3 grid");
console.time('Fastest Method');
console.log("Result:", fastestTraverseGraph(3, 3));
console.timeEnd('Fastest Method');

// Test 2: Medium grid (10x10)
console.log("\nTest 2: 10x10 grid");
console.time('Fastest Method');
console.log("Result:", fastestTraverseGraph(10, 10));
console.timeEnd('Fastest Method');

// Test 3: Large grid (20x20)
console.log("\nTest 3: 20x20 grid");
console.time('Fastest Method');
console.log("Result:", fastestTraverseGraph(20, 20));
console.timeEnd('Fastest Method');

// Test 4: Very large grid (100x100)
console.log("\nTest 4: 100x100 grid");
console.time('Fastest Method');
console.log("Result:", fastestTraverseGraph(100, 100));
console.timeEnd('Fastest Method');