// Do not edit the class below except for the buildHeap,
// siftDown, siftUp, peek, remove, and insert methods.
// Feel free to add new properties and methods to the class.

// This is a complete implementation of a MinHeap class in TypeScript. Here's how each method works:
// buildHeap:
// Builds a min heap from an array by sifting down from the last parent to the root
// Time complexity: O(n)

// siftDown:
// Moves a node down to its correct position by comparing with children
// Used in remove() and buildHeap()
// Time complexity: O(log n)

// siftUp:
// Moves a node up to its correct position by comparing with parent
// Used in insert()
// Time complexity: O(log n)

// peek:
// Returns the minimum element (root) without removing it
// Time complexity: O(1)

// remove:
// Removes and returns the minimum element
// Swaps root with last element, pops it, then sifts down new root
// Time complexity: O(log n)

// insert:
// Adds a new value to the heap
// Adds at end then sifts up to correct position
// Time complexity: O(log n)

export class MinHeap {
    heap: number[];
   
    constructor(array: number[]) {
      this.heap = this.buildHeap(array);
    }
   
// buildHeap - початкове створення купи
// └── викликає siftDown для кожного батьківського вузла знизу вгору

    buildHeap(array: number[]): number[] {
      const firstParentIdx = Math.floor((array.length - 2) / 2);
      for (let currentIdx = firstParentIdx; currentIdx >= 0; currentIdx--) {
        this.siftDown(currentIdx, array.length - 1, array);
      }
      return array;
    }
  // siftDown - опускає елемент вниз якщо він більший за дітей  
// └── порівнюємо з обома дітьми
// └── міняємо з меншим якщо потрібно
// └── продовжуємо поки елемент не на своєму місці
    siftDown(currentIdx: number, endIdx: number, heap: number[]): void {
      let childOneIdx = currentIdx * 2 + 1;
      
      while (childOneIdx <= endIdx) {
        const childTwoIdx = currentIdx * 2 + 2 <= endIdx ? currentIdx * 2 + 2 : -1;
        let idxToSwap: number;
        
        if (childTwoIdx !== -1 && heap[childTwoIdx] < heap[childOneIdx]) {
          idxToSwap = childTwoIdx;
        } else {
          idxToSwap = childOneIdx;
        }
        
        if (heap[idxToSwap] < heap[currentIdx]) {
          this.swap(currentIdx, idxToSwap, heap);
          currentIdx = idxToSwap;
          childOneIdx = currentIdx * 2 + 1;
        } else {
          break;
        }
      }
    }
// siftUp - піднімає елемент вгору якщо він менший за батька
// └── порівнюємо з батьком
// └── міняємо місцями якщо менший
// └── продовжуємо поки не дійдемо до кореня або свого місця

    siftUp(currentIdx: number, heap: number[]): void {
      let parentIdx = Math.floor((currentIdx - 1) / 2);
      while (currentIdx > 0 && heap[currentIdx] < heap[parentIdx]) {
        this.swap(currentIdx, parentIdx, heap);
        currentIdx = parentIdx;
        parentIdx = Math.floor((currentIdx - 1) / 2);
      }
    }
   // peek - просто повертає корінь (мінімум)
    peek(): number {
      return this.heap[0];
    }
// remove - видаляє і повертає мінімум
// └── міняємо корінь з останнім
// └── видаляємо останній
// └── відновлюємо властивість heap через siftDown
    remove(): number {
      this.swap(0, this.heap.length - 1, this.heap);
      const valueToRemove = this.heap.pop()!;
      this.siftDown(0, this.heap.length - 1, this.heap);
      return valueToRemove;
    }
// insert - додає новий елемент
// └── додаємо в кінець
// └── відновлюємо властивість heap через siftUp

    insert(value: number): void {
      this.heap.push(value);
      this.siftUp(this.heap.length - 1, this.heap);
    }
   
    private swap(i: number, j: number, heap: number[]): void {
      [heap[i], heap[j]] = [heap[j], heap[i]];
    }
   }