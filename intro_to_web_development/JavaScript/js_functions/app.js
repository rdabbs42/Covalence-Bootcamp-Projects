// Basic function syntax
console.log(add(5,3));
var sum = add(200, 456);
console.log(sum);

// Nesting functions
var val = subtract(add(3,10), subtract(17,10));
console.log(val);

// Function can be ANYWHERE in your file as long as it is in your SCOPE, called hoisting
function add(num1, num2) {
    console.log('In function!');
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}
