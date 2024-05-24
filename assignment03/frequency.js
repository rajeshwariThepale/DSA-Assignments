//program to count frequency of elements

function countFrequency(array) {
    let count = {};
    for (let i = 0; i < array.length; i++) {
        let num = array[i];
        if (count[num]) {
            count[num]++;
        } else {
            count[num] = 1;
        }
    }
    return count;
}

// to print the results
const array = [1,2,2,3,3,4,4,4,4 ];
const result = countFrequency(array);

console.log(result);
