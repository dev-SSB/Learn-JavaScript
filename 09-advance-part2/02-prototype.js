// ---------- ProtoType ------------

/*
    Array ---------------------
                              ⬇️
                              ⬇️

    String   ---------->    Object ---------->  NULL

                              ⬆️ 
                              ⬆️ 
    Function ------------------
    
    
    Object Prototype Accessed By All ARRAY, STRING, FUNCTION etc.

    Array Prototype Accessed By Only ARRAY.

    this ---> Jisne Ne Call Kiya hai Wo This hai
*/


// String
let str = "SSB       ";

// Array
let herosArr = ['spidy','hulk'];

// Object
let heroPowerObject = {
    spidy:"sling",
    hul:"Muscle",

    getSpidyPower : function () {
        console.log(`spidy power is ${this.spidy}`);
    }
};


// Object Prototype Accessed By All ARRAY, STRING, FUNCTION etc.
Object.prototype.SSB = function () {
    console.log("helllo SSB ----> Object Prototype");
};


// Accessed by String 
// str.SSB()

// Accessed by Array 
// herosArr.SSB()

// Accessed by Object 
// heroPowerObject.SSB()








// Array Prototype Accessed By Only ARRAY.

Array.prototype.arraySSB = function() {
    console.log("Hey SSB -----> Array ProtoType");
};


// Accessed by String -----> Error
// str.arraySSB()

// Accessed by Array 
// herosArr.arraySSB()












// ---------- ProtoTypal Inheritance ------------

/*

*/

const user = {
    name:"SSB",
    age:25
};

const teacher = {
    makeVideo:true
};

const teachingSupport = {
    isAvail:true
};

const taSupport = {
    makeAssign:"JS Assign",
    fullTime:true,

    // ProtoTypal Inheritance
    __Proto__:teachingSupport
};

// ProtoTypal Inheritance
teacher.__Proto__ = user;









// ------ Modern Syntax -------

/*
Object.setPrototypeOf( 1,2 );

All Property of 2 accessed by 1
*/


Object.setPrototypeOf( teachingSupport,teacher );








// Example

const anotherStr = "SSB         ";

String.prototype.realLength = function(){
    console.log(this);
    console.log(` true Length is ${anotherStr.trim().length} `);
};

anotherStr.realLength();


"PK    ".realLength();
"Ayu    ".realLength();







