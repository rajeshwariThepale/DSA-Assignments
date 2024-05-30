//program to rotate matrix 90 degrees 

const matrix=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

function rotateMatrix(matrix) {

    const n = matrix.length;
    
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++)  {
             // Swap matrix[i][j] with matrix[j][i]
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
           
        }
    }
    
    // Reverse each row
    for (let i = 0; i < n; i++) {
        matrix[i].reverse();
    }

    return matrix;
    }

console.log(rotateMatrix(matrix));