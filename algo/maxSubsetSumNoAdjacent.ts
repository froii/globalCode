export function maxSubsetSumNoAdjacent(array: number[]) {
    if(array.length === 0) return 0
    
    let prev = 0;
    let cur = 0;
    for (const val of array) {
      [prev, cur] = [Math.max(prev, cur + val), prev]
    }
    
    return prev;
  }
  