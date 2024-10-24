// ---------------------------- reduce ----------------------------------

// let result = array.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue]);

// reduce function must takes accumulator & currentValue.

// firstly accumulator use initialValue. Then use previously returned value.

// If no initial value is provided, reduce will use the first element as the initial value and start from the second element.

// reduce always returns a single value

// We can chain reduce with other array methods like filter and map.





/*

const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(sumWithInitial);
// Expected output: 10

*/




/*      */
let myNum1 = [1,2,3];

let totalSum1 = myNum1.reduce( function (accu,current) {
    // console.log(` acc: ${accu} & current: ${current}`);
    
    return accu+current
},0);

// console.log(totalSum1);
// ---> 
/*

acc: 0 & current: 1
acc: 1 & current: 2
acc: 3 & current: 3
6

*/




/*      */
let myNum2 = [1,2,3];

let totalSum2 = myNum2.reduce( (accu,current) => {
    return accu+current
},0);

// console.log(totalSum2);
// ---> 6





/* Example Cart */

let cart = [
    {course:"Py", cost:5000},
    {course:"C", cost:2000},
    {course:"JS+React", cost:10000},
    {course:"JS", cost:5000},
    {course:"CPP", cost:3000},
]

const totalCost = cart.reduce( (acc,obj) => acc+obj.cost ,0 );

console.log(totalCost);
// ---> 

