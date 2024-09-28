const codingCourses = ["js", "python", "java", "c", "Angular"];

// While writing foreach loop we have to write callback function
//Call back function doesnot require name to function just declare function
// syntax "ARRAY_VARIABLE_NAME.forEach(FUNCTION(parameter){})" -->PARAMETER stores the arrayValues

codingCourses.forEach(function(item){
    console.log(item);
    
})

// ANOTHER WAY TO ACCESS ELEMENTS OF ARRAY USING FOREACH LOOP
// PREVIOUSLY WE WROTE FUNCTION INSIDE FOREACH
// BUT NOW WE WRITE FUNCTION SEPARATELY AND WE WILL GIVE THE FUCTION NAME INSIDE FOREACH

function forEachfunc(item){

    console.log(item);
    
}

codingCourses.forEach(forEachfunc)

// ++++++++++++ ARROW FUNCTION INSDIDE FOREACH TO ACCESS ELEMENTS +++++++++++++
// BY USING arrow functions we can not only print elements 
// we can also print the index and full array by passing parameter

// SYNTAX ---> arrayvariable.forEach( (item, index, arr)=>{              
    //  ITEM parameter prints the elements,
    // INDEX parameter prints the index number
    // ARR parameter prints the total array

//                    })
console.log("forEach printing using Arrow function");

codingCourses.forEach( (item, index, arr) =>{  //codingCourses is declared at line number 1

    console.log(item, index, arr);
    
})


// ++++++++++ DECLARING OBJECTS INSIDE OF AN ARRAY ++++++++++++

const myCoding = [
    {
        languageName : "java",
        languageFileName : "java"
    },
    {
        languageName : "Python",
        languageFileName: "py"
    },
    {
        languageName : "Javascript",
        languageFileName : "js"
    }
]
// we can get elements using forEach with arrowfunction

myCoding.forEach( (item) => {
    console.log(item.languageName+" : "+item.languageFileName);
    
}
)
