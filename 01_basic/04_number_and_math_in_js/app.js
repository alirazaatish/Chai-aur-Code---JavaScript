// Number and Math in JavaScript
/*
let score=500;
console.log(score);
console.log(typeof(score));

let balance = new Number(1000);
console.log(balance);
console.log(typeof(balance));

let floatNumber = new Number(133.434565);
console.log(floatNumber.toFixed(3)); // toFixed method sa point ka baat kitna digit rakna hy vo bata hy!

console.log(floatNumber.toString().length);

let tenThousand = new Number(10000000);
console.log(tenThousand.toLocaleString()); // toLocalString number ka between comma lagata hy!
console.log(typeof(tenThousand.toLocaleString())); // type is string
*/

//****************************Math************************************

// console.log(Math);
// console.log(Math.abs(-5));
// console.log(Math.round(3.54));
// console.log(Math.ceil(5.23));  // ceil method point ka baat less than 5 ho tab b value ma increase karaga
// console.log(Math.floor(7.2));  // floor mathod point ka baat grater than 5 ho tabi value ma increase karaga
// console.log(Math.min(3,5,6,7,9));
// console.log(Math.max(4,3,6,87,8));

let gestNumber= Math.floor(Math.random() * 10);
console.log(gestNumber);

function getRandomNum(min, max){
    let x= Math.floor(Math.random() * (max-min+1))+min;
    return x;
}

console.log(getRandomNum(20,50));