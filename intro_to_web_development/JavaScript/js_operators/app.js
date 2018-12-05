// ARITHMETIC OPERATORS
var a = 5 + 7; // addition
var b = 5 * 7; // multiplication
var c = 5 / 7; // division
var d = 50 % 20; // modulus - returns remainder

console.log(a);
console.log(b);
console.log(c);
console.log(d);

// STRING OPERATORS
var e = 'Rosemary' + 'Dabbs'; // concatenated strings together, no space
var f = 'Rosemary' + ' ' + 'Dabbs' // adds space
var g = 'Rosemary' + 5 // converts number to string and concatenates
var h = '10' + 5 // converts number to string and concatenates
var i = '10' * 5 // converts string to number and multiplies
var j = '10a' * 5 // returns NaN (not a number)

console.log(e);
console.log(f);
console.log(g);
console.log(h);
console.log(i);
console.log(j);

// OPERATIONS WITH VARIABLES
var val1 = 5;
var val2 = 30;
var val3 = 5;
var sum = val1 + val2;
var mult = val1 * val2;
var equal1 = val1 == val2;
var equal2 = val1 == val3;

console.log(sum);
console.log(mult);
console.log(equal1);
console.log(equal2);

val1 += val2; // same as val1 = val1 + val2;
val1 -= val2; // same as val1 = val1 - val2;
val1 *= val2; // same as val1 = val1 * val2;

val3++; // adds one

console.log(val1);
console.log(val3);
