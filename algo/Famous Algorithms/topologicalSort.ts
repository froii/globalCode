
// Підготовка даних:
// Створюємо граф залежностей
// Рахуємо кількість вхідних ребер для кожної вершини
// Знаходимо вершини без залежностей

// Основний алгоритм:
// Починаємо з вершин без залежностей
// Поступово видаляємо їх та їхні ребра з графу
// Додаємо нові вершини без залежностей до черги

// Перевірка на цикли:
// Якщо не всі вершини оброблені - є цикл
// Повертаємо [-1] у випадку циклу

// Часова складність: O(V + E), де V - кількість вершин (jobs), E - кількість ребер (deps)
// Просторова складність: O(V + E)

type Dependency = [number, number];

export function topologicalSort(jobs: number[], deps: Dependency[]): number[] {
  // Створюємо граф та рахуємо вхідні ребра для кожної вершини
  const graph = createGraph(jobs, deps);
  const inDegrees = calculateInDegrees(jobs, deps);
  
  // Черга для вершин без вхідних ребер
  const noIncomingEdges: number[] = [];
  
  // Знаходимо початкові вершини (без залежностей)
  for (const job of jobs) {
    if (inDegrees.get(job) === 0) {
      noIncomingEdges.push(job);
    }
  }
  
  const result: number[] = [];
  
  // Основний алгоритм
  while (noIncomingEdges.length > 0) {
    // Беремо вершину без вхідних ребер
    const currentJob = noIncomingEdges.pop()!;
    result.push(currentJob);
    
    // Обробляємо сусідні вершини
    const neighbors = graph.get(currentJob) || [];
    for (const neighbor of neighbors) {
      // Зменшуємо кількість вхідних ребер
      inDegrees.set(neighbor, inDegrees.get(neighbor)! - 1);
      
      // Якщо всі залежності оброблені - додаємо в чергу
      if (inDegrees.get(neighbor) === 0) {
        noIncomingEdges.push(neighbor);
      }
    }
  }
  
  // Перевіряємо на цикли
  const hasCycle = result.length !== jobs.length;
  return hasCycle ? [-1] : result;
}

// Створення графу залежностей
function createGraph(jobs: number[], deps: Dependency[]): Map<number, number[]> {
  const graph = new Map<number, number[]>();
  
  // Ініціалізуємо пусті списки для кожної вершини
  for (const job of jobs) {
    graph.set(job, []);
  }
  
  // Додаємо ребра за залежностями
  for (const [prereq, job] of deps) {
    graph.get(prereq)!.push(job);
  }
  
  return graph;
}

// Підрахунок вхідних ребер для кожної вершини
function calculateInDegrees(jobs: number[], deps: Dependency[]): Map<number, number> {
  const inDegrees = new Map<number, number>();
  
  // Ініціалізуємо нулями
  for (const job of jobs) {
    inDegrees.set(job, 0);
  }
  
  // Рахуємо вхідні ребра
  for (const [_, job] of deps) {
    inDegrees.set(job, inDegrees.get(job)! + 1);
  }
  
  return inDegrees;
}



const jobs = [1, 2, 3, 4];
const deps: Dependency[] = [
  [1, 2],
  [1, 3],
  [3, 4]
];

console.log(topologicalSort(jobs, deps));
// Виведе: [1, 3, 4, 2] або [1, 2, 3, 4]
// Обидва варіанти коректні, оскільки 2 і 3 не залежать один від одного