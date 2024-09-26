// Declaration of NUMBER data type

const scoreValue = 200;
// console.log(scoreValue);

// Declaration of string by using NEW keyword.

const numberDeclare = new Number(300);
// console.log(numberDeclare);

// Number DataType Methods

const otherNumber = 232;
// console.log(otherNumber.toFixed(2));// toFixed method gives the value with numver of decimal points mentiones
// console.log(otherNumber.toPrecision(2));// it round of the value to desired number mentioned in method 

// console.log(Number.MAX_VALUE);// returns the MAXIMUM value can be assign to a varible
// console.log(Number.MAX_SAFE_INTEGER);

// ++++++++++++++++ MATH ++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-5)); // returns only negative value to positive value as it is a absolute value

console.log(Math.round(4.2));//Givves the  round off number to remove decimal point

console.log(Math.random());//always gives a random number between 0-1

const randomNumber = Math.random();
console.log(randomNumber);

console.log(randomNumber.toFixed(3)*1000);
const min = 1;
const max = 6;
console.log(Math.floor(Math.random()*(max-min))+min);


0.32187684
let numberFind = 100900990;
console.log(numberFind.toLocaleString('en-IN'));





