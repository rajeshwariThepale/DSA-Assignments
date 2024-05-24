//program for moving all zeros to end of array


function movingZeros(arr) {
    
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[count] = arr[i];
            count++;
        }
    }
    for (let i = count; i < arr.length; i++) {
        arr[i] = 0;
    }
    return arr;
}

// to print the results
const arr = [0,1,9,8,4,0,0,2,7,0,6,0,9];
const result = movingZeros(arr);

console.log(result);
