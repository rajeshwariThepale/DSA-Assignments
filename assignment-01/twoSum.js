
//program for twoSum
let myArray = [1,2,3,4];
let target = 4;

    function twoSum (myArray) {
        for(var i=0; i <= myArray.length; i++)
        {
            for(j= i+1; j<= myArray.length; j++)
            {
                var twoSum = Number(myArray[i]) + Number(myArray[j]);
                if(twoSum === target)
                {
                    {
                        return [i, j];
                    }

                }
            }
        }
    };

//to print results
const result =twoSum (myArray);
console.log(result);
    




    