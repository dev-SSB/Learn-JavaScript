// ---------------------------------- Filter ------------------------------------------

// let newArray = array.filter( callback(element[, index[, array]] ) [, thisArg] );

// Filter Alaways return New Array

// Filter Check Condition Must be true

// Filter Not Modify Original Array


// callback is A function that is called for each element in the array. It should return true to keep the element, or false otherwise.

// It can be chained with other array methods like map and reduce.




// ------ forEach return undefined ------------

const coding = ['js','cpp','java','c','py'];
const result = coding.forEach( (item) => {
    return item;
})
// console.log(result);
// ---> undefined








// ------- Filter ------------


/*      */
let myNum1 = [1,2,3,4,5,6,7,8,9,10];
let newNum1 = myNum1.filter( (item) => item>5 );
// console.log(newNum1);
// ---> [ 6, 7, 8, 9, 10 ]



/*      */
let myNum2 = [1,2,3,4,5,6,7,8,9,10];
let newNum2 = myNum2.filter( (num) => {
    return num>5;
}); 
// console.log(newNum2);
// ---> [ 6, 7, 8, 9, 10 ]




/*  Example    */

let bookData = [
    { name:"Harrry Pooter", cost:1000 },
    { name:"Spider Man", cost:500 },
    { name:"KGF", cost:1500 },
    { name:"John Wick", cost:2000 },
    { name:"GOT", cost:5000 },
]; 

let totalMoney = bookData.filter( (obj) => {
    return obj.cost>1500
})
// console.log(totalMoney);
// ---> [ { name: 'John Wick', cost: 2000 }, { name: 'GOT', cost: 5000 } ]











// --------- Perform Above Work Using For Each  ------------

let myNum3 = [1,2,3,4,5,6,7,8,9,10]

let newNum3 = [];

myNum3.forEach( (num) => {
    if(num>5){
        newNum3.push(num);
    }
});
// console.log(newNum3);
// ---> [ 6, 7, 8, 9, 10 ]






// The thisArg parameter allows you to set the value of this in the callback function. This can be useful if you’re using methods from an object. 

const context = {
    threshold: 3
};
  
const numbers = [1, 2, 3, 4, 5, 6];

const filteredNumbers = numbers.filter(function(num) {
  return num > this.threshold;
 }, context);
  
// console.log(filteredNumbers); 
  
  // Output: [4, 5, 6]
  




//   we can chain filter with other array methods like map, reduce, or sort to perform more complex operations.

const number1 = [1, 2, 3, 4, 5, 6];

// Get square of even numbers
const squaresOfEven = number1
  .filter(num => num % 2 === 0)
  .map(num => num ** 2);

// console.log(squaresOfEven); 

// Output: [4, 16, 36]





// Using Filter We can easily Removes falsy values
const mixedArray = [1, null, 2, undefined, 3];

const filteredArray = mixedArray.filter(Boolean); // Removes falsy values
// console.log(filteredArray); 
// Output: [1, 2, 3]

