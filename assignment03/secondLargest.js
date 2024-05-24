//to find the second largest number from array

function secondLargest(array) {
    let largest = array[0];
    let secondLar = array[0];

    for (let i = 0; i < array.length; i++) {

        if (largest < array[i] ) {
            secondLar = largest;
            largest = array[i];
        } else if (secondLar < array[i] ) {
           
            secondLar = array[i];
        }
    }
    return secondLar;
};

//to print the results
const array = [12,33,1,35,40,4,21];
const result = secondLargest(array);

console.log("Second Largest Number is",result);