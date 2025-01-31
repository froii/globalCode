// This function takes an array of numbers and returns a new array where each element
// is the product of all numbers in the input array except for the number at that index
// For example: [5,2,3] -> [6,15,10] because:
// At index 0: 2*3 = 6
// At index 1: 5*3 = 15  
// At index 2: 5*2 = 10
//
// The algorithm uses two passes:
// 1. Left to right pass calculates running product of all numbers to the left
// 2. Right to left pass multiplies by running product of all numbers to the right
// This avoids using division and handles arrays with zeros efficiently     

export function sweetAndSavory(dishes: number[], target: number) {
    dishes.sort((a, b) => a - b);
    let r = dishes.findIndex(d => d > 0);
    let l = r - 1;
    let result = [0, 0];
    let best = -Infinity;
  
    while (l >= 0 && r < dishes.length) {
      const curr = dishes[l] + dishes[r];
      if (curr <= target) {
        if (curr > best) {
          best = curr;
          result = [dishes[l], dishes[r]]
        }
        r += 1;
      } else {
        l -= 1;
      }
    }
  
    return result;  
  }

