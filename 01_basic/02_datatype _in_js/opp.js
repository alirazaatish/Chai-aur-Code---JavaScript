// Datatype in Javascript

let name = "Ali";  // string type
let age = 19;   // number type;
let pass = true; // boolen type

console.log(pass);

//<---Permitive Datatype--->
// number => 2 to power 53
// bigint
// string => ""
// boolen => true/false
// null => standalone type
// undefine => 
// symbole => unique

//<---Reference Datatype--->
// Array
// Object
// Function/Class
// Map
// Set

console.log(typeof "Ahmad");  // string

console.log(typeof(null)); // object

console.log(typeof(undefine)); // undefine  => undefine apna ap ma ak datatype hy

//*******************************************************************************************************


// Stack(Permitive), Heap(Non-Permitive)

let myGithupName="alirazaatish";
let anotherName=myGithupName;
    anotherName="AtishGolpa";

console.log(myGithupName);  // Permitive datatype ma jab change karta hy to actual value ma change nii hota balki copy banta hy
console.log(anotherName);   // Permitive datatype stack ma store honta hy

let userOne={
    email: "atish@gmail.com",
    id: 29404;
}

let userTwo=userOne  // Non_permitive datatype ma jab value change karta hy to actual value ma change ajata hy
                    // Non-permitive Heap ma store hota hy
   userTwo.email="aimen@gmail.com";  

console.log(userOne); // aimen@gmail.com
console.log(userTwo); // aimen@gmail.com
