
//program to print star(*) in pyramid
let rows = 5;
let pattern = "";

for (let n = 1; n <= rows; n++) {
  
   for (let num = 1; num <= n; num++) {
      pattern += '*';
   }
   pattern += '\n';
}

//to print result
console.log(pattern);