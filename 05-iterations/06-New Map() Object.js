// --------------------------- Map -----------------------------

// Map() Object is different from map() method of array.

/*

The Map object holds key-value pairs and remembers the original insertion order of the keys. 
A key in the Map may only occur once; it is unique in the Map's collection. 

*/

// Map() Object can use any data type as keys.
// object only have string or symbol data type as keys. all keys in object are converted to string if we use number.

// key value pair, Remember Insertion Order, 

// to check Key exist in Map() Object we use --> has() Method

// we remove entries from Map() Object using --> delete() Method




// ---- Map Object------

let map1 = new Map();
map1.set("a",1);
map1.set("b",2);
map1.set("c",3);


// console.log(map1);
// ---> Map(3) { 'a' => 1, 'b' => 2, 'c' => 3 }


// console.log( map1.get('b') );
// ---> 2






// ---- ForOf Loop & Map ------

let map2 = new Map();

map2.set("a",1);
map2.set("b",2);
map2.set("c",3);
map2.set("d",4);
map2.set("e",5);

// console.log(map2);
// ---> Map(5) { 'a' => 1, 'b' => 2, 'c' => 3, 'd' => 4, 'e' => 5 }


// 
for(let key of map2){
    // console.log( key );
};
// --->
/*
[ 'a', 1 ]
[ 'b', 2 ]
[ 'c', 3 ]
[ 'd', 4 ]
[ 'e', 5 ]
*/



// Array Destructuring Use
for(let [key,value] of map2){
    // console.log(`key: ${key} & Value: ${value}`);
};
// --->
/*
key: a & Value: 1
key: b & Value: 2
key: c & Value: 3
key: d & Value: 4
key: e & Value: 5
*/











// ---- For...In Loop & Map  NO OUTPUT------

let map3 = new Map();

map3.set("a",1);
map3.set("b",2);
map3.set("c",3);
map3.set("d",4);
map3.set("e",5);


for(let index in map3){
    // console.log(index);
}
// ----> No OutPut
