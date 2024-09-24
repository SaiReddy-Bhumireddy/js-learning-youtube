const userID = "sai012332"; // we can't assign another value to this variable CONST

let personEmail = "saireddy@google.com";

var userPassword = "121234";

userLocation = "kadapa"

//userID = "reddy12133";
/*
Prefer do not use VAR 
Because of functional and block scope;
Always use --> CONST, LET

*/
personEmail = "reddy@google.com";

console.log(userID);
console.log(personEmail);
console.log(userPassword);
console.log(userLocation);
console.log("Printing all elements in one statement");
console.table([userID, personEmail, userPassword, userLocation]);