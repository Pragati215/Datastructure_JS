class List {
    // constructor 
    constructor(element) {
        this.element = element;
        this.next = null
    }
}
class LinkedList {
    constructor() {

        this.head = null;
        this.size = 0;
    }

    add(element) {

        let list = new List(element);

        let current;
        if (this.head == null)
            this.head = list;
        else {
            current = this.head;

            while (current.next) {
                current = current.next;
            }

            current.next = list;
        }
        this.size++;
    }

    sizeOfList() {
        return this.size;
    }
    display() {
        let curr = this.head;
        let str = "";
        while (curr) {
            str += curr.element + " ";
            curr = curr.next;
        }
        console.log(str);
    }
    search(element) {
        let count = 0;
        let current = this.head;

        while (current != null) {

            if (current.element === element)
            {
                return count;
            }
                count++;
                current = current.next;
        }

        return element;
    }

    removeFrom(index) {
        if (index > 0 && index > this.size) return -1;
        else {
            let curr,
                prev,
                it = 0;
            curr = this.head;
            prev = curr;
            if (index === 0) {
                this.head = curr.next;
            } else {
                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }
                prev.next = curr.next;
            }
            this.size--;
            return curr.element;
        }
    }
}
module.exports = new LinkedList;

