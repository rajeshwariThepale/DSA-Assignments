//program to find common elements 

 const matrix= [
    [1, 2, 1, 4, 8],
    [3, 7, 8, 5, 1],
    [8, 7, 7, 3, 1],
    [8, 1, 2, 7, 9]
 ]

 let M = 4; 
 let N =5;

function findElements(matrix){
     
        let eleMap = new Map(); 
       
    for (let j = 0; j < N; j++) 
        eleMap.set(matrix[0][j],1); 
           
    // traverse the matrix 
    for (let i = 1; i < M; i++) 
    { 
        for (let j = 0; j < N; j++) 
        { 
          
            if (eleMap.get(matrix[i][j]) != null && eleMap.get(matrix[i][j]) == i) 
            { 
                
                eleMap.set(matrix[i][j], i + 1); 
   
                if (i == M - 1) 
                    document.write(matrix[i][j] + " "); 
            } 
        } 
    } 
}

    console.log(matrix);