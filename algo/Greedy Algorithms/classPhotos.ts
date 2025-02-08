export function classPhotos(redShirtHeights: number[], blueShirtHeights: number[]) {
    redShirtHeights.sort((a,b) => a - b)
    blueShirtHeights.sort((a,b) => a - b)
    
    const isRedHeight = redShirtHeights[0] > blueShirtHeights[0]
  
    for (let index = 0; index < redShirtHeights.length; index++) {
      if(isRedHeight && redShirtHeights[index] <= blueShirtHeights[index]) return false
      if(!isRedHeight && redShirtHeights[index] >= blueShirtHeights[index]) return false
    }
    
    return true;
  }
  