// ------------------- call & this -------------------


// Reference Hold Karne Ke liye Call Ata Hai...


function serUserName(name) {
    // complex DB

    this.name = name;
    console.log("called");
}

function createUser(name,email,pass) {
    
    serUserName.call(this,name);

    this.email = email;
    this.pass = pass;
}

const user1 = new createUser("SSB","SSB@EMAIL",1234);
console.log(user1);

