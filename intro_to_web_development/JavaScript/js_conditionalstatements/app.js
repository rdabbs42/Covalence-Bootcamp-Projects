var val = 10;

if(val == 51) {
    console.log('True');
} else if(val > 50 && val < 100) {
    console.log('between 50 and 100')
} else {
    console.log('False');
}

if(val == 55 || val < 56) {
    console.log('True');
}

console.log('Ended Program');

switch (val) {
    case 10:
    case 20:
    case 54:
        console.log('54, 20, 10');
        break;
    default:
        console.log('default');
        break;
}

// Ternary Operator
var birthday = "11 13";
var birthday2 = "4 4"
var userName = "Rosemary";
var date = new Date();
let todaysDate = (date.getMonth() + 1) + " " + date.getDate();

let greeting = (birthday === todaysDate) ? 'Happy Birthday ' + userName : 'Good morning ' + userName;
console.log(greeting);

let greeting2 = (birthday2 === todaysDate) ? 'Happy Birthday ' + userName : 'Good morning ' + userName;
console.log(greeting2);