// ++++++++++++ ARROW FUNCTION +++++++++++
// ++++++++++++ THIS KEYWORD  ++++++++++++

// THIS keyword refers the current context of the object

//Context means it refers the entire object details

const user = {
    username : "sai reddy",
    age : 21,
    welcomeMessage : function(){
        console.log(`Hi everyone my name is ${this.username} and my age is ${this.age}`);
        console.log(this);// It returns the entire object context 
        
    }
}
user.welcomeMessage();
user.username = "Bhumireddy";
user.welcomeMessage();
console.log(this) //  statement returns empty object becoz there is no object no node environment

//+++++++++ THIS keyword inside function and its behaviour +++++++

function myThis(){
    let username = " bhumireddy"
    console.log(this);// It will return entire about function not context.
    
}
// myThis();

// +++++++++++ ARROW FUNCTION ++++++++++++++

// function without name and assigne to a variable


const myArrow = () => { // It is the declaration of an arrow function
    return 1+2
}
console.log(myArrow());

// IMPLICIT RETURN IN ARROW FUNCTIOn

 const response = (num1, num2) => ( num1 + num2)// this is called implicit there is no need to write return keyword
console.log(response(2,4));

const expReturn = (a,b) => {
    return a**b //This is explicit return we need to wrrite return statement
}
console.log(expReturn(1,2));
