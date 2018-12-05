var friends = ['Jill', 'Matt', 'Alaska', 'Melanie', 'Jennifer', 'Penelope', 'Pam'];

// initialize, conditional for how long loop should run, what to do after loop is run
for(var i = 0; i <= 100; i++) {
    console.log(i);
}

for(var i = 0; i < friends.length; i++) {
    console.log(friends[i]);

    if(friends[i] === 'Matt') {
        console.log('I found him!');
        break;
    }
}

var count = 0;
while(count < friends.length) {
    console.log(friends[count]);
    count++;
}

do {
    console.log('Test');
} while (false)

let car = {
    make: 'Acura',
    model: 'TL'
};

for (let i in car) {
    console.log(i);
    console.log(car[i]);
}