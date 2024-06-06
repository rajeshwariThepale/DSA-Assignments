//to check  if the parentheses are balanced.

function isBalanced(expr){
 let stack = [];
    
//     for (let i = 0; i < expr.length; i++){
//         if (expr[i] == '(' || expr[i] === '{' || expr[i] === '['){
//             stack.push(expr[i]);
//         }
//         else if (expr[i] == ')' || expr[i] === '}' || expr[i] === ']'){
//             if (stack.length == 0){
//                 return false;
//             }
            
//             let top = stack.pop();
//             if ((expr[i] === ')' && top !== '(') || 
//                 (expr[i] === '}' && top !== '{') || 
//                 (expr[i] === ']' && top !== '[')) 
//                 {
//                 return false;
//         }
       
//         return stack.length == 0;
//     }

// }
// };
// console.log(isBalanced("(())"));
// console.log(isBalanced("{[(])}"));

for (let i = 0; i < expr.length; i++) {
   
    if (expr[i] == '(' || expr[i] === '{' || expr[i] === '[') {
      stack.push(expr[i]);
   
    } else if (expr[i] == ')' || expr[i] === '}' || expr[i] === ']') {
      
      if (stack.length === 0) {
        return false;
      }
      
      const openingBracket = stack.pop();
      if (openingBracket !== '(') {
        return false;
      }
    }
  }

  return stack.length === 0;
}
console.log(isBalanced("(())"));
console.log(isBalanced("{[(])}"));
