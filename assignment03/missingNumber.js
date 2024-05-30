//program to find missing numbers from array

function missingNumber(array) {

    const n = array.length +1;
    const total = (n * (n + 1)) / 2;

    let sumOfArray = 0;
    for (let i = 0; i < n-1; i++) {
       sumOfArray = sumOfArray + array[i];
    }
    let missingNum = total - sumOfArray;
    return missingNum;
};

// to print the missing number
const array=[1,2,3,5,6,7];
const result = missingNumber(array);

console.log(result);
