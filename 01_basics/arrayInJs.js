// ++++++++++++   Arrays  ++++++++++

// Arrays are reference data types whichc store multiple values 
// Declaration

const arrayModel = [0,1,3,3,4,3,5,3,4,5,3]
console.log(arrayModel);
// +++++++++++++ Array Methods +++++++++

// +++++ Push method ++++++
// it pushes an element into the  existing array at the end

const newArray = [12,12,2,335,5,56,65,3]
console.log("Array before push method "+newArray);
newArray.push(13)
console.log("Array after push method "+newArray);

// ++++++ POP method +++++++
// It is opposite to push method.
// it removes element at last index.

let takeNewArray = [1,2,3,4,5,5,6]
console.log("Array before pop method "+takeNewArray);
takeNewArray.pop();
console.log("Array after pop method "+takeNewArray);

// UNSHIFT AND SHIFT METHOD IN JAVASVRIPT ARRAYS

//unshift method addds element at the starting index
//Whereas SHIFT method removes element which is at first index
// Unshifting method
let shiftingArray = [1,3,4,4,5,6,7,8,8]
console.log("Array before unshifting method "+shiftingArray);

shiftingArray.unshift(12);
console.log("Arrays after unshifting method "+shiftingArray);
// Shifting method

console.log("Array before performing shift method "+shiftingArray);
shiftingArray.shift();
console.log("Arrays after performing shift method "+shiftingArray);

// INCLUDESOF AND INDEXOF METHODS 

// +++++++ INCLUDES METHOD +++++++
// it checks the given element is present in the array or not
// If the element presents it returns TRUE orelse it returns false

let arrayVariable =[1,2,3,4,5,5]
console.log(arrayVariable.includes(7));

// +++++++ INDEX OF method ++++++++
// It checks and returns the index number of the given element
// If the element isnot in array it returns -1 as output

let arrayVariableIndex =[1,2,3,4,5,5.2,3,4,5]

console.log("The index position of the element is "+arrayVariableIndex.indexOf(2));
console.log("The index position of the element is "+arrayVariableIndex.indexOf(12));

// SORT() method gives the elements in the aray in ascending order

let sortArray = [111,112,104,185,103];
console.log("Array before sorting is done "+sortArray);
sortArray.sort();
console.log("Array after sorting is done "+sortArray);

// ++++++++ FLAT METHOD +++++++++
// If the array is multidimensitonal and we want to get the output in single array
// FLAT METHOD DOES IT

let flatArray = [1,2,3,[4,5,5],[1,2,4,[4,5,6,7]]];
console.log("Array before performng flat method "+ flatArray);

flatArray.flat()
console.log("Array method after performing flat method "+flatArray);





