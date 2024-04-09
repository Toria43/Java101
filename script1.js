const firstName = 'Victory';
const job = 'student';
const birthYear = 2000;
const year = 2024;

const victory = "I'm " + firstName + ', a' + (year - birthYear) + 'years old' + job + '!';
console.log(victory);

const victoryNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(victoryNew)


const age = 18;

/* if (age >= 20)
{console.log ('Hannah can have a driving license 🚘')}
else {const yearsLeft = 20 - age;
console.log(`Hannah is too young. Wait another ${yearsLeft} years :)`
);
}*/

const inputYear = '1999'
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean({}));


const money = 100;
if (money) {
    console.log("Don't spend it all 😃");
}
else {
    console.log('You should get a job!');
}

if (age === 18) console.log('You just became an adult :D (strict)');
const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite ===23) { // 22 === 23 => FALSE
    console.log('Cool! 23 is an amazing number!') 
}  else if (favourite === 7) {
        console.log('7 is also a cool number!')
}   else if (favourite === 9) {
    console.log('9 is also a cool number!')
}   else {
    console.log('Number is not 23 or 7 or 9')
}

if (favourite !== 23) console.log('Why not 23?')

/*boolean logic*/
const hasDriversLicense = true; // A
const hasGoodVision = true; //B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);