//++++++++ OBJECTS ++++++
// Objects can be creted in three types
// singleton
// object literals
//object constructor

let objectCreated = {
    name:"saireddy",
    age:21,
    location:"India",
    state : "Andhra Pradesh"
}

// we can access object elements by two methods,

// one by objVarriableName.key
// EX: obj.name --> it is used only when the key is in nrml without in string with spaces
// if the key name is " first name" then this method is not used

// Another is similar to first one but
//Ex: syntax obj["key"]
// the key should be in string

console.log(objectCreated.name);
console.log(objectCreated["name"]);

// +++++++++ SYmbol ++++++++
// if we want to declare symbol inside objet as a key
// it should be declared inside of []
//ex {[mySymbol]:"Mykey"}
let mySym = Symbol("myValue"); // Firstly we want to declare symbol varible
let symbolObj ={
    [mySym] : "myKey"
}

console.log(symbolObj);

//++++++++++ CHANGING VALUE OF A KEY INSIDE OBJECT+++++++++++++++

let changinValue = {
    name:"bhumireddy",
    email:"saireddy@infosys.com"
}
console.log("Before changing email value "+ changinValue["email"]);

changinValue.email = "saireddy@ibm.com"; // by thing format we can change or reassign element to existing key
console.log("After changing email value "+ changinValue["email"]);
// +++++++++++++ FREEZE METHOD ++++++++++

// This method freezes the value
// so we cant modify object values, but it wont throw any error if we want to assign another value
// it simply gives the previous value without changing

// Object.freeze(changinValue);
// console.log(changinValue);
// changinValue.email = "bhumireddy@wipro.com";
// console.log(("After applying value by freezing method"));
// console.log(changinValue);

changinValue.greeting = function(a,b){
    let c = a+b;
    console.log(`The sum of ${a} and ${b} is ${c}`);
    
}
console.log(changinValue.greeting(3,5));// If we want to access function or method we haveto give its name followed by();




