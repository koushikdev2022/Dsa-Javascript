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
    deleteIndex(index){
        let current = this.head;
        let prev;
        if(index<0 || index > this.size){
            console.log("invalid index");
        }
        for(let i = 0; i < index; i++){
            prev = current.next;
        }
        let nextNode = prev.next.next; 
        prev.next = nextNode;
    }
    removeFirst(){
        let current = this.head;
        let next = current.next;
        this.head = next;
    }
    removeLast(){
        let current = this.head;
        let prev;
        while(current.next){
            prev = current;
            current = current.next;
        }
        prev.next = null;
    }
    reverse(){
        let current = this.head;
        let prev = null;

      while(current){
         let newNode = current.next;
         current.next = prev;
         prev = current;
         current = newNode;
         
      }
      this.head = prev;
    }
    double(){
        let current = this.head;
        while(current){
            if(current%2 != 0){
                current.next = current.next.next
            }
        }
    }
}


const link = new LinkedList();

link.addFirst(1);
link.addFirst(7);
link.addFirst(2);
link.addFirst(3);
link.addFirst(4);
// link.addLast(9);
// link.indexInsert(2,10);
// link.deleteIndex(2);
// link.removeFirst();
// link.removeLast();
// link.addFirst(50);
// link.addFirst(60);
link.print();
console.log('hi');
link.reverse();
link.double();
link.print();