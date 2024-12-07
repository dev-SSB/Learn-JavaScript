// ---------------------------- map ----------------------------------

/*

let newArray = array.map( callback(currentValue, index, array), thisArg);
where index, array, and thisArg are optional

map method always return new Array of Same Size.
Creates a new array by transforming data.

map method applay callback function to each element in the array.

map Not Modify Original Array.

It can be chained with other array methods like map, filter and reduce.
chaining ---> arr.map().map().filter() 

In map() it is necessary to return a value in the callback function. The return value is what gets included in the new array If you do not return a value, undefined will be added to the new array for that position.


*/





// ---- Example -----
let myNum1 = [1,2,3,4,5,6,7,8,9,10];
let newNum1 = myNum1.map( (item) => item*10 );
console.log(newNum1);
// Output:
/*
[
  10, 20, 30, 40,  50,
  60, 70, 80, 90, 100
]
*/




// --- use index ----
// The index of each element can also be accessed in the callback.

let numbers = [10, 20, 30];
let indexedArray = numbers.map((num, index) => num + index);
console.log(indexedArray);
// Output: 
// [10, 21, 32]





// --- using thisArg ----
let multiplier = { factor: 2 };

let numbers1 = [1, 2, 3];
let doubled = numbers1.map(function (num) {
  return num * this.factor;
}, multiplier);

console.log(doubled); 
// Output:
// [2, 4, 6]








// --- Transforming an array of objects: ---

let users = [
  { firstName: "Alice", lastName: "Smith" },
  { firstName: "Bob", lastName: "Johnson" },
];

// callback function return string for each element in array.
let fullNames = users.map( (user) => `${user.firstName} ${user.lastName}`);

console.log(fullNames); 
// Output: 
// ["Alice Smith", "Bob Johnson"]








// ----  Chaining with Other Array Methods ---
let myNum2 = [1,2,3,4,5,6,7,8,9,10];

let newNum2 = 
myNum2
.map( (num) => num*10 )
.map( (num) => num+5 )
.filter( (num) => num>45 )

console.log(newNum2);
// Output:
// [ 55, 65, 75, 85, 95, 105 ]



// --- Example 2 of Chaining ---

let numbers3 = [1, 2, 3, 4, 5];

let doubledEvens = numbers3
.filter( (num) => num % 2 === 0) // Keep only even numbers and return newArray
.map( (num) => num * 2);        // Double the numbers in newArray and return newNewArray

console.log(doubledEvens); 
// Output: 
// [4, 8]






