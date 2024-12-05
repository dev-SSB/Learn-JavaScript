// ------------ rest operator ---------------


// Spread Operator used to expand and Array.
// const arr1 = [1,2,3];
// const arr2 = [4,true,"ssb"];
// const arr = [...arr1,...arr2];
// console.log(arr);
//  Output : [ 1, 2, 3, 4, true, 'ssb' ]




// ...price  --> Here It is Rest Operator
// rest operator used to collects number of arguments into an Array.
function calculatePrice( ...price ){
    return price;
};

const result = calculatePrice(100,200,300,400);

// Output --> [ 100, 200, 300, 400 ]
// console.log(result);



function calcPrice(p1,p2,...price){
    return price;
};
// Output --> [ 600, 800, 1000 ]
// console.log( calcPrice(200,400,600,800,1000) );






// ------------ Function takes OBJECT Parameter ---------------

function takeObj( anyObj ){
    console.log( `Name is ${anyObj.name} & City is ${anyObj.city}` );
};

const obj = {
    name : "SSB" ,
    city : "Nanded"
};

// takeObj( obj );
// Name is SSB & City is Nanded

// takeObj( { name:"ayu",city:"Pune"} );
// Name is ayu & City is Pune






// ------------ Function takes Array Parameter ---------------

function takeArray( anyArr ){
    console.log( `Value is ${anyArr[2]}` );
};

const arr = [200,300,"SSB",false];
// takeArray( arr );
// Value is SSB

// takeArray( [100,200,300,500] );
// Value is 300



/*
Modifying Arrays Inside Functions
You can also modify the original array within a function.
*/

function doubleArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] *= 2; // Double each element
    }
}

const myArray = [1, 2, 3];
doubleArray(myArray);
// console.log(myArray); 
// Outputs: [2, 4, 6]
