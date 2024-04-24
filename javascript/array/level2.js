const arr =  [3,5,2]
//console.log the maximum number of an array
//expectedd output 5
const max = Math.max(...arr);
console.log(max)


//Q2 Remove a specific element 2 from the array. Log the modified array to the console.
// expected output: [3,5]

const elementToRemove = 2;
const array = arr.slice(0,2);
console.log(array);//shows the remaining elements in the array
//  console.log(arr.pop());//shows the removed elements in the array
//  console.log(arr.splice(2,1));// it also shows the removed elements in the array


const arr3 = arr.slice(0,1).concat(arr.slice(2))
console.log(arr3);



//Q3 Multiply each element of the array by a constant value 5 and log the modified array to the console.
//expected output [15,10]

const Multiply = arr3.map((item)=>item*5);
console.log(Multiply)

//find intersection (common elements) of arr and arr2
//expected output: [5]
const arr2 = [5,21,32]

const common = arr.filter((item)=>arr2.includes(item))
console.log(common);