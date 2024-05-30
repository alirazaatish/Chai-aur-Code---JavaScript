// Object In JavaScript

//**********************************Part-1*****************************************/

const mySymbole= Symbol("SymboleValue");

const student={
    name: "Ali",
    "last Name": "Atish",
    [mySymbole]: "Symbole1",
    rollNo: 179522,
    Age: 18,
    isLogin: true,
    email: "ali@gmail.com"
}

console.log(student.email); // Object access method-1
console.log(student["email"]); // Object access method-2
console.log(typeof student["Age"]);

console.log(student["last Name"]);
console.log(student[mySymbole]);

student.email="aimen@gmail.com";
console.log(student);

Object.freeze(student); // Object ko freez karna sa object ma chage nii karsakta

student.Age=20;
console.log(student);

student.greeting=function(){
    console.log("Hello Student!");
}

student.greetingTwo=function(){
    console.log(`Hello Student! ${this.name}`);
}

console.log(student.greeting());
console.log(student.greetingTwo());


//**********************************Part-2*****************************************/

const instaUser = new Object();
instaUser.name = "Ali";
instaUser.id = 101;
instaUser.password = "hello123";

//console.log(instaUser);


const regularUser = {
    userName:{
        fullName:{
            firstName: "Ali",
            lastName: "Raza"
        }
    }
}

console.log(regularUser.userName.fullName.firstName);

const obj1 = {1: "a", 2: "b", 3:"c"};
const obj2 = {4: "a", 5: "b", 6:"c"};
const obj3 = {7: "a", 8: "b", 9:"c"};

const combineObj= Object.assign({}, obj1, obj2, obj3);
console.log(combineObj);
const newobj= {...obj1, ...obj2, ...obj3};  // ya object ko spilit kranga same oopar ki trah bhut short stric hy
console.log(newobj);

// Example

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// Expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget);
console.log(returnedTarget === target);
// Expected output: true


// Array ka ander object and thier access method

const arrayObject = [
    {
        id: 1,
        Name: "Rohan",
        email: "rohan@gmail.com"
    },
    {
        id: 2,
        Name: "Ahsan",
        email: "ahsan@gmail.com"
    },
    {
        id: 3,
        Name: "Ram",
        email: "ram@gmail.com"
    },
    {
        id: 4,
        Name: "Atish",
        email: "atish@gmail.com"
    }
];

console.log(arrayObject);

// How to Access Array of Object key and Value

console.log(arrayObject[3].Name); // Expected Output Atish


let linkedinUser = {
    name: "Ali",
    password: "12345sd",
    email: "aliraza@gmail.com",
    DOB: "04/10/2006"
}

console.log(Object.keys(linkedinUser)); // it return all keys of object
console.log(Object.values(linkedinUser)); // it return all values of object
let entiresArray = Object.entries(linkedinUser); // entries method her key oris ka value ko array ma convert karta hy
console.log(entiresArray);

console.log(linkedinUser.hasOwnProperty('email')); // hasOwnProperty key exist karta hy ya nii check karta hy or return ma true ya false data hy

//*******************Part-3***********************/
//*************Object de-sturcturing and API formate*********************************/

const obj = { a: 1, b: 2 };
const { a, b } = obj;
// is equivalent to:
// const a = obj.a;
// const b = obj.b;


//**************************************HAPPY ENDING OBJECT LEACTURES*************************************//
//*************************************CODING LOVER*******************************************************//