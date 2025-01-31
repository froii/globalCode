// This implementation:

// Takes arrays of distances between cities, fuel available at each city, and miles per gallon (mpg)
// Keeps track of remaining miles as we traverse cities
// Updates the valid starting city when we find a new minimum in remaining miles
// Returns the city index that will allow completing the circular route

// The key insight is that the city where we have the least amount of remaining miles (most negative) must be the last city we visit - therefore the next city must be our starting point.
// Time Complexity: O(n) where n is the number of cities
// Space Complexity: O(1) since we only use a few variables


export function validStartingCity(distances: number[], fuel: number[], mpg: number): number {
    const numberOfCities = distances.length;
    let milesRemaining = 0;
    
    // Start at city 0 with 0 miles remaining
    let startingCity = 0;
    let milesRemainingAtStartingCity = 0;
    
    for (let cityIdx = 1; cityIdx < numberOfCities; cityIdx++) {
      const distanceFromPreviousCity = distances[cityIdx - 1];
      const fuelFromPreviousCity = fuel[cityIdx - 1];
      milesRemaining += fuelFromPreviousCity * mpg - distanceFromPreviousCity;
      
      if (milesRemaining < milesRemainingAtStartingCity) {
        startingCity = cityIdx;
        milesRemainingAtStartingCity = milesRemaining;
      }
    }
    
    return startingCity;
  }



//   Example usage:
const distances = [5, 25, 15, 10, 15];
const fuel = [1, 2, 1, 0, 3];
const mpg = 10;
console.log(validStartingCity(distances, fuel, mpg)); // 4