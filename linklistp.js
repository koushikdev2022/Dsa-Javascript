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
        while(current){
            console.log(current.data);
            current = current.next;
        }
    }
    addFirst(data){
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }
    addLast(data){
        const newNode = new Node(data);
        let current = this.head;
        if(!this.head){
            this.head = newNode;
            return;
        }
        while(current.next){
            current = current.next;
        }
        current.next = newNode;
    }
    size(){
        let current = this.head;
        let count = 0;
        while(current){
            count ++;
            current = current.next;
        }
        console.log(count);
        return count;
    }
    indexInsert(index,data){
        const newNode = new Node(data);
        let current = this.head;
        let prev
        if(index<0 || index > this.size){
            console.log("invalid index");
        }
        for(let i = 0; i < index; i++){
            prev = current;
            // console.log(current);
            current = current.next;
        }
        prev.next = newNode;
        newNode.next = current;
    }
}


const link = new LinkedList();

link.addFirst(1);
link.addFirst(7);
link.addFirst(2);
link.addFirst(3);
// link.addLast(9);
link.indexInsert(2,10);
link.print();