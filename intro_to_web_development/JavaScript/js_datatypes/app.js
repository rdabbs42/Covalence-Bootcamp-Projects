// Test whether JavaScript is working with html file
console.log('Test');

//Define variables
var firstName = 'Rosemary';
let lastName = 'Dabbs';

firstName = 'Elliott'
lastName = 'Smith'

const fullName = 'Rosemary Dabbs';

// fullName = 'Elliott Smith' 
// assignment gives error; cannot change the value of a constant

console.log(firstName);
console.log(lastName);
console.log(fullName);

// Primitive Data Types
var name = 'Rose'; // string
var age = 24; // integer
var isFemale = true; // boolean
var isMale = false; // boolean
var surname = null; // null, has no value; different from undefined, which will give an error

// Character: a single character
// Floating-point number: a number with a decimal point

//Complex Data Types
// Object
var person = {
    name: firstName,
    age: age,
    dob: '01/01/1980'
};

// Call these in the debugger to get values of object
person.name;
person.age;
person.dob;

console.log(person);

//Array
let myArr = [1, 2, 3];

// Function Declaration
function multiple(arg1, arg2) {
    return arg1 * arg2;
}

let result = multiple(2,4);

console.log(result);

var x = 1;

if (x === 1) {
    var x = 2;

    // expected output: 2
    console.log(x);
}

// expected output: 2
console.log(x);

let y = 1

if (y === 1) {
    let y = 2;

    // expected output: 2
    console.log(y);
}

// expected output: 1
console.log(y);

const number = 42;

try {
    number = 99;
} catch(err) {
    // expected output: TypeError: invalid assignment to const 'number'
    // Note - error messages will vary depending on browser
    console.log(err);
}

//expected output: 42
console.log(number);