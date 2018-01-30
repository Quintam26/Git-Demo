'use strict';

alert('Let\'s get started!');
const name = prompt('What\'s your name?');
console.log('their name is ' + name);
// const name = 'Mario';

alert('Hello ' + name);
const tvShow = prompt('Is Top Gear your favorite TV show?');
console.log('likes Top Gear ' + tvShow);
//const tvShow = 'true';

if (tvShow.toLowerCase() === 'yes' && 'y') {
    alert('It\'s a great show no doubt.');
}
else {
    alert('That\'s too bad ' + name + ' try watching it again.');
}

const hobby = prompt('Do you consider weightlifting amazing?');
console.log('enjoys weightlifting ' + hobby);
//const hobby = 'true';

if (hobby.toLowerCase() === 'yes' && 'y') {
    alert('It\'s a challenging and rewarding sport.');
}
else {
    alert('It takes a lot of discipline to get started.');
}

const snack = prompt('Do you like Mac & Cheese?');
console.log('likes Mac and Cheese ' + snack);
//const snack = 'false';

if (snack.toLowerCase() === 'yes' && 'y') {
    alert('It\'s a great meal at anytime.');
}
else {
    alert('You should try Elephant\'s Mac and Cheese.');
}

const vGames = prompt('Do you still play video games?');
console.log('likes video games ' + vGames);
//const vGames = 'false';

if (vGames.toLowerCase() === 'yes' && 'y') {
    alert('Civilization 5 is fun to play.');
}
else {
    alert('I guess you can outgrow some things.');
}

const age = prompt('Are you older than 25?');
console.log('older than 25 ' + age);
//const age = 'true';

if (age.toLowerCase() === 'yes' && 'y') {
    alert('Getting older is a blessing.');
}
else {
    alert('There is much to learn young grasshoper.');
}