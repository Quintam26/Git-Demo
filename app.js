alert("Let's get started!");
const name = prompt("What's your name?")
console.log("their name is " + name);
// const name = "Mario";

alert("Hello " + name +".");
const color = prompt("What's your favorite color?")
console.log("favorite color is " + color);
// const color = "green";

alert("Not a bad choice " + name+"!");
const pizza = confirm("Do you like hawaiian pizza?")
console.log("like hawaiian pizza " + pizza);
//const pizza = "true";

if (pizza===true) {
    alert("Great choice " + name+" now let's dig further.");
    }
    else {
    alert("Okay " + name+" now that we know your dislike for hawaiian pizza let's continue.");
    }

const movie = prompt("What's your favorite movie?")
console.log("favorite movie is " + movie);
//const movie = "The Godfather";

alert("I see you are a person of culture as well " + name+".  And now for the last question.");
const driving = confirm("Do you like to drive?")
console.log("like to drive " + driving);
//const driving = "true";

if (driving===true) {
    alert("I am an avid driver and car enthusiast as well!");
    }
    else {
    alert("That's too bad " + name+"...");
    }