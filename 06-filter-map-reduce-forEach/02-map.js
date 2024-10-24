// ---------------------------- map ----------------------------------


// let newArray = array.map(callback(currentValue[, index[, array]])[, thisArg]);

// map return Same Size New Array

// chaining ---> arr.map().map().filter() 

// In map() it is necessary to return a value in the callback function. The return value is what gets included in the new array If you do not return a value, undefined will be added to the new array for that position.


/*      */
let myNum1 = [1,2,3,4,5,6,7,8,9,10];
let newNum1 = myNum1.map( (item) => item*10 );
// console.log(newNum1);
// --->
/*
[
  10, 20, 30, 40,  50,
  60, 70, 80, 90, 100
]
*/






/*   Chaining   */
let myNum2 = [1,2,3,4,5,6,7,8,9,10];

let newNum2 = myNum2
                .map( (num) => num*10 )
                .map( (num) => num+5 )
                .filter( (num) => num>45 )

// console.log(newNum2);
// ---> [ 55, 65, 75, 85, 95, 105 ]





