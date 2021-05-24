//console.log('Testing');

//3-parts database in nested array
const database = {
    label: ['Macallan', 'Balvenie', 'Glenfiddich'],
    age: ['12', '15', '18'],
    case: ['Sherry Oak Case', 'Double Cases', 'Triple Cases']
};

//Random index generator
const randIndex = Math.floor(Math.random() * 3);

//Empty array to collect the 3-parts message
let whiskyChoice = [];

//Loop through different component of the message and generate random data from each part
for (let comp in database) {
    switch(comp) {
        case 'label':
            whiskyChoice.push(`Your drink for tonight is a ${database[comp][randIndex]} `);
            break;
        case 'age':
            whiskyChoice.push(`${database[comp][randIndex]} Years Old `);
            break;
        case 'case':
            whiskyChoice.push(`${database[comp][randIndex]}. Enjoy!`);
            break;
        default:
            whiskyChoice.push('No whisky for you tonight!');
    }
};

//Stich different parts together and log on screen
console.log(whiskyChoice.join(''));

//Use node script.js to test