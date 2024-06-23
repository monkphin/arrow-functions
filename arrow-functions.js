/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function

// Arrow Function With Parameters

// Single Line Arrow Function With Parameters

// Implicit Returns

// Returning Multiple Lines


function addTwo (a, b) {
    return a + b; 
}

let sum = addTwo (3, 5);

console.log(sum);


//The same code in ES6 

const addTwo2 = (a, b) => {
    return a + b ;
}
let sum2 = addTwo2 (3, 5);
console.log(sum2);


// Shortened ES6 - since we're just adding two variables we can do away with the return in the function

const addTwo3 = (a, b) => a + b;
// const addTwo3 = (a, b) => (a + b); Also valid 
let sum3 = addTwo3 (3, 5);
console.log(sum3);

// implicit returns - you can, when using only a single input to the function do away with brackets entirely. 
const saySomething = message => console.group(message);
saySomething('Hello There!');


 // this takes no parameters so needs an empty set of parenthesis to confirm it is a function
const sayHello = () => console.log('hello');
sayHello();


//multiline functions must use brackets for their function as per the implicit return seen earlier  
const returnMultipleLines = () => (
    `<p>
    This is a multiline string!
    </p>`
)
console.log(returnMultipleLines());




const averagePoints = (arr, subject) => {
    let total = 0;
    let numStudents = 0;
    for (let student of arr){
      if (subject in student.results){
          total += student.results[subject];
          numStudents++;
      }
    }
    let returnValue = total/numStudents;
    return returnValue;
}
let averageMarks = averagePoints(students, 'english');
console.log(averageMarks)