export function minimumWaitingTime(queries: number[]) {
    let totalTime = 0 // o(1)
    let lastTime = 0
    
    queries.sort((a,b) => a - b)
  
    for (const q of queries) {  // o(n)
      totalTime += lastTime
      lastTime += q
    }
  
    return totalTime
  }
  