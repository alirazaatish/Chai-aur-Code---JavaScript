// Array Part-2 in JavaScript

let sectionA=["Ali","Raza", "Atish", "Golpa", "Balti"];
let sectionB=[1,3,4,5,8];

sectionA.push(sectionB);

// console.log("NEW ARRAY", sectionA);
// console.log(sectionA[5][1]); // 3 Output

let bothSection= sectionA.concat(sectionB);
// console.log(bothSection);

let newArray = [...sectionA, ...sectionB]; //Spliting Array
// console.log(newArray);

let multipleArray = [1,4,5,6,[33,44,55],0,9,[00,11,[77,66,55]]];
let SplitingArray= multipleArray.flat(Infinity); // flat method use to siplit array
console.log(SplitingArray);


console.log(Array.isArray("Atish"));
console.log(Array.from("Atish"));