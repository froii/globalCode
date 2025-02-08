// Do not edit the class below except for
// the constructor and the createSet, find,
// and union methods. Feel free to add new
// properties and methods to the class.
export class UnionFind {
    private parent: { [key: number]: number } = {};
  
    createSet(value: number) {
      this.parent[value] = value;
    }
  
    find(value: number) {
      if(!this.parent.hasOwnProperty(value)) return null
  
      while (this.parent[value] !== value) {
        value = this.parent[value]
      }
      
      return value
    }
  
    union(valueOne: number, valueTwo: number) {
      let value1 = this.find(valueOne);
      let value2 = this.find(valueTwo);
      
      if (value1 === null || value2 === null) return;
      
      this.parent[value2] = this.parent[value1];
    }
  }
  