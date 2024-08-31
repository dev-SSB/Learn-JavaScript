// ---------------------------------- Filter ------------------------------------------

// Filter Alaways return Dynamic Array
// Filter Check Condition Must be true





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
console.log(totalMoney);
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

