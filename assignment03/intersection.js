//program to find the intersection of two arrays

function findIntersection(a, b) {

    let intersection = [];

    for (let i = 0; i < a.length; i++) {

        for (let j = 0; j < b.length; j++) {
            if (a[i] === b[j]) 
                 {
                intersection.push(a[i]);
            }
        }
    }
    return intersection;
}

// to print the results

const a = [1, 2, 3, 4];
const b = [6, 2, 3, 5];
const result = findIntersection(a, b);

console.log(result);