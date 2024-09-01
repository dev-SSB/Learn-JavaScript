const parent = document.querySelector('.language');


// ---------------- New li Add -----------------
// Tree Traversal Need
// No Optimize Way


function addLang(lang){
    const li = document.createElement('li');
    li.innerHTML = `${lang}`;
    parent.appendChild(li);
}

addLang('python');



// ---------------- Optimize Way to Add-----------------

function addLangOptimizeWay(lang) {
    // Create Element
    const li = document.createElement('li');
    // Add ID
    li.id = lang;
    // Language Add in Element
    li.appendChild( document.createTextNode(lang) );
    // Add Element in Unorder List
    parent.appendChild(li);
}

addLangOptimizeWay('Java');
addLangOptimizeWay('typescript')






// ---------------- Edit -----------------


function replaceLanguage(replaceName,lang){
    
    // Create Element
    const li = document.createElement('li');
    // Add ID
    li.id=`${lang}`;
    // Language Add in Element
    li.appendChild( document.createTextNode(lang) );

     // Replace
    const replace = document.getElementById(replaceName);
    if (replace) {
        replace.replaceWith(li);
    } 
    else {
        console.error(`Element with ID "${replaceName}" not found.`);
    }
}

replaceLanguage('typescript', 'TS');








// ---------------- Edit -----------------
function removeLang(lang) {
    const elem = document.getElementById(lang);

    if(elem)
        elem.remove();
    else
        console.error("Language Not Present");
}

removeLang("TS");
