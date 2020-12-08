class Node {

    constructor(data) {
        this.data = data;
        this.next = null;
    }

}

//Create LinkedList main Class 

class OrderList {
    constructor() {
        this.head = null;
    
    }

    addAtNode(data) {
        let first = new Node(data);

        let current = this.head;
        if (this.head == null) {
            return this.head = first;
        }
        else {
            while (current.next) {
                current = current.next;
            }
            current.next = first;
            return first = current;
        }
    }

    isEmpty() {
        if (this.head === null) {
            return true;
        }
        else {
            return false;
        }

    }

    sizeOfList() {
        let current = this.head;
        let count = 0;
        while (current != null) {
            count++;
            current = current.next;
        }

        return count;
    }
    
    addAtFirst(data) {
        let firstNode = new Node(data);
        firstNode.next = this.head;
        this.head = firstNode;
    }
    
    addAtLast(value) {
        let lastNode = { data: value, next: null };
        if (this.isEmpty()) {
            return this.head = lastNode;
        }
        let current = this.head;
        while (current.next != null) {
            current = current.next;
        }
        return current.next = lastNode;
    }

    printList() {

        let curr = this.head;
        let str = " ";
        while (curr) {
            str += curr.data + ' ';
            curr = curr.next;
        }

        return (str);
    }

    deleteFromFirst() {
        this.head = this.head.next;
        return this.head;
    }

    deleteFromLast() {
        let lastNode = this.head;
        let previous;
        while (lastNode.next != null) {
            previous = lastNode;
            lastNode = lastNode.next;
        }
        previous.next = null;
    }

    addAtPosition(data, pos) {
        let newNode = new Node(data);
        let current, previous;
        current = this.current;
        if (pos == 0) {
            newNode.next = this.head;
            this.head = newNode;
        }
        let count = 0;
        current = this.head;
        while (count < pos - 1) {
            count++;
            previous = current;
            current = current.next;

        }
        previous.next = newNode;
        newNode.next = current;

    }

    deleteAtPosition(pos) {
        let possition = this.head;
        let previous;
        let count = 0;
        while (count < pos) {
            count++;
            previous = possition;
            possition = possition.next;
        }
        previous.next = possition.next;
    }

    deleteAtNode(data) {
        let temp = this.head;
        let previous = null;

        if (temp.data == data) {
            this.head = temp.next;
            return temp.data;
        }
        while (temp != null && temp.data != data) {
            previous = temp;
            temp = temp.next;
        }
        previous.next = temp.next;

        return temp.data;
    }

    searchData(key) {
        let current = this.head;
        while (current != null) {
            if (current.data == key) {
                return current.data;
            }
            current = current.next;
        }

        return false;
    }

    sortOfList(data) {
        let node = new Node(data);
        let current = this.head;
        if (!this.head || node.data <= current.data) {
            node.next = this.head;
            this.head = node;
            this.size++;
        } else {
            while (current.next && node.data >= current.next.data) {
                current = current.next;
            }
            node.next = current.next;
            current.next = node;
            this.size++;
            return data;
        }
    }
    showList() {
        let arr = [];
        console.log();
        this.current = this.head;
        while (this.current != null) {
            arr.push(this.current.data);

            this.current = this.current.next;
        }

        return arr;
    }
}

module.exports = new OrderList;
