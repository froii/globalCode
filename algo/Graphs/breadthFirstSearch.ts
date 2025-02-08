// Do not edit the class below except
// for the breadthFirstSearch method.
// Feel free to add new properties
// and methods to the class.
export class Node {
    name: string;
    children: Node[];
  
    constructor(name: string) {
      this.name = name;
      this.children = [];
    }
  
    addChild(name: string): Node {
      this.children.push(new Node(name));
      return this;
    }
  
    breadthFirstSearch(array: string[]): string[] {
      let curr: Node[] = [this];
      let next: Node[] = [];
  
      while (curr.length || next.length) {
        if (!curr.length) {
          curr = next.reverse();
          next = [];
        }
  
        while (curr.length) {
          const node = curr.pop()!; 
          array.push(node.name);
          next.push(...node.children);
        }
      }
  
      return array;
    }
  }