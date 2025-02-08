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


export function arrayOfProducts(array: number[]) { // O(n) O(n) n - array length
    const products = new Array(array.length).fill(1) // O(n)
    
    let leftProduct = 1
    for (let i = 0; i < array.length; i++) { // O(n) - in worst case we traverse through n elements
      products[i] = leftProduct
      leftProduct *= array[i]    
    }
  
    let rightProduct = 1
    for (let i = array.length - 1; i > -1; i--) { // O(n) - in worst case we traverse through n elements
      products[i] *= rightProduct
      rightProduct *= array[i]
    }  
    
    return products;
  }
  