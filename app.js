'use strict';

alert('Let\'s get started!');
const name = prompt('What\'s your name?');
console.log('their name is ' + name);
// const name = 'Mario';

alert('Hello ' + name);
const tvShow = confirm('Is Top Gear your favorite TV show?');
console.log('likes Top Gear ' + tvShow);
//const tvShow = 'true';

if (tvShow === true) {
    alert('It\'s a great show no doubt.');
}
else {
    alert('That\'s too bad ' + name + ' try watching it again.');
}

const hobby = confirm('Do you consider weightlifting amazing?');
console.log('enjoys weightlifting ' + hobby);
//const hobby = 'true';

if (hobby === true) {
    alert('It\'s a challenging and rewarding sport.');
}
else {
    alert('It takes a lot of discipline to get started.');
}

const snack = confirm('Do you like Mac & Cheese?');
console.log('likes Mac and Cheese ' + snack);
//const snack = 'false';

if (snack === true) {
    alert('I never saw it\'s appeal.');
}
else {
    alert('It is pretty dull food.');
}

const vGames = confirm('Do you still play video games?');
console.log('likes video games ' + vGames);
//const vGames = 'false';

if (vGames === true) {
    alert('I just outgrew them.');
}
else {
    alert('I prefer driving or repairing stuff.');
}

const age = confirm('Are you older than 25?');
console.log('older than 25 ' + age);
//const age = 'true';

if (age === true) {
    alert('yeah I just keep getting older.');
}
else {
    alert('I\'m no longer a young grasshopper.');
}