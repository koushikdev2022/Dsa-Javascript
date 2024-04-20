// prsctice

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
    print(){
        let current = this.head;
        while(current.next){
            console.log(current.data);
            current = current.next;
        }
    }
    addFrist(data){
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }
    
}

const link = new LinkedList();

link.addFirst(1);
link.print;