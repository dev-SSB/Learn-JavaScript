// ------------------------------------ For Of Loop ---------------------------------------
/*

The for...of loop is a simple way to iterate over iterable objects such as arrays, strings, Map, Set, and other iterable collections. 

for...of loop iterates through the values of an iterable objects.

unlike the for...in loop, which iterates through keys or indices.


for( let val of Name ){
    console.log(val);
}



// for...of loop not work on non-iterable objects. 
// But we use Object.Keys(), Object.values(), or Object.entries() to convert non-iterable objects into iterable format like Arrays.

*/





// ---- for...of & iterable object Array ----
// The for...of loop retrieves each value from an array.

let fruits = ["Apple", "Banana", "Cherry"];

for (const fruit of fruits) {
  console.log(fruit);
}
// Output:
// Apple
// Banana
// Cherry







// ---- for...of & String ----
// Retrieves each character from string.

let str1 = "Hello SSB"

for(let char of str1){
    console.log(char);   
}
// Output:
// ---> H e l l o  S S B







// ---- for...of & iterable object Map ----
// Retrieves key-value pairs from a Map object as an array [key, value].

let userRoles = new Map([
    ["Alice", "Admin"],
    ["Bob", "Editor"],
    ["Charlie", "Viewer"],
  ]);
  
  for (const [key, value] of userRoles) {
    console.log(`${key}: ${value}`);
  }
// Output:
// Alice: Admin
// Bob: Editor
// Charlie: Viewer






// ---- for...of & iterable object Set ----
// Retrieves each unique value from a Set.


let uniqueNumbers = new Set( [1, 2, 3, 4, 4] );

for (const number of uniqueNumbers) {
  console.log(number);
}
// Output:
// 1
// 2
// 3
// 4








// ----- for...of with break & continue

let numbers = [1, 2, 3, 4, 5];

for (const num of numbers) {
  if (num === 3) {
    continue; // Skip the number 3
  }
  if (num === 5) {
    break; // Stop the loop when num is 5
  }
  console.log(num);
}
// Output:
// 1
// 2
// 4







// ---- for...of and arrays with index


const arr = ["SSB","PP","Ayu"];

for( const [index,value] of arr.entries() ){
    console.log(`${index} : ${value}`);
}
// Output :
// 0 : SSB
// 1 : PP
// 2 : Ayu








// ---- Limitation of for...of -----

// for...of loop not work on non-iterable objects. 
// But we use Object.Keys(), Object.values(), or Object.entries() to convert non-iterable objects into iterable format like Arrays.


let user = { name: "Alice", age: 25, role: "Admin" };

for (const [key, value] of Object.entries(user)) {
  console.log(`${key}: ${value}`);
}
// Output:
// name: Alice
// age: 25
// role: Admin

