// +++++++++++ FOR OF LOOP +++++++++++++++++
// iterations are done without initialisation by range
// it is used for ARRAYS, STRINGS, MAPOBJECTS

// THE DEFINITION OR DECLARATION OF FOROF LOOP IS BELOW MENTIONED

// for (const element of object) { 

//}
//-------ELEMENT is nothing but which stores object values
// OBJECT means which we are wanting to iterate
// OBJECT may be STRING, ARRAY, OBJECT IN javascript
    
const nameStudents = ["sai","ravi","buddum","ramana"]

for (const element of nameStudents) {
    console.log(`The students are ${element}`);
                                            
}


// +++++++++++ MAP IN JAVASCRIPT +++++++++++

// Map is an object in javascript
// But MAP can be iteratable through FOROF loop whereas OBJECT cannot
// Map declaration
// it stores values in key value pair 
// unique names
// if same key and same values are entered it removes the duplicates

const country = new Map();
country.set("In","India");
country.set("USA","United States of America")
country.set("In","India")
console.log(country);

for (const element of country) {
    // console.log(element); // It will print PAIR of KEY and VALUE in an ARRAY
}
// useful method to access key and values

for (const [key, value] of country) {

    // console.log(`${key} : ${value}`); // In this it will assign KEYS to key and VALUES to value
    
}

// ++++++++++++ FORIN LOOP ++++++++++++++++++

// It is used to iterate objects,
//Objects only OBJECTS, ARRAY, STRINGS
// Cannot iterate through Map Object

// const studentDetails = {
//     name : "Venkata sai ram reddy",
//     surname : "Bhumireddy",
//     location : "India"
// }

//for (const key in studentDetails) { // it will return only keys of the object 
    //console.log(key); 
    
//}
// if want to return keys with values as follow is used
const studentDetails = {
         name : "Venkata sai ram reddy",
         surname : "Bhumireddy",
         location : "India"
    }
for (const key in studentDetails) {

    console.log(`The ${key} is ${studentDetails[key]}`);
    
}

// Iterating ARRAYS through FORIN loop

let pubgPlayers = [ "Gian", "victor", "Manny", "Buddum"];

for (const key in pubgPlayers) {

    console.log(key); // it will return the index number
    
}
// To print values of each index
// this following method is used

for (const key in pubgPlayers) {
    console.log(`The players are ${pubgPlayers[key]}`);
    
}

// Can we perform FORIN loop in STRINGS

let nameOf = "Bhumireddy"

for (const key in nameOf) {

    console.log(nameOf[key]); // Yes we can perform iteraation through STRING using FORIN
    
    
}
