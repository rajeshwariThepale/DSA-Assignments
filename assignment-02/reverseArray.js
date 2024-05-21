
//program for reverse Array
function reverseArray(rev){

    let reverseArray = [];
    for (let i = rev.length - 1; i >= 0; i--) {
        reverseArray.push(rev[i]);
    }
    return reverseArray;
};
  
  // to print the array:
  const arrays = [1, 2, 3, 4, 5];
  const result = reverseArray(arrays);
  console.log(result);

       
