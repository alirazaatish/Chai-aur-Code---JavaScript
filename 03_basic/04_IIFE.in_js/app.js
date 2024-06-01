//Immediately Invoke Function Experssions

(function chai(){
    console.log("Function will be execute.");
})(); // semicolon laga zarori hy agr dobara invoke function bana hy to otherwise upar wala invoke function terminate nii or error data hy

( ()=> {
    console.log("Arrow Function will also be executed.");
})();

( (name)=> {
    console.log(`${name}, Arrow Function will also be executed.`);
})("Aimen")