// ++++++++++ FOR Loops +++++++++++++
// LOOP also called as ITERATIONS

// Printing tables from 1 to 5

for(let i = 1;i<=5;i++){
    for(let j=1;j<=10;j++){
        //console.log(i+" * "+j+" = "+i*j);   
    }
    //console.log(" ");
}

// FOR LOOP WITH ARRAYS

let myArray = ["sai", "ram", "Reddy"]
for(let i=0;i<myArray.length;i++){

    console.log(myArray[i]);
    
}

// Break and continue in for loops

//BREAK 
// when the condition met it wont execute next iteration it breaks out of the loop

let checkNumber = 5;
for(let i=1;i<=10;i++){
    if(i == checkNumber){

        console.log(`You completed your ${checkNumber} working hours`);
        console.log("Please login tomorow to resume");
        break
    }
    console.log(`Your remaining working hours are ${checkNumber-i}`);
    
}

//CONTINUE KEYWORD

let errorSkipValue = 7;

for(let i=0;i<=10;i++){
    if(i == errorSkipValue){
        console.log("This error line is skipped");
        continue
    }
    console.log(`The executed lines are ${i}`);
    
}
