class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
    }
    print(data){
        let current = this.head;
        while(current){
            console.log(current.data);
            current = current.next;
        }
       
    }
    addFirst(data){
        const newNode = new Node(data);
        newNode.next = this.head;
        if(this.head){
            this.head.prev = newNode;
        }
        this.head = newNode;
    }
    addLast(data){
        const newNode = new Node(data);
        let current = this.head;
        if(this.head == null){
           this.head = newNode;
           return this.head;
        }
        while(current.next){
            current = current.next;
        }
        current.next =  newNode;
        newNode.prev = current;
    }
}

const link = new LinkedList;
link.addLast(6);
link.addFirst(5);
link.addFirst(4);
link.addFirst(3);
link.addFirst(2);
link.addLast(9);
link.print();
