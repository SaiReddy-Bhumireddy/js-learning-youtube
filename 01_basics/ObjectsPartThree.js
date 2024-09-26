//++++++++++ Objects Destructure in js ++++++++++++++
// Desctructuring is nothing but givng a alternate and simple to complex named keys of Object

const course = {
    courseName:"Java Script",
    sourceOfStudy:"Youtube",
    channel: " chai aur code"
}
// in the above object the key of SOURCEOFSTUDY is big

const {sourceOfStudy: source} = course; // In this we assigned a name to key a source object key
// By that name we can access the value of that key
const {channel: name} = course;
const { courseName: tech} = course
console.log(source);
console.log(tech);
console.log(name);

