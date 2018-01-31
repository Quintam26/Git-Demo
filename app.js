'use strict';

alert('Let\'s get started!');
const name = prompt('What\'s your name?');
console.log('their name is ' + name);
// const name = 'Mario';

alert('Hello ' + name);
const tvShow = prompt('Is Top Gear your favorite TV show?');
console.log('likes Top Gear ' + tvShow);
//const tvShow = 'yes';

if (tvShow.toLowerCase() === 'yes' || tvShow.toLowerCase() === 'y') {
    alert('It\'s a great show.');
}
else if (tvShow.toLowerCase() === 'no' || tvShow.toLowerCase() === 'n') {
    alert('That\'s too bad ' + name + ' try watching it again.');
}

const hobby = prompt('Do you consider weightlifting amazing?');
console.log('enjoys weightlifting ' + hobby);
//const hobby = 'yes';

if (hobby.toLowerCase() === 'yes' || hobby.toLowerCase() === 'y') {
    alert('It\'s a challenging and rewarding sport.');
}
else if (hobby.toLowerCase() === 'no' || hobby.toLowerCase() === 'n'){
    alert('It takes a lot of discipline to get started.');
}

const snack = prompt('Do you like Mac & Cheese?');
console.log('likes Mac and Cheese ' + snack);
//const snack = 'no';

if (snack.toLowerCase() === 'yes' || snack.toLowerCase() === 'y') {
    alert('It\'s a great meal anytime.');
}
else if (snack.toLowerCase() === 'no' || snack.toLowerCase() === 'n') {
    alert('You should try Elephant\'s Mac and Cheese.');
}

const vGames = prompt('Do you still play video games?');
console.log('likes video games ' + vGames);
//const vGames = 'yes';

if (vGames.toLowerCase() === 'yes' || vGames.toLowerCase() === 'y') {
    alert('Civilization 5 is fun to play.');
}
else if (vGames.toLowerCase() === 'no' || vGames.toLowerCase() === 'n') {
    alert('I guess you can outgrow some things.');
}

const age = prompt('Are you older than 25?');
console.log('older than 25 ' + age);
//const age = 'yes';

if (age.toLowerCase() === 'yes' || age.toLowerCase() === 'y') {
    alert('Getting older is a blessing.');
}
else if (age.toLowerCase() === 'no' || age.toLowerCase() === 'n')  {
    alert('There is much to learn young grasshoper.');
}