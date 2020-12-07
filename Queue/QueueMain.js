class Queue {
    // Array is used to implement a Queue 
    constructor() {
        this.items = [];
        this.items.length == 0;
        this.size = 0;
    }

    enqueue(element) {

        this.items.push(element);
    }
    dequeue() {

        if (this.items.length == 0)
            return "Underflow";
        return this.items.shift();
    }
    sizeOfQueue() {
        return this.size;
    }
    display() {
        var str = "";
        for (var i = 0; i < this.items.length; i++)
            str += this.items[i] + " ";
        return str;
    }
}
module.exports = new Queue;

