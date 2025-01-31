export function firstDuplicateValue(array: number[]) {
    const set = new Set()
    
    for (let i = 0; i < array.length; i++) { // O(n)
      if (set.has(array[i])) return array[i] // O(1)
      else set.add(array[i]) // O(1)
    }

    return -1;
  }
  