// ++++++++  Declaring objects using singleton and constructor;

const tinderUser = new Object();
//this is singleton object creation
// const tinderUserOne = {};
//This is nonsingleton object creation
tinderUser.id = "12ef45";
tinderUser.name = "sami";
tinderUser.isLoggedIn = false;
console.log(tinderUser);
// ++++++++++++++++++ Nested Objects ++++++++++++++++++
const originalUser ={
    email:"bhumireddy@reddy.com",
    role:"developer",
    userFullName:{
        firstName:"Saireddy",
        lastName:"Bhumireddy",
        location:{
            country:"india",
            state:"AndhraPradesh",
            city:"Kadapa"

        }
    }
}
console.log(originalUser.userFullName.location);

//+++++++++++ ASSIGN Method in objects in js +++++++++++++
// if we want to add two or more objects we will use assign method

const obj1 = {
    name:"sai",
    age:23,
    gender:"male"
}
const obj2 = {
    name1:"reddy",
    age1:23,
    gender1:"male"
}

// let obj4 ={obj1,obj2}// this method gives a nested object inside of obj1
// console.log(obj4);
const obj3 = Object.assign({},obj1,obj2);
console.log(obj3);

// Alternate and best way to combine two or more objects is SPREAD METHOD

const obj5 ={...obj1,...obj2};
console.log(obj5);


