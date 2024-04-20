class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    addFirst(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    addLast(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }

    size() {
        let count = 0;
        let current = this.head;
        while (current) {
            count++;
            current = current.next;
        }
        return count;
    }

    addAt(index, data) {
        if (index < 0 || index > this.size()) {
            console.error("Invalid Index");
            return;
        }
        if (index === 0) {
            this.addFirst(data);
            return;
        }
        const newNode = new Node(data);
        let current = this.head;
        let prev = null;
        for (let i = 0; i < index; i++) {
            prev = current;
            current = current.next;
        }
        newNode.next = current;
        prev.next = newNode;
    }

    print() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

const newList = new LinkedList();
newList.addFirst(1);
// newList.addFirst(2);
newList.print();
