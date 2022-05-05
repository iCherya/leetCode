// 225. Implement Stack using Queues [Easy]
// https://leetcode.com/problems/implement-stack-using-queues/

class MyStack {
  constructor() {
    this.stack = [];
  }

  /**
   * @param {number} x
   * @return {void}
   */
  push(x) {
    this.stack.push(x);
  }

  /**
   * @return {number}
   */
  pop() {
    return this.stack.pop();
  }

  /**
   * @return {number}
   */
  top() {
    return this.stack[this.stack.length - 1];
  }

  /**
   * @return {boolean}
   */
  empty() {
    return this.stack.length === 0;
  }
}
