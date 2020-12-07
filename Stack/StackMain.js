class Stack {
    constructor() {
        this.arr = [];
        this.top = -1;
        this.size = 0;
    }

    push(num) {
        this.top = this.top + 1;
        this.arr[this.top] = num;
        this.size++;
    }
    pop() {
        if (this.top === -1) {
            console.log("stack is in underflow");
            return "stack is empty";

        } else {
            this.size--;
            return this.arr[this.top--];
        }
    }
    sizeOfStack() {
        return this.size;
    }
    display() {
        if (this.top > -1) {
            let str = "";
            for (let i = 0; i <= this.top; i++) {
                str = str + this.arr[i] + " ";

            }
            return str;
        }
        else {
            return"stack is underflow";
        }
    }
}
module.exports = new Stack;

