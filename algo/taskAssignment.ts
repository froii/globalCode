//This ensures optimal task distribution where each worker gets one short and one long task.
// Це забезпечує оптимальний розподіл завдань, коли кожен працівник отримує одне коротке та одне довге завдання.

// Creates pairs of indices from tasks array
// Sorts them by task duration
// Returns pairs of indices where each pair contains indices equidistant from center (shortest with longest)

function taskAssignment(k: number, tasks: number[]): [number, number][] {
    // Sort task durations keeping the original indices
    const sortedValuesWithIndices: [number, number][] = tasks
      .map((value, index): [number, number] => [index, value])
      .sort((a, b) => a[1] - b[1]);
  
    // Compose a list of pairs from indices that are equidistant from the center
    // i.e. starting with a pair of the largest and the smallest values until
    // the pairs in the "center"
    return Array.from({ length: k }, (_, i): [number, number] => [
      sortedValuesWithIndices[i][0],
      sortedValuesWithIndices[2 * k - 1 - i][0]
    ]);
  }


const k = 3;
const tasks = [1, 3, 5, 3, 1, 4];
console.log(taskAssignment(k, tasks));
// Output: [[4, 2], [0, 5], [3, 1]]