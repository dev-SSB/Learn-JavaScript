// ------------- For Each Loop only Work on Array -----------------------
/*
ARRAY = [  --------- ]

ARRAY.forEach ( ----- ){
    --------
} 

forEach method is Higher Order Function.
forEach execute callback function for each element in array.

forEach method always return undefined.
forEach method can not use break, continue and return.
forEach method does not change original array.


Array.forEach( callback(item,index,Array) => { } , thisArg);

*/





// --- ForEach & Array ----
 
let arr1 = ["js","Cpp","Java","Python"];



// 
arr1.forEach( function (item) {
    // console.log(item);
    
})
// js Cpp Java Python




// 
arr1.forEach( (item) => {
    // console.log(item);
    
})
// js Cpp Java Python




// 
function printMe(item){
    console.log(item);
}

// arr1.forEach( printMe );
// js Cpp Java Python









// --- ForEach & Array contain OBJECT ----

const arrInObj = [
    { Name:"SSB", Age:15 },
    { Name:"Ayu", Age:22 },
    { Name:"ABhi", Age:75 },
    { Name:"SUraj", Age:35 }
];

arrInObj.forEach ( (item) => {
    console.log( item.Name, item.Age );
})
// --->
/*

SSB 15
Ayu 22
ABhi 75
SUraj 35

*/




// --- Access the Index ----
let arr = ["js","Cpp","Java","Python"];
arr.forEach( (val, index) => {
    console.log(`Index ${index}: ${val}`);
});
// Output:
// Index 0: js
// Index 1: Cpp
// Index 2: Java
// Index 3: Python





// --- Accessing the Entire Array ----

arr.forEach( (val, index,arr) => {
    console.log(`${index} & ${val} & [${arr}]`);
});
// Output :
// 0 & js & [js,Cpp,Java,Python]
// 1 & Cpp & [js,Cpp,Java,Python]
// 2 & Java & [js,Cpp,Java,Python]
// 3 & Python & [js,Cpp,Java,Python]
  




// --- Using thisArg ---
// You can pass a custom this context to the callback using the thisArg parameter.

let multiplier = {
    factor: 2,
};
  
let numbers = [1, 2, 3];
numbers.forEach(function (num) {
console.log(num * this.factor);
}, multiplier);
// Output:
// 2
// 4
// 6
  





