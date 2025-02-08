
// Створюємо масив відстаней і заповнюємо його Infinity
// Встановлюємо відстань до стартової вершини як 0
// Створюємо Set для зберігання невідвіданих вершин

// Основний цикл: Поки є невідвідані вершини:

// Вибираємо невідвідану вершину з найменшою відстанню
// Перевіряємо всіх її сусідів
// Оновлюємо відстані, якщо знайдено коротший шлях

// Фінальна обробка: Замінюємо недосяжні вершини (Infinity) на -1

// Часова складність: O(V² + E), де V - кількість вершин, E - кількість ребер
// Просторова складність: O(V)


export function dijkstrasAlgorithm(start: number, edges: number[][][]): number[] {
    const numberOfVertices = edges.length;
    
    // Ініціалізуємо масив відстаней. 
    // Спочатку всі відстані встановлюємо як Infinity, крім стартової вершини
    const distances: number[] = new Array(numberOfVertices).fill(Infinity);
    distances[start] = 0;
    
    // Set для зберігання вершин, які ще не відвідали
    const unvisited: Set<number> = new Set();
    for (let i = 0; i < numberOfVertices; i++) {
      unvisited.add(i);
    }
    
    // Поки є невідвідані вершини
    while (unvisited.size > 0) {
      // Знаходимо вершину з найменшою відстанню серед невідвіданих
      let currentVertex = getVertexWithMinDistance(distances, unvisited);
      
      // Якщо всі досяжні вершини вже відвідані
      if (distances[currentVertex] === Infinity) {
        break;
      }
      
      // Видаляємо поточну вершину з невідвіданих
      unvisited.delete(currentVertex);
      
      // Перевіряємо всі сусідні вершини
      for (const [neighbor, distance] of edges[currentVertex]) {
        // Якщо вершина вже відвідана - пропускаємо
        if (!unvisited.has(neighbor)) continue;
        
        // Рахуємо нову відстань через поточну вершину
        const newDistance = distances[currentVertex] + distance;
        
        // Якщо знайшли коротший шлях - оновлюємо відстань
        if (newDistance < distances[neighbor]) {
          distances[neighbor] = newDistance;
        }
      }
    }
    
    // Замінюємо недосяжні вершини (Infinity) на -1
    return distances.map(distance => distance === Infinity ? -1 : distance);
  }
  
  // Допоміжна функція для знаходження вершини з найменшою відстанню
  function getVertexWithMinDistance(distances: number[], unvisited: Set<number>): number {
    let minDistance = Infinity;
    let vertex = -1;
    
    for (const v of unvisited) {
      if (distances[v] < minDistance) {
        minDistance = distances[v];
        vertex = v;
      }
    }
    
    return vertex;
  }



  const edges = [
    [[1, 7]], // вершина 0: [сусід, відстань]
    [[2, 6], [3, 20]], // вершина 1
    [[3, 14]], // вершина 2
    [] // вершина 3
  ];
  
  console.log(dijkstrasAlgorithm(0, edges));
  // Виведе: [0, 7, 13, 27]