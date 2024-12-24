// ------------------------- Array -----------------------------------

// 
let arr1 = [1, 2, 3, "SSB"];
// console.log(arr1);


let arr2 = new Array(1,2,3,4,5);
// console.log(arr2);
// console.log(arr2[2]);




// ------------------------- Array Methods -----------------------------------

let arr3 = [1,2,3,4,5];


// push(elem)  --> Add element at last
arr3.push(9); //[1,2,3,4,5,9]
// console.log( arr3 );


// 
// pop() --> remove element from last
arr3.pop(); //[1,2,3,4,5]
// console.log( arr3 );


// unshift(elem) --> Add element at front
arr3.unshift(10); //[10,1,2,3,4,5]
// console.log( arr3 );


// shift() --> remove element from front
arr3.shift(); // [1,2,3,4,5]
// console.log( arr3 );


// includes() 
// [1,2,3,4,5]
// console.log( arr3.includes(11) ); //false


// indexOf() 
// [1,2,3,4,5]
// console.log( arr3.indexOf(11)); // -1
// console.log( arr3.indexOf(3) ); // 2


// join() --> convert in to string
// arr3 = [1,2,3,4,5]
const newarr = arr3.join()

// console.log(` arr3 ${arr3} `);
// console.log(` newarr ${newarr} `);
// console.log(` typeof newarr ${typeof newarr} `);
/*
 arr3 1,2,3,4,5 
 newarr 1,2,3,4,5
 typeof newarr string
*/



// ------------------------- Array Methods Slice Splice -----------------------------------

const arrNew1 = [1,2,3,4,5,6]
// console.log(`arrNew1 : ${arrNew1}`);


// slice(start,end) --> Original Array Same
const arrNew2 = arrNew1.slice(1,4);

// console.log(" \nslice(1,4) ")
// console.log(`arrNew2 : ${arrNew2}`); 
// console.log(`arrNew1 : ${arrNew1}`);

/* Output
slice(1,4)
arrNew2 : 2,3,4
arrNew1 : 1,2,3,4,5,6
*/


// splice(start,end) --> Original Array Change
const arrNew3 = arrNew1.splice(1,4);

// console.log(" \nsplice(1,4) ")
// console.log(`arrNew3 : ${arrNew3}`);
// console.log(`arrNew1 : ${arrNew1}`);

/* OUTPUT
splice(1,4) 
arrNew3 : 2,3,4,5
arrNew1 : 1,6
*/