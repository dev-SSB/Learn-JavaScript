// ------------------------------- function IIFE ----------------------------

//          ()                    ()                 ;
// function-defination      execution-Call          End 


// Named IIFF
( function DBConnect(){
    console.log("DB CONNECTED");
}) ();



// UnNamed IIFF
( () => {
    console.log("DB CONNECTED 2");
} ) () ;



// UnNamed IIFF with Parameter
( (Name) => {
    console.log(`DB CONNECTED ${Name}`);
} ) ("PK") ;