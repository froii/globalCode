
// Створюємо порожній масив для MST
// Ініціалізуємо структуру для множин (disjoint set)
// Перетворюємо вхідний граф у список ребер

// Сортуємо всі ребра за вагою від найменшої до найбільшої

// Проходимо по відсортованих ребрах
// Для кожного ребра перевіряємо чи створить воно цикл
// Якщо цикл не створюється - додаємо ребро до MST

// Часова: O(E log E), де E - кількість ребер
// Просторова: O(V + E), де V - кількість вершин


export function kruskalsAlgorithm(edges: number[][][]): number[][][] {
    const numVertices = edges.length;
    // Створюємо масив для MST
    const mst: number[][][] = Array(numVertices).fill([]).map(() => []);
    // Масив для зберігання множин вершин
    const parents: number[] = Array(numVertices).fill(0).map((_, i) => i);
    // Перетворюємо матрицю суміжності в список ребер
    const edgesList: [number, number, number][] = []; 
    
    // Створюємо список всіх ребер
    for (let vertex = 0; vertex < edges.length; vertex++) {
      const destinations = edges[vertex];
      for (const [dest, weight] of destinations) {
        if (vertex < dest) { // Уникаємо дублювання ребер
          edgesList.push([vertex, dest, weight]);
        }
      }
    }
    
    // Сортуємо ребра за вагою
    edgesList.sort((a, b) => a[2] - b[2]);
    
    // Допоміжна функція для знаходження кореня множини
    function find(vertex: number): number {
      if (parents[vertex] !== vertex) {
        parents[vertex] = find(parents[vertex]); // Стиснення шляху
      }
      return parents[vertex];
    }
    
    // Допоміжна функція для об'єднання множин
    function union(vertex1: number, vertex2: number): void {
      parents[find(vertex1)] = find(vertex2);
    }
    
    // Будуємо MST
    for (const [src, dest, weight] of edgesList) {
      // Якщо вершини в різних множинах (не створюємо цикл)
      if (find(src) !== find(dest)) {
        // Об'єднуємо множини
        union(src, dest);
        // Додаємо ребро в обох напрямках
        mst[src].push([dest, weight]);
        mst[dest].push([src, weight]);
      }
    }
    
    return mst;
  }
  
  // Приклад використання:
  const edges = [
    [[1, 2], [2, 4]], // вершина 0
    [[0, 2], [2, 3]], // вершина 1
    [[0, 4], [1, 3]]  // вершина 2
  ];
  console.log(kruskalsAlgorithm(edges));