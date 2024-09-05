// Interview Question Why we can not chnange PI Value


// Math.PI = 3.14---
console.log(Math.PI);

// Value Not Chnage
Math.PI = 5;
console.log(Math.PI);


// 
const descriptor = Object.getOwnPropertyDescriptor(Math,"PI");
console.log(descriptor);

/*
{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}
*/





// ------ Example -----

const obj = {
    userName:"SSB",
    age:22,
    email:"SSB@email.com"
};

console.log( Object.getOwnPropertyDescriptor(obj,"userName") );
// ---> { value: 'SSB', writable: true, enumerable: true, configurable: true }


Object.defineProperty(obj,"userName",{
    writable:false,
    enumerable:false
})

console.log( Object.getOwnPropertyDescriptor(obj,"userName") );
/*
{
  value: 'SSB',
  writable: false,
  enumerable: false,
  configurable: true
}
*/
