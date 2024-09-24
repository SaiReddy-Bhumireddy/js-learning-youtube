// String interpolation

const employeeName = "sai Reddy";
const employeeAge = 23;

console.log(`My name is ${employeeName} and my age is ${employeeAge}`);

// Alternate way to create a string with NEW keyword

const stringDeclaration = new String('This is alternate way to declare string');
// It stores string in OBJECT way with Key value pait=r KEY means index of each letter
console.log(stringDeclaration);
console.log("Showing the NEw string() strores values in OBJECT type key value pair");
console.log(stringDeclaration[2]);//line number 10
console.log(stringDeclaration.__proto__);

console.log(stringDeclaration.length)// this method gives the Num of characters in the string varible

console.log(stringDeclaration.toUpperCase());//This converts string to uppercase

console.log(stringDeclaration.charAt(12));

// This gives at particular indx we ae passing paramter it returns character at that position

//javascript method SUBSTRING

const substringOf  = stringDeclaration.substring(-10,5);
console.log(substringOf);
// to access characters in reverse order from string we will use SLICING

const stringSlicing = stringDeclaration.slice(-39,6);
console.log(stringSlicing);

// Want to remove white spaces from the string we will use TRIM method

const spacedString = "    Sai Reddy   ";
console.log(spacedString);
console.log(spacedString.trim());
console.log(spacedString.bold());












