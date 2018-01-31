'use strict';

alert('Let\'s get started!');
const name = prompt('What\'s your name?');
console.log('their name is ' + name);
// const name = 'Mario';

alert('Hello ' + name);
const tvShow = prompt('Is Top Gear my favorite TV show?').toLowerCase();
console.log('Do I like Top Gear ' + tvShow);
//const tvShow = 'yes';

if (tvShow === 'yes' || tvShow === 'y') {
    alert('Correct!');
}
else if (tvShow === 'no' || tvShow === 'n') {
    alert('You should know me better by now.');
}
else {
    alert('Try again.');
}

const hobby = prompt('Do I do weightlifting?').toLowerCase();
console.log('Do I enjoy weightlifting ' + hobby);
//const hobby = 'yes';

if (hobby === 'yes' || hobby === 'y') {
    alert('It\'s a challenging and rewarding sport.');
}
else if (hobby === 'no' || hobby === 'n'){
    alert('You got it wrong.');
}
else {
    alert('Try again.');
}

const snack = prompt('Do you like Mac & Cheese?').toLowerCase();
console.log('Do I like Mac and Cheese ' + snack);
//const snack = 'no';

if (snack === 'yes' || snack === 'y') {
    alert(' I have never seen it\'s  appeal.');
}
else if (snack === 'no' || snack === 'n') {
    alert('Correct I prefer pizza or fries!');
}
else {
    alert('Try again.');
}

const vGames = prompt('Do you still play video games?').toLowerCase();
console.log('Do I play video games ' + vGames);
//const vGames = 'yes';

if (vGames === 'yes' || vGames === 'y') {
    alert('Yep but I only play Civilization 5 now.');
}
else if (vGames === 'no' || vGames === 'n') {
    alert('Well it\'s not entirely like that.');
}
else {
    alert('Try again.');
}

const age = prompt('Are you older than 25?').toLowerCase();
console.log('Am I older than 25 ' + age);
//const age = 'yes';

if (age === 'yes' || age === 'y') {
    alert('Getting older has done me well.');
}
else if (age === 'no' || age === 'n')  {
    alert('I wish was that young!');
}
else {
    alert('Try again.');
}