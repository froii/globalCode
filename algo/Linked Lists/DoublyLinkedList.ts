export class Node {
    value: number;
    prev: Node | null;
    next: Node | null;
    constructor(value: number) {
      this.value = value;
      this.prev = null;
      this.next = null;
    }
  }
  
  export class DoublyLinkedList {
    head: Node | null;
    tail: Node | null;
  
    constructor() {
      this.head = null;
      this.tail = null;
    }
  
    // Встановлює вказаний вузол як голову списку
    setHead(node: Node) {
      if (this.head === null) {
        this.head = node;
        this.tail = node;
        return;
      }
      this.insertBefore(this.head, node);
    }
  
    // Встановлює вказаний вузол як хвіст списку
    setTail(node: Node) {
      if (this.tail === null) {
        this.setHead(node);
        return;
      }
      this.insertAfter(this.tail, node);
    }
  
    // Вставляє вузол nodeToInsert перед вказаним вузлом node
    insertBefore(node: Node, nodeToInsert: Node) {
      if (nodeToInsert === this.head && nodeToInsert === this.tail) return;
      this.remove(nodeToInsert);
      nodeToInsert.prev = node.prev;
      nodeToInsert.next = node;
      if (node.prev === null) {
        this.head = nodeToInsert;
      } else {
        node.prev.next = nodeToInsert;
      }
      node.prev = nodeToInsert;
    }
  
    // Вставляє вузол nodeToInsert після вказаного вузла node
    insertAfter(node: Node, nodeToInsert: Node) {
      if (nodeToInsert === this.head && nodeToInsert === this.tail) return;
      this.remove(nodeToInsert);
      nodeToInsert.prev = node;
      nodeToInsert.next = node.next;
      if (node.next === null) {
        this.tail = nodeToInsert;
      } else {
        node.next.prev = nodeToInsert;
      }
      node.next = nodeToInsert;
    }
  
    // Вставляє вузол на вказану позицію
    insertAtPosition(position: number, nodeToInsert: Node) {
      if (position === 1) {
        this.setHead(nodeToInsert);
        return;
      }
      let current = this.head;
      let currentPosition = 1;
      while (current !== null && currentPosition++ !== position) {
        current = current.next;
      }
      if (current !== null) {
        this.insertBefore(current, nodeToInsert);
      } else {
        this.setTail(nodeToInsert);
      }
    }
  
    // Видаляє всі вузли з вказаним значенням
    removeNodesWithValue(value: number) {
      let current = this.head;
      while (current !== null) {
        const nodeToRemove = current;
        current = current.next;
        if (nodeToRemove.value === value) {
          this.remove(nodeToRemove);
        }
      }
    }
  
    // Видаляє вказаний вузол зі списку
    remove(node: Node) {
      if (node === this.head) this.head = this.head.next;
      if (node === this.tail) this.tail = this.tail.prev;
      this.removeNodeBindings(node);
    }
  
    // Перевіряє чи є в списку вузол з вказаним значенням
    containsNodeWithValue(value: number): boolean {
      let current = this.head;
      while (current !== null && current.value !== value) {
        current = current.next;
      }
      return current !== null;
    }
  
    // Допоміжний метод для видалення зв'язків вузла
    private removeNodeBindings(node: Node) {
      if (node.prev !== null) node.prev.next = node.next;
      if (node.next !== null) node.next.prev = node.prev;
      node.prev = null;
      node.next = null;
    }
  }