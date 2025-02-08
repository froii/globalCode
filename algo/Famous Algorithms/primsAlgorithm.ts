
// Створюємо порожній граф для MST
// Починаємо з вершини 0
// Створюємо чергу для ребер

// Додаємо всі ребра поточної вершини в чергу
// Беремо ребро з найменшою вагою
// Додаємо нову вершину до MST
// Повторюємо поки не відвідаємо всі вершини

// Оптимізації:
// Сортуємо ребра за вагою для швидкого доступу
// Пропускаємо вже відвідані вершини


// Часова: O(E log V), де E - кількість ребер, V - кількість вершин
// Просторова: O(V + E)


export function primsAlgorithm(edges: number[][][]): number[][][] {
    const numVertices = edges.length;
    
    // Створюємо порожній граф для MST
    const mst: number[][][] = Array(numVertices).fill([]).map(() => []);
    
    // Масив для відстеження відвіданих вершин
    const visited = new Set<number>();
    
    // Починаємо з вершини 0
    visited.add(0);
    
    // Масив для зберігання ребер мінімальної ваги
    const edgesHeap: [number, number, number][] = []; // [вага, звідки, куди]
    
    // Додаємо всі ребра початкової вершини
    addEdges(0);
    
    // Поки не відвідали всі вершини
    while (edgesHeap.length && visited.size < numVertices) {
      // Беремо ребро з найменшою вагою
      const [weight, source, destination] = removeMinEdge();
      
      // Якщо вже відвідали цю вершину - пропускаємо
      if (visited.has(destination)) continue;
      
      // Додаємо ребро до MST
      mst[source].push([destination, weight]);
      mst[destination].push([source, weight]);
      
      // Позначаємо вершину як відвідану
      visited.add(destination);
      
      // Додаємо нові ребра
      addEdges(destination);
    }
    
    return mst;
    
    // Допоміжна функція для додавання ребер у чергу
    function addEdges(vertex: number): void {
      for (const [destination, weight] of edges[vertex]) {
        if (!visited.has(destination)) {
          edgesHeap.push([weight, vertex, destination]);
        }
      }
      // Сортуємо за вагою
      edgesHeap.sort((a, b) => a[0] - b[0]);
    }
    
    // Допоміжна функція для отримання ребра з найменшою вагою
    function removeMinEdge(): [number, number, number] {
      return edgesHeap.shift()!;
    }
   }



   const edges = [
    [[1, 2], [2, 4]], // вершина 0
    [[0, 2], [2, 3]], // вершина 1
    [[0, 4], [1, 3]]  // вершина 2
  ];
  
  console.log(primsAlgorithm(edges));


//   Відмінності від алгоритму Краскала:

// Прим починає з однієї вершини і розростає дерево
// Краскал розглядає всі ребра одразу
// Прим більш ефективний для щільних графів
// Краскал краще працює з розрідженими графами