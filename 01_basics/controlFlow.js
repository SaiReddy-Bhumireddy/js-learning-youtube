// +++++++++++++ Control flow in JS ++++++++
// IF and else Statement

// Simple If and else statement

const nameOfUser = "";
if(nameOfUser){
    console.log(`The user name is ${nameOfUser}`);
    
}
else{
    // console.log("No user found");
}

// falsy things in JAvascript
// false, null, undefined, 0, "", -0

// ++++++ && and || operators ++++
// && operator
// && operator condition works if any one condition is false it return false
// for true the all conditions should be true
// Then only it returns true

let num1 = 121;
 let num2 = 343;
 let num3 = 345;
 if(num1 > num2 && num1 > num3){
    console.log(`The largest number is ${num1}`);
    
 }
 else if(num2 > num1 && num2 > num3){
    console.log(`The largest number is ${num2}`);
 }
 else if(num3 > num1 && num3 > num1){
    console.log(`The largest number is ${num3}`);
 }

 // || operator

 // || this operator works in given statement one condition is true then it returns TRUE

 let a = 21;
 let b = "21";
 let c = 'sai';

 if(a==b || a===b || a==c){
    console.log("a==b is true but a===b not true and a==c also not true but executes");
    console.log("Because one statement is true then it wont checks remaining consitions");

 }

 // ++++++ == and ===
// == only checks the value but it wont checks data types
// for example in == case 2 and "2" both are same 
// because "==" only checks values not for data type

// "===" this checks the data types of the values
// In "==" case 2=="2" is true but
// in "===" case 2==="2" is false beause it data types are diff

// SWitch condition

// it checks value with multiple cases

let monthArray = ["Jan","Feb", "March", "April", "May", "June", "July", "August", "SEp", "Oct", "Nov", "Dec"]
let leaveMonth = 7;
for(let i=1;i<=13;i++){
    if(i === leaveMonth){
        console.log(`The month you selected for leave is ${monthArray[i-1]}`);
        
    }
}