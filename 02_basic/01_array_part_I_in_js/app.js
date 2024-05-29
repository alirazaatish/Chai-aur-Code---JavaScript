// Array in JavaScript

const myArray=[1,2,3,4,5,6,7];

const myArray2=["Ali", true, false, 3, ];

const myArray3= new Array(9,8,7,6,5,4);

console.log(myArray.push(5)); // push add element end of array
console.log(myArray.push(12)); 
console.log(myArray.pop()); // pop remove element end of array

console.log(myArray.shift()); // shift remove element starting of array
console.log(myArray.unshift(100)); 
console.log(myArray.unshift(200)); // unshift add element starting of array

console.log(myArray.includes(5));
console.log(myArray.indexOf(6));

const newArray = myArray.join() // it convert array into string

console.log(myArray);
console.log(typeof(myArray));
console.log(newArray);
console.log(typeof(newArray));

/********Slice and Splice Method in javascript*/

let marks=[22,33,44,55,66,77,88,99];

console.log("Before Slice method", marks);
console.log(marks.slice(0,5));  // In Slice method last range element not include
console.log("After Slice method", marks);

console.log("Before Splice method", marks);
console.log(marks.splice(1,3));   // In Splice method last rage element should be include
console.log("After Splice method", marks);


/*  The major difference b/w Slice and Splice is  Slice method does't not changes of actual array but the 
     Splice method changes the actual array.*/

