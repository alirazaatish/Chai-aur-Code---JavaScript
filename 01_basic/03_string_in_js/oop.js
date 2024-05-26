// String In JavaScript

const name="Muhammad";
const age="18";

//console.log(name+age);
//console.log(`My name is ${name}. . I am ${age} years old.`);

const subjectName=new String('Computer-Science');

//console.log(subjectName);  //Its return a object of String that have a list of method was available.
//console.log(subjectName[4]); // u   


/* Methods in String */

const cityName="Gilgit-Skardu";

//  console.log(cityName.length);  // it will give length of string e.g 13
// console.log(cityName.charAt(5)); // ya 5 index per konsi char hy return karaga!
// console.log(cityName.indexOf('k'));  // ya char k kis index per hy return karaga!

const newString=cityName.substring(0, 5);
// console.log(newString);  //Gilgi

const anotherString=cityName.slice(-10, 5);
// console.log(anotherString);

const newStringOne= "    Atish   ";
// console.log(newStringOne);
// console.log(newStringOne.trim()) // it remove the starting and ending space    1.trimStart 2. trimEnd also exist!

const url="https://chatgpt.com/20%new/version/2024";
//console.log(url.replace('20%', '$'));
//console.log(url.replace('2024', '2030'));

console.log(url.includes('Atish')); // false
console.log(url.includes('.com')); // true

const splitNameString= " Ali$Raza$Atish";
console.log(splitNameString.split('$'));  // ya oopar ka variable ma store name ko her dollar sign sa break karaga array ma