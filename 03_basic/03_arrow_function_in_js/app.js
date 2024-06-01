//Arrow Function And This Keywords In JavaScript!

let user={
    userName: "Atish",
    password:"1234ds",
    id: 324453,
    wellcomeMsg: function (){
        console.log(`${this.userName}, Wellcome to this website. Your car model is ${car.model}`);
        //console.log(this); if Only this keyword is print then the object list return
    }
}

let car={
    model: "Toyota",
    year: 2002
}

user.wellcomeMsg(); // calling object function
user.userName="Ali";
user.wellcomeMsg();

//console.log(this); // it return window object


function thiskeyword() {
    let username="Raza";
    //console.log(this.username); // error bcs this keyword only use in object
    console.log(this); 
}
//thiskeyword();

const addTwoNum= (num1, num2)=>{
    return num1+num2;
}
console.log(addTwoNum(23,54));

const addTwoNum= (num1, num2)=> num1+num2;
console.log(addTwoNum(2,5));

const addTwoNum= (num1, num2)=> (num1+num2); 
console.log(addTwoNum(2,5));


const addTwoNum= (num1, num2)=> ({name: "Ali"}); // { } object declare karna k liya ya brace use hoty hy per arrow function 
                                                // ma return karna k liya () brace lagana parta hy
console.log(addTwoNum( ));
