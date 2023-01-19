// program to implement stack data structure
class Stack {
  constructor() {
    this.items = [];
  }
  // add element to the stack
  add(element) {
    return this.items.push(element);
  }
  // remove items from stack
  del(element) {
    if (this.items.length > 0) {
      return this.items.pop(element);
    }
  }
  // view the last item from a stack
  peek() {
    return this.items[this.items.length - 1];
  }
  // check if the stack is empty
  isEmpty() {
    return this.items.length == 0;
  }
  //   check the size of the stack
  size() {
    return this.items.length;
  }
  //   clear the stack
  clear() {
    return (this.items = []);
  }
}
const stack = new Stack();
stack.add("apple");
stack.add("car");
stack.add("soup");
stack.add("coke");
stack.add("meat");
stack.del();
console.log(stack.items);
console.log(stack.peek());
console.log(stack.isEmpty());
console.log(stack.size());
stack.clear();
console.log(stack.items);
