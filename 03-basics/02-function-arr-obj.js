// ------------ rest operator ---------------

// ...price  --> Spread Operator
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
// takeObj( {
//     name:"ayu",
//     city:"Pune"
// } );







// ------------ Function takes Array Parameter ---------------

function takeArray( anyArr ){
    console.log( `Value is ${anyArr[2]}` );
};

const arr = [200,300,"SSB",false];

// takeArray( arr );
// takeArray( [100,200,300,500] );
