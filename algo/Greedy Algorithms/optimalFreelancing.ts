const DAYS = 7

export function optimalFreelancing(jobs: { payment: number; deadline: number }[]): number {
  const bestJobs: number[] = new Array(DAYS).fill(0);
  
  const checkBestSalary = (payment: number, deadline: number ) => {
    for (let day = 1; day <= deadline; day++) {
        const curDay = deadline - day
      
        if (payment > bestJobs[curDay]) {
          checkBestSalary(bestJobs[curDay], curDay)
          bestJobs[curDay] = payment;
          break
        }
      }
  }
  
  for (const { payment, deadline } of jobs) {
    checkBestSalary(payment, deadline)
  }

  const totalSum = bestJobs.reduce((sum, value) => sum + value, 0);
  
  return totalSum;
}
