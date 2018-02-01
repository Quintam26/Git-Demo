'use strict';

alert('Let\'s get started!');
const name = prompt('What\'s your name?');
console.log('their name is ' + name);
// const name = 'Mario';
alert('Hello ' + name);

let correctAnswers = 0;

function q1(){
    const tvShow = prompt('Is Top Gear my favorite TV show?').toLowerCase();
    console.log('Do I like Top Gear ' + tvShow);
    //const tvShow = 'yes';

    if (tvShow === 'yes' || tvShow === 'y') {
        alert('I watch it everyday!');
        correctAnswers++;
    }
    else if (tvShow === 'no' || tvShow === 'n') {
        alert('You should know me better by now.');
    }
    else {
        alert('Invalid Input.');
    }
}

function q2(){
    const hobby = prompt('Do I do weightlifting?').toLowerCase();
    console.log('Do I enjoy weightlifting ' + hobby);
    //const hobby = 'yes';

    if (hobby === 'yes' || hobby === 'y') {
        alert('It\'s a challenging and rewarding sport.');
        correctAnswers++;
    }
    else if (hobby === 'no' || hobby === 'n'){
        alert('You got it wrong this time.');
    }
    else {
        alert('Invalid Input.');
    }
}

function q3(){
    const snack = prompt('Do I like Mac & Cheese?').toLowerCase();
    console.log('Do I like Mac and Cheese ' + snack);
    //const snack = 'no';

    if (snack === 'yes' || snack === 'y') {
        alert('I actually don\'t like it.');
    }
    else if (snack === 'no' || snack === 'n') {
        alert('Correct I prefer pizza or fries!');
        correctAnswers++;
    }
    else {
        alert('Invalid Input.');
    }
}

function q4(){
    const vGames = prompt('Do I still play video games?').toLowerCase();
    console.log('Do I play video games ' + vGames);
    //const vGames = 'yes';

    if (vGames === 'yes' || vGames === 'y') {
        alert('Yep but I only play Civilization 5 now.');
        correctAnswers++;
    }
    else if (vGames === 'no' || vGames === 'n') {
        alert('Well it\'s not entirely like that.');
    }
    else {
        alert('Invalid Input.');
    }
}

function q5(){
    const age = prompt('Am I you older than 25?').toLowerCase();
    console.log('Am I older than 25 ' + age);
    //const age = 'yes';

    if (age === 'yes' || age === 'y') {
        alert('Correct I am 27 years old.');
        correctAnswers++;
    }
    else if (age === 'no' || age === 'n')  {
        alert('I wish was that young!');
    }
    else {
        alert('Invalid Input.');
    }
}

function q6(){
    for (let i = 0; i < 5; i++){
        const mySiblings = parseInt(prompt('How many siblings do you think I have?'));
        console.log ('I have ' + mySiblings + ' siblings.');
        if (mySiblings === 0) {
            alert('I actually do have some siblings...');
        }
        else if (mySiblings < 6) {
            alert('I have few more siblings than that.');
        }
        else if (mySiblings > 6) {
            alert('You are guessing too high!');
        }
        else if (mySiblings === 6 ){
            alert('That\'s exactly right!');
            correctAnswers++;
            break;
        }
        else {
            alert('Invalid Input.');
        }
    }
}

function q7(){
    const lifts =  ['squat', 'bench', 'deadlift', 'shoulder press', 'back row'];
    for (let i = 0; i < 7; i++){
        const favLifts = prompt('Can you guess one of my favorite lifts in the gym?').toLowerCase();
        console.log ('One of my favorite lifts is ' + favLifts + '!');

        if (lifts.includes(favLifts)){
            alert('You\'re good at this game!');
            correctAnswers++;
            break;
        }
        else {
            alert('Keep guessing.');
        }
    }
}


function totalCorrect() {
    console.log ('total correct answers ' + correctAnswers);
    alert('Congrats ' + name + ' you got ' + correctAnswers + ' questions out of 7 correct!');
}

q1();
q2();
q3();
q4();
q5();
q6();
q7();


totalCorrect();


