export function tandemBicycle(
    redShirtSpeeds: number[],
    blueShirtSpeeds: number[],
    fastest: boolean,
  ) {
    redShirtSpeeds.sort((a, b) => a - b)
    if (fastest) blueShirtSpeeds.sort((a, b) => b - a)
    else blueShirtSpeeds.sort((a,b) => a - b)
  
    return redShirtSpeeds.reduce((sum, v, i) => sum += Math.max(v,blueShirtSpeeds[i]), 0)
  }
  