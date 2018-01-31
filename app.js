'use strict';

alert('Let\'s get started!');
const name = prompt('What\'s your name?');
console.log('their name is ' + name);
// const name = 'Mario';

alert('Hello ' + name);
const tvShow = prompt('Is Top Gear my favorite TV show?');
console.log('Do I like Top Gear ' + tvShow);
//const tvShow = 'yes';

if (tvShow.toLowerCase() === 'yes' || tvShow.toLowerCase() === 'y') {
    alert('Correct!');
}
else if (tvShow.toLowerCase() === 'no' || tvShow.toLowerCase() === 'n') {
    alert('You should know me better by now.');
}
else {
    alert('Try again.');
}

const hobby = prompt('Do I do weightlifting?');
console.log('Do I enjoy weightlifting ' + hobby);
//const hobby = 'yes';

if (hobby.toLowerCase() === 'yes' || hobby.toLowerCase() === 'y') {
    alert('It\'s a challenging and rewarding sport.');
}
else if (hobby.toLowerCase() === 'no' || hobby.toLowerCase() === 'n'){
    alert('You got it wrong.');
}
else {
    alert('Try again.');
}

const snack = prompt('Do you like Mac & Cheese?');
console.log('Do I like Mac and Cheese ' + snack);
//const snack = 'no';

if (snack.toLowerCase() === 'yes' || snack.toLowerCase() === 'y') {
    alert(' I have never seen their  appeal.');
}
else if (snack.toLowerCase() === 'no' || snack.toLowerCase() === 'n') {
    alert('Correct I prefer pizza or fries!');
}
else {
    alert('Try again.');
}

const vGames = prompt('Do you still play video games?');
console.log('Do I play video games ' + vGames);
//const vGames = 'yes';

if (vGames.toLowerCase() === 'yes' || vGames.toLowerCase() === 'y') {
    alert('Yep but I only play Civilization 5 now.');
}
else if (vGames.toLowerCase() === 'no' || vGames.toLowerCase() === 'n') {
    alert('Well it\'s not entirely like that.');
}
else {
    alert('Try again.');
}

const age = prompt('Are you older than 25?');
console.log('Am I older than 25 ' + age);
//const age = 'yes';

if (age.toLowerCase() === 'yes' || age.toLowerCase() === 'y') {
    alert('Getting older has done me well.');
}
else if (age.toLowerCase() === 'no' || age.toLowerCase() === 'n')  {
    alert('I wish was that young!');
}
else {
    alert('Try again.');
}