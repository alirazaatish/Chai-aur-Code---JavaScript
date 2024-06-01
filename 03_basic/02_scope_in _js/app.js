//Scope Of Global And Local In JavaScript!

// let a=10;
// const b=20;
// var c=30;

if(true){
    let a=10;
    const b=20;
    var c=30;
}

// console.log(a);
// console.log(b);
console.log(c);

/*
When we declare a variable inside any block of code it is called local scope.
if we declare that variable with keywords let or const its scope is only that block of code and not accessable onside
of block , but if we decalre with key word var then that variable scope is global and we can access it also onside the
block of code see above example.
*/

// Nested Scope 

function one(){
    let userName= "Aimen";
    function two(){
        let password="12345";
        console.log(`${userName}, your password is ${password}.`);
    }
    two();
    //console.log("Password= ", password); error bcs local scope of variable
}
one();

