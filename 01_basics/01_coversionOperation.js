let studentName = "33";
let studentAge = 21;
let valueUndefined = undefined;
let valueNull = null;
let valueBoolean = true;
let valueBooleanFalse = false;
console.table([typeof studentName, typeof studentAge, typeof valueUndefined, typeof valueNull, typeof valueBoolean, typeof valueBooleanFalse])
console.table([studentName, studentAge, valueUndefined, valueNull, valueBoolean, valueBooleanFalse])

console.log("Checking converting data type to number to check possible outcomes below");

let numberTostudentName = Number(studentName);

let numberTostudentAge = Number(studentAge);

let numberTovalueUndefined = Number(valueUndefined);

let numberTovalueNull = Number(valueNull);

let numberTovalueBoolean = Number(valueBoolean);
let numberTovalueBooleanFalse = Number(valueBooleanFalse);
console.table([typeof numberTostudentName, typeof numberTostudentAge, typeof numberTovalueUndefined, typeof numberTovalueNull, typeof numberTovalueBoolean, typeof numberTovalueBooleanFalse])
console.table([numberTostudentName, numberTostudentAge, numberTovalueUndefined, numberTovalueNull, numberTovalueBoolean, numberTovalueBooleanFalse])
console.log(" ")
console.log("Lets Try to change pure string to number to see outcome")
console.log(" The type of and value of pure STRING are ");
let stringName = "sai";
console.log(typeof stringName);
console.log(stringName);

console.log("After converting string to number its type and value is ");


let numberToStringName = Number(stringName);// it changes the type from string to number 
console.log(typeof numberToStringName);// it changes the type from string to number
console.log(numberToStringName);// The value wont convert if its nameed string value will be "NaN"











