// SCOPE
// It is a block of code {}
// Global and local scope
// VAR keyword is not used many of coders becoz it wont work as well

let a = 10;
const b =20;
var c =30;
// Which are declared outside the function,if,for are called Global Scope
if(true){
    let a =100;
    const b =200; // The block inside of functions,if,for are called Local scope
    var c =300;
}
console.log(a);
console.log(b);
console.log(c);// It should print the value "30" but it prints "300" 
//c="300" is declared inside the IF statement it cannot be acessied outside the statement
//but we used VAR keyword for variable name "c"
//So for that it will assign the value of c as 300,irrespective of block statement
// It will assign the value of lastly declared VAR value variable

// +++++++++++++++ Interesting ++++++++++++++

// +++++++++++++++++++++ FUNCTIONS NORMAL DECLARATION ++++++++++++++++++++++++++++++++++

console.log(username("bhumireddy"))
// we can also executes function before also 
// Only when the function is declared in normal way

function username(name){
    return `my name is ${name}`
}

console.log(username("sai"))// executing function and assigning value after function
// It wont throw any error

// ++++++++++++ DECLARING FUNCTION AND ASSIGN IT TO VARIABLE+++++++++++++

//But we cannot execute function before 
// When function is assigned to a variable we cannot access it before the function
//console.log(variableFunc(3));

const variableFunc = function addNum(num1){
    return num1 + 1
}
console.log(variableFunc(5))
// It works perfectly 
