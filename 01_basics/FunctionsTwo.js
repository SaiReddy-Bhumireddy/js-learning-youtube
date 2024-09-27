// REST and spread method
// When in parameters we declared one parameter but in argument we given multiple values
// then this ""...variable_name" will helps and add that multiple elements into an aray and stores

function inputValues(value){
    return value
}

console.log(inputValues(12,13,14,15));// In this scenario it will return output as a single number which is first
// "...variable_name"
// By this is multiple arguments are passed inside single parameter

function scoreBoard(...runs){ // this rest method stores multiple values in an array
    return runs
}
console.log(scoreBoard(100,23,24,56));

// Another scenario

function anotherFunc(val1,val2,...remainingOutput){
    return remainingOutput
}
console.log(anotherFunc(100,121,12,14,14));

// It will assign the arguments values to parameter other than rest method inside parameter
// to above scenario "val1 stores 100" and "val2 stores 121" and remaining values stores in rest mthod

const user ={
    userName : "Saireddy",
    price : 199
}
function callingObject(checkingObj){
    return `Username is ${checkingObj.userName} and your cart price is ${checkingObj.price}`
}

//console.log(callingObject(user));
console.log(callingObject({
    userName:"Bhumireddy",
    price:499
}))

// Passing array inside functions

const myNewArray = [1,2,3,4,45];

function arrayFunc(arrayParam){
    return arrayParam[2]
}
//console.log(arrayFunc(myNewArray));

console.log(arrayFunc([12,13,14,15,16]));// it will return index value at 2;





