//datatype conversion in javascript

let score="33";  // "33ab"
console.log(typeof score);

let valueInNumber=Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33"=>33
// "33ab"=>NoN
//true=>1; false=>0;


let name="Atish";
console.log(typeof name);

let boolenInName=Boolean(name);
console.log(typeof boolenInName);
console.log(boolenInName)

/*
if the name variable is empty then the type of boolenInName is false
if the name variable is notempty then the type of boolenInName is true
*/

let undefineStore=undefined;
console.log(undefineStore);

let undefinedInNumber=Number(undefineStore);
console.log(typeof undefinedInNumber);
console.log(undefinedInNumber);