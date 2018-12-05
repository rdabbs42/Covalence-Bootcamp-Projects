// ARRAYS
var emptyArray = [];

//array of strings
var friends = ['Will', 'David', 'Paul'];

//array of integers
var numbers =[1, 2, 3];

console.log(friends);
console.log(friends[1]);
console.log(numbers)
console.log(numbers[1] * numbers[2]);

// Pull value from array into variable
var newVar = numbers[2]

console.log(newVar);

// Add value to end of array
friends.push('Jackson');

console.log(friends);

// Removes last item in the list and returns value
var friend = friends.pop();

console.log(friends);
console.log(friend);

var myObject = {
    name: 'Will',
    age: 25,
    address: {
        address1: '123 Main St',
        city: 'New York',
        state: 'NY'
    }
};

console.log(myObject);
console.log(myObject.name);
console.log(myObject.address);
console.log(myObject.address.state);

// Add logic in between the square brackets
let list = [2, 4, 6, 7, 10];
let index = 2;
let a = 5;
let b = -3;

// Logs 6 to the console
console.log(list[2]);

// Logs 6 to the console
console.log(list[1 + 1]);

// Logs 6 to the console
console.log(list[index]);

// Logs 6 to the console
console.log(list[a + b]);


// Using properties
let greeting = 'Hello World';
let property = 'length';

// Logs 11 to the console
console.log(greeting.length);

// Logs 11 to the console
console.log(greeting['length']);

// Logs 11 to the console
console.log(greeting[property]);

// OBJECTS
let post = {
    title: 'Welcome to My Blog',
    category: 'Announcements',
    body: 'Hello and welcome to my blog. I will be posting about my adventures as a developer.',
    tags: ['JS', 'CSS', 'HTML']
};

console.log(post.title);
console.log(post.tags[1]);

let myObj = null;

let person = {
    firstName: 'John',
    lastName: 'Doe'
};

console.log(Object.keys(person));
console.log(Object.assign(person, {
    firstName: 'Jane',
    email: 'jane.doe@gmail.com'
}));

person.firstName = 'Rose';
console.log(person);

//Object Mutability
let d = {
    value: 10
};

let e = d;
let f = {
    value: 10
};

console.log(d == e);
// -> true
console.log(d === e);
// -> true
console.log(d == f);
// -> false
console.log(d === f);
// -> false

d.value = 15;

console.log(d.value);
// -> 15
console.log(e.value);
// -> 15
console.log(f.value);
// -> 10

d = {
    value: 10
};

console.log(d.value);
// -> 10
console.log(e.value);
// -> 15
console.log(f.value);
// -> 10

console.log(d == e);
// -> false
console.log(d === e);
// -> false