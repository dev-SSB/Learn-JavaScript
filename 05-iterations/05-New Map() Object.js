// --------------------------- Map -----------------------------

// Map() Object is different from map() method of array.

/*

The Map object holds key-value pairs. 

Rmembers the original insertion order of the keys. 

Key are unique in the Map's collection. 

Map keys can be of any data type, including objects, functions, and primitive values.

*/

// object only have string or symbol data type as keys. all keys in object are converted to string if we use number.




// ---- Map Object Constructor------
// We can create a Map using the Map constructor.

let myMap = new Map([
    ["name", "Alice"],
    ["age", 25],
    ["role", "Admin"],
]);
console.log(myMap); 
// Output: Map(3) { 'name' => 'Alice', 'age' => 25, 'role' => 'Admin' }
  





// ---- set Method ---
// Adds or updates a key-value pair in the Map.
// set(key, value)

let map1 = new Map();
map1.set("a",1);
map1.set("b",2);
map1.set("c",3);

console.log(map1);
// Output:
// ---> Map(3) { 'a' => 1, 'b' => 2, 'c' => 3 }




// --- get Method---
// Retrieves the value associated with the specified key.
// get(key)

console.log( map1.get('b') );
// Output :
// ---> 2




// --- has Method ---
// Checks if a key exists in the Map
// has(key)

console.log(map1.has('b'));
// Output :
// True




// --- delete Method ---
// Removes a key-value pair from the Map.
// delete(key)

console.log(map1.delete('b'));
console.log(map1);
// Output:
// true
// Map(2) { 'a' => 1, 'c' => 3 }





// ---- clear method ----
// Removes all key-value pairs from the Map.
// clear()

console.log(map1.clear());
console.log(map1);
// Output:
// undefined
// Map(0) {}






// size method
// Returns the number of key-value pairs in the Map.
// size 

console.log(map1.size);
// Output:
//3







// ---- ForOf Loop & Map ------
// for...of Loop Iterates through key-value pairs


let userRoles = new Map([
  ["Alice", "Admin"],
  ["Bob", "Editor"],
  ["Charlie", "Viewer"],
]);

// Array Destructuring Use
for (let [key, value] of userRoles) {
  console.log(`${key}: ${value}`);
}
// Output:
// Alice: Admin
// Bob: Editor
// Charlie: Viewer










// ---- For...In Loop & Map  NO OUTPUT------

let map3 = new Map();

map3.set("a",1);
map3.set("b",2);
map3.set("c",3);
map3.set("d",4);
map3.set("e",5);


for(let index in map3){
    // console.log(index);
}
// ----> No OutPut
