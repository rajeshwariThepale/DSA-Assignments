//to sort the stack

function sortStack(stack){
    const newStack = [];

    while(stack.length > 0){
        let temp = stack.pop();

        while(newStack.length > 0 && newStack[newStack.length - 1] < temp){
            stack.push(newStack[newStack.length - 1]);
            newStack.pop();
        }
        newStack.push(temp);
    }
    while(newStack.length > 0){
        stack.push(newStack[newStack.length - 1]);
        newStack.pop();
    }
    return newStack;
}

const newStack =[31,2,5,21,10,45];

sortStack(newStack);
console.log(newStack);
