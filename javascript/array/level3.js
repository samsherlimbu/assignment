//given the array, calculate sum of odd numbers using reduce method
const arr =[4,2,3,5]

arr.reduce((acc,curr)=>{
    if(curr%2 !== 0){
        return acc + curr
    }
    return acc;
},0)

