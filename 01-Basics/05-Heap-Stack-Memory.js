// 05-Heap-Stack-Memory.js


// ---------------------  Stack ---------------------------
/*
    - Primitive Data Type store in Stack.
    - Stack mai copy milata hai.
*/

let name1 = "SSB";
let name2 = name1;
name2 = "ayu";

console.log(name1);
console.log(name2);




// ---------------------  Stack ---------------------------
/*
    - Non Primitive Data Type store in Heap.
    - Heap mai reference milata hai original value ka. 
    - jo bhi change karenge wo original value mai change hoga. 
*/


let obj1 = {
    name:"SSB",
    age:15
};
let obj2 = obj1;
obj2.age = 20;

console.log(obj1);
console.log(obj2);