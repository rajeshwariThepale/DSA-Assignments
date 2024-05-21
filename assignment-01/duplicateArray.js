
// program to remove duplicate arrays
const array=[1,2,2,3];
let k= 1;

function removeDuplicates (array) {

    for (let i = 0; i < array.length-1 ; i++) {
        if(array[i] !== array[i+1]) {
            array[k] = array[i+1];
            k++;
    } 
   }
   return k;
}

// to print the results
const result = removeDuplicates(array);
console.log(result);
