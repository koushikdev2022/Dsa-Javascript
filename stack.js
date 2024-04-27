class stack{
    constructor(){
        this.stack = [];
    }
    push(data){
        this.stack.push(element)
    }

    pop(){
        if(this.isEmpty){
            return "stack is empty"
        }
        return this.stack.pop();
    }
    peek(){
        if(this.isEmpty){
            return "stack is empty"
        }

        return this.stack[this.stack.length -1]
    }
    isEmpty(){
        return this.size == 0;
    }
    size(){
        return this.stack.length == 0;
    }
}