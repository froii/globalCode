// Traverse a 2D array in a spiral order, starting from the top-left corner
// and moving clockwise around the outer edges, then moving inward to the center.
// The function returns an array of numbers in the order they are visited.  

export function spiralTraverse(array: number[][]) { // O(n) O(n) n - array length
    const result: number[] = []
    let startRow = 0
    let startCol = 0
    let endRow = array.length - 1
    let endCol = array[0].length - 1
  
    while (startRow <= endRow && startCol <= endCol) { // O(n)
      for (let c = startCol; c <= endCol; c++) { // O(n) - in worst case we traverse through n elements
        result.push(array[startRow][c])
      }
      
      for (let r = startRow + 1; r <= endRow; r++) { // O(n) - in worst case we traverse through n elements
        result.push(array[r][endCol])
      }
    
       if (endRow > startRow) {
        for (let c = endCol - 1; c >= startCol; c--) { // O(n) - in worst case we traverse through n elements
          result.push(array[endRow][c])
        }
      }
      
      if (endCol > startCol) {
        for (let r = endRow - 1; r > startRow; r--) { // O(n) - in worst case we traverse through n elements
          result.push(array[r][startCol])
        }
      }
    
      startRow += 1
      endRow -= 1
      startCol += 1
      endCol -= 1
    }
    
    return result
  }
  