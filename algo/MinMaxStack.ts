
// Ця структура даних - це спеціальний стек, який може виконувати такі операції:

// push(число): Додає нове число до стеку
// pop(): Видаляє і повертає останнє додане число
// peek(): Показує останнє додане число без його видалення
// getMin(): Повертає найменше число у стеку
// getMax(): Повертає найбільше число у стеку

// Головна особливість цього стеку в тому, що він може знаходити мінімум та максимум за O(1) час (миттєво). 
// Це досягається завдяки тому, що кожен елемент стеку зберігає три значення:

// Саме число
// Мінімальне число серед усіх чисел від початку стеку до поточного елемента
// Максимальне число серед усіх чисел від початку стеку до поточного елемента


/**
 * Type definition for a stack entry containing value, min, and max
 */
type StackEntry = [value: number, min: number, max: number];

/**
 * MinMaxStack is a specialized stack data structure that keeps track of both minimum 
 * and maximum values in constant time O(1).
 * Each stack element is stored as a tuple [value, min, max] where:
 * - value: the actual value being stored
 * - min: the minimum value in the stack including and below this element
 * - max: the maximum value in the stack including and below this element
 */
export class MinMaxStack {
  private stack: StackEntry[];

  constructor() {
    // Initialize an empty array to store the stack elements
    // Each element will be an array of [value, minSoFar, maxSoFar]
    this.stack = [];
  }

  /**
   * Returns the value at the top of the stack without removing it
   * Time complexity: O(1)
   * @returns {number} The value at the top of the stack
   * @throws {Error} If the stack is empty
   */
  peek(): number {
    if (this.stack.length === 0) {
      throw new Error("Cannot peek at an empty stack");
    }
    const [val] = this.stack[this.stack.length - 1];
    return val;
  }

  /**
   * Removes and returns the value at the top of the stack
   * Time complexity: O(1)
   * @returns {number} The value that was removed from the top of the stack
   * @throws {Error} If the stack is empty
   */
  pop(): number {
    if (this.stack.length === 0) {
      throw new Error("Cannot pop from an empty stack");
    }
    const lastEntry = this.stack.pop();
    // We know lastEntry is defined since we checked length above
    if (!lastEntry) throw new Error("Unexpected empty stack");
    return lastEntry[0];
  }

  /**
   * Pushes a new value onto the stack while maintaining min/max information
   * Time complexity: O(1)
   * @param {number} number - The value to push onto the stack
   */
  push(number: number): void {
    if (this.stack.length === 0) {
      // If stack is empty, the number is both min and max
      this.stack.push([number, number, number]);
    } else {
      // Get current min/max from top of stack
      const [, min, max] = this.stack[this.stack.length - 1];
      // Push new element with updated min/max values
      this.stack.push([number, Math.min(min, number), Math.max(max, number)]);
    }
  }

  /**
   * Returns the minimum value currently in the stack
   * Time complexity: O(1)
   * @returns {number} The minimum value in the stack
   * @throws {Error} If the stack is empty
   */
  getMin(): number {
    if (this.stack.length === 0) {
      throw new Error("Cannot get minimum of an empty stack");
    }
    const [, min] = this.stack[this.stack.length - 1];
    return min;
  }

  /**
   * Returns the maximum value currently in the stack
   * Time complexity: O(1)
   * @returns {number} The maximum value in the stack
   * @throws {Error} If the stack is empty
   */
  getMax(): number {
    if (this.stack.length === 0) {
      throw new Error("Cannot get maximum of an empty stack");
    }
    const [, , max] = this.stack[this.stack.length - 1];
    return max;
  }
}

// Example usage:
const stack = new MinMaxStack();
stack.push(5);  // stack: [5], min: 5, max: 5
stack.push(2);  // stack: [5, 2], min: 2, max: 5
stack.push(7);  // stack: [5, 2, 7], min: 2, max: 7
// console.log(stack.getMin());  // 2
// console.log(stack.getMax());  // 7
// console.log(stack.peek());    // 7
stack.pop();    // stack: [5, 2]
// console.log(stack.getMin());  // 2
// console.log(stack.getMax());  // 5