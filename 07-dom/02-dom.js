/*



*/





// ---------- getElementById, .id, .className, getAttribute, setAttribute -----------

const title = document.getElementById("title");

// console.log(title.id);
// console.log(title.className);

// console.log( title.getAttribute('id') );
// console.log( title.getAttribute('class') );

// title.setAttribute('class','heading test h1-first')
// console.log(title.className);





// ---------- style -----------
// console.log(title)

// title.style.backgroundColor="green"
// title.style.padding="10px"






// ---------- Difference between innerText, textContent, innerHTML -----------
// console.log(title)

// console.log( title.innerText )

// console.log( title.textContent )

// console.log( title.innerHTML )







// ---------- querySelector -----------

// console.log( document.querySelector('#title') );

// console.log( document.querySelector('.heading') );

// console.log( document.querySelector('input[type=password]') );







// ---------- querySelectorAll, NodeList, & forEach in NodeList -----------

const templist = document.querySelectorAll('li');
// console.log(templist);

// Error
// templist.style.color="green";

// forEach present nodelist
templist.forEach( (list) => list.style.color="yellow" );

// No Error
templist[0].style.color="blue";







// ---------- getElementsByClassName , htmlCollecion, HC to Array, map -----------


const classList = document.getElementsByClassName('lorem');
// HTMLCollection(4) [h2.lorem, h2.lorem, h1.lorem, p.lorem]

// Conversion HTMLCollection to Array
const clToArr = Array.from(classList)
// console.log( clToArr );

// Find Element whose Text Length greater than 25
const evenElem = clToArr.filter( (elem) => {
    return elem.innerText.length > 25;
})
// console.log(evenElem);






// ---------- Parent to Children -----------
// ---------- .children, for Loop, .firstElementChild, .lastElementChild -----------

const parent = document.querySelector('.parent');

// console.log(parent.children);

parent.children[1].innerText = "HELO SSB";
// console.log(parent.children[1]);

for( let i=0; i< parent.children.length ; i++ ){
    // console.log( parent.children[i].innerHTML )
}

// 
// console.log( parent.firstElementChild );

// 
// console.log( parent.lastElementChild );








// ---------- Children to Parent -----------
// ---------- .parentElement, .nextElementSibling, .childNodes -----------


const mapChild = document.querySelector('#map')

// Parent
// console.log( mapChild.parentElement );

// Next Element Sibling
// console.log( mapChild.nextElementSibling );

// Parent child Nodes
// console.log( parent.childNodes );



