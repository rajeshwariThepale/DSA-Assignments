
function Stack(){
    // console.log("\n*****stack operations using Array ********");
    // console.log("choose one from the below options:");
    // console.log("1.push\n 2.pop\n 3.peek\n 4.isEmpty \n 5.show");
    
this.items = [];

this.push = function(element)
    {
        this.items.push(element);
    }

    this.pop = function()
     {
        if(this.items.length > 0) {
            return this.items.pop();
        }
    }

    this.peek = function() 
    {
        return this.items[this.items.length - 1];
    }
    
    this.isEmpty = function() 
    {
        return this.items.length == 0;
     }
    
     
};

//new stack
  const stacks = new Stack;

  stacks.push(12);
  stacks.push(21);
  stacks.push(13);
  stacks.push(31);

  console.log(stacks.items);
  stacks.pop();
  
  
  console.log(stacks.peek());
  
  console.log(stacks.isEmpty()); 
//   console.log(stack.peek()); 
  
//   console.log(stack.pop()); 
//   console.log(stack.pop()); 
  
//   console.log(stack.isEmpty()); 
