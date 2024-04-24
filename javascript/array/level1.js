const arr = [3,5,2]
//Q1 calculate length of array and console log
//expected output is 3
const len = arr.length;
console.log(len);

//Q2 reverse the array and console log
//expected output [2,5,3]


const rev = arr.toReversed();// it dosen't change the original array
// reverse() --> we can also use this but it changes the original array so it is destructive
console.log(rev)


///Q3 join the array and console log
// expected output 352
const joinn = rev.join('');
console.log(joinn);


//Q4 Remove the last element from the array and log the modified array to the console

const removeLast = arr.pop();
console.log(removeLast);//it removes the last element from the array that is 2

const last = arr.slice(0,2);//it shows the remaining elements [3,5]
console.log(last);




// Q5 Check if all elements in the num  are even. Log "All even" or "Not all even" accordingly.
const num = [6,4,2,8,10,12]
const check = num.every((item)=>item %2 === 0)
if (check) {
    console.log("All even");
} else {
    console.log("Not all even");
}



// Find the index of a specific element in the array. Log the index to the console. 
//expected output: 3

const allNum = [3, 5, 2, 8, 5];
const searchElement = 2;

const find = allNum.indexOf(searchElement)
console.log(find);