class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(val) {
    this.stack.push(val);
    if (this.minStack.length === 0 || val <= this.minStack.at(-1)) {
      this.minStack.push(val);
    }
  }

  pop() {
    if (this.stack.at(-1) === this.minStack.at(-1)) {
      this.minStack.pop();
    }
    this.stack.pop();
  }

  top() {
    return this.stack.at(-1);
  }

  getMin() {
    return this.minStack.at(-1);
  }
}
