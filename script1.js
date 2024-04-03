const firstName = 'Victory';
const job = 'student';
const birthYear = 2000;
const year = 2024;

const victory = "I'm " + firstName + ', a' + (year - birthYear) + 'years old' + job + '!';
console.log(victory);

const victoryNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(victoryNew)


const age = 18;

if (age >= 20)
{console.log ('Hannah can have a driving license 🚘')}
else {const yearsLeft = 20 - age;
console.log(`Hannah is too young. Wait another ${yearsLeft} years :)`
);
}