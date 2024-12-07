// ---------------------- Set Object in JavaScript ------------------

/*

A Set is a collection of unique values.

It does not allow duplicate elements. 

The values can be of any data type, such as strings, numbers, objects, or even other Set objects.

*/




// ---- Creating a Set  ----
// We can create a Set using the Set constructor.

let mySet = new Set([1, 2, 3, 3, 4]);
console.log(mySet); 
// Output: 
// Set(4) { 1, 2, 3, 4 }






// ---- add(value) ----
// Adds a new value to the Set. If the value already exists, it will not be added again.

let mySet1 = new Set();
mySet1.add(1);
mySet1.add(2);
mySet1.add(1); // Duplicate, will not be added
console.log(mySet1);
// Output: 
// Set(2) { 1, 2 }





// --- delete(value) ---
// Removes a value from the Set.

mySet1.delete(2);
console.log(mySet1);
// Output: Set(1) { 1 }





//--- has(value) ----
// Checks if a value exists in the Set.

console.log(mySet1.has(1)); // Output: true
console.log(mySet1.has(3)); // Output: false





// --- clear() ---
// Removes all values from the Set.

mySet.clear();
console.log(mySet);
// Output: Set(0) {}





// ---  size ---
// Returns the number of elements in the Set.

console.log(mySet.size); // Output: 0





// --- for...of Loop ---
// Iterates over the values in the Set.

let mySet3 = new Set(["Apple", "Banana", "Cherry"]);

for (let value of mySet3) {
  console.log(value);
}
// Output:
// Apple
// Banana
// Cherry






// --- forEach() Method ---
// Executes a callback function for each element in the Set.

mySet3.forEach( (value) => {
  console.log(value);
});
// Output:
// Apple
// Banana
// Cherry




// Question 1
// Removing Duplicates from an Array
// We can use the spread operator (...) to spread the values of the Set back into a new array.
// The spread operator ... takes all the unique values from the Set and puts them into a new array.
let numbers = [1, 2, 2, 3, 4, 4, 5];
let uniqueNumbers = [...new Set(numbers)];
console.log(uniqueNumbers);
// Output: [1, 2, 3, 4, 5]






// Question 2
// Checking Element Uniqueness
let euSet = new Set();
let items = ["Apple", "Banana", "Apple", "Cherry"];

items.forEach((item) => {
  if (euSet.has(item)) {
    console.log(`${item} is a duplicate.`);
  } else {
    euSet.add(item);
  }
});
// Output:
// Apple is a duplicate.









let setA = new Set([1, 2, 3, 4]);
let setB = new Set([3, 4, 5, 6]);


//  Intersecting Two Sets
let intersection = new Set( [...setA].filter( (value) => setB.has(value) ));
console.log(intersection);
// Output: Set(2) { 3, 4 }


// Union of Two Sets
let union = new Set([...setA,...setB]);
console.log(union);
// Output:
// Set(6) { 1, 2, 3, 4, 5, 6 }


// Difference Between Two Sets
let difference = new Set( [...setA].filter((value) => !setB.has(value)));
console.log(difference);
// Output: Set(2) { 1, 2 }
