// Do not edit the class below except
// for the depthFirstSearch method.
// Feel free to add new properties
// and methods to the class.
export class Node {
    name: string;
    children: Node[];
  
    constructor(name: string) {
      this.name = name;
      this.children = [];
    }
  
    addChild(name: string) {
      this.children.push(new Node(name));
      return this;
    }
  
    depthFirstSearch(array: string[], node: Node = this): string[] {
      if(node.name) array.push(node.name)
      if(node.children.length) node.children.forEach(n => this.depthFirstSearch(array, n))
      return array;
    }
  }
  