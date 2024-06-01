// Function In JavaScript

//******************************************************************

function myFunction(){
    console.log("Function is Run!");
}
myFunction();

let functionStore=myFunction();
console.log(functionStore);
//**********************************************************************
function sum(num1, num2){
    let sum=num1+num2;
    console.log(sum);
}
let storef=sum(20, 34);
console.log(storef);  // if function not return any value than we store function call in any variable its give undefine 

//***********************************************************************

function loginUser(userName){
    if(userName===undefined){
        console.log("Pass argument name please!");
        return console.log("if condition run and function terminat!");
    }
    console.log(`${userName} is login currently!`);
    return console.log("Return is work! Funtion Terminate!");
}
//loginUser(); // if we not pass argument then it return undefine
loginUser("Atish");
loginUser("Aimen");

//***********************************************************************************

/*When you pass an object as a parameter, if the function changes the object's properties, 
  that change is visible outside the function, as shown in the following example:*/

  function myFunc(theObject){
    theObject.make="Toyota";
    theObject.year=2002;
  }

  let myCar = {
    make: "Honda",
    model: "Acoord",
    year: 1999
  }

  console.log(myCar.make); // Honda
  console.log(myCar);

  myFunc(myCar);
  console.log(myCar.make); // Toyota
  console.log(myCar);

  /*When you pass an array as a parameter, if the function changes any of the array's values, 
    that change is visible outside the function, as shown in the following example */
    function myFunc(theArr) {
        theArr[0] = 30;
      }
      
      const arr = [45];
      
      console.log(arr[0]); // 45
      myFunc(arr);
      console.log(arr[0]); // 30

      /*Function can be anonymous*/
      const square = function(number){
        return number*number;
      }
      let a= square(4);
      console.log(a);


    //<********************************Rest operator in Function of JavaScript**************************>
    function calculateCardPrices(...price){
        return price;
    }

    let totalPrice = calculateCardPrices(200, 300, 400);
    console.log(totalPrice);

    let newArray= totalPrice.push(1111); // length 4
    console.log(totalPrice);


    function objTest(x){
         console.log(obj1.name);
    }

    let obj1={
      name: "Atish",
      id: "13443",
      password: "21345dsf"
    }

    objTest(obj1)