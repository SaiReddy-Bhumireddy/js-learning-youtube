// +++++++++++ Functions +++++++
// Function declaratioon

function getFunc(){
    console.log("My name is sai ram reddy");
    
}

getFunc // This is called REFERENCE of a function. if we do that it returns reference.

getFunc()// It will execute the fucntion

// We dont want to use console.log we will use return statement

function returnFunc(){
    let a = 12;
    let b = 12;
    return a+b;
    console.log("This wont print");// because in fucntions once the return statement is reached next line wont  executes

    
}

returnFunc() // this wont print anything in terminal
//Because we never used console.log
console.log(returnFunc());

//++++++++++++ IF ELSE in FUnctions ++++++++++++++++

function ifFUnc(username){ // The variables or names which are passed inside func are parameters

    if(!username){
        return "You have not passed username"
    }
    return `Thanks ${username}`

}
console.log(ifFUnc("saireddy"));// The values which are passed while calling functions are arguments.
