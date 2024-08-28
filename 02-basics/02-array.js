// ------------------------- Array part 2-----------------------------------


let marval_heros = [ 'ironman', 'spiderman', 'dr.strange' ];
let dc_heros = [ 'batman', 'joker', 'flash' ];



// push()
// marval_heros.push(dc_heros);
// console.log(marval_heros);

/* Output

[
  'ironman',
  'spiderman',
  'dr.strange',
  [ 'batman', 'joker', 'flash' ]
]

*/






// concat()
let all_heros = marval_heros.concat(dc_heros);
// console.log(all_heros);


/* Output

[ 'ironman', 'spiderman', 'dr.strange', 'batman', 'joker', 'flash' ]

*/





// ------------------------- Spread Operator IMP-----------------------------------

let heros  = [ ...marval_heros, ...dc_heros ]
// console.log( heros );

/* OUTPUT

[ 'ironman', 'spiderman', 'dr.strange', 'batman', 'joker', 'flash' ]

*/







// ------------------------- flat() IMP-----------------------------------

let another_array = [ 1,2,3, [4,5,6], 7, [8, [9,10] ], 11 ];

// console.log( another_array.flat(Infinity) );




// ------------------------- Array.isArray() -----------------------------------
// console.log( Array.isArray("pk") )




// ------------------------- Array.from()  -----------------------------------
// convert in to Array

// console.log( Array.from("SSBPK") );




// ------------------------- Array.of()  -----------------------------------
// convert in to Array

let num1 = 100;
let num2 = 600;
let num3 = 1200;

// console.log( Array.of( num1,num2,num3 ) );

