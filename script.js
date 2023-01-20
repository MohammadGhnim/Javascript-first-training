function listArrayItems(arr){
    for (var i = 0; i < arr.length; i++){
        console.log(i, arr[i])
    }
}
var colors = ['red', 'orange', 'yello', 'green', 'blue', 'purple', 'pink'];
listArrayItems(colors);

// to start the count from one instead of zero //

function listArrayItems(arr){
    for (var i = 0; i < arr.length; i++){
        console.log(i + 1, arr[i])
    }
}

// add another condition //

function listArrayItems(arr) {
    for (var i = 0; i < arr.length; i++){
        if (arr[i] == 'red') {
            console.log(i*100, "tomato!")
        } else {
            console.log(i*100, arr[i])
        }
    }
}

/* Exercise: 
Task 1:
Write a function named letterFinder that accepts two parameters: word and match.

Task 2:
Code a 'for' loop inside the function's body. The for loop's counter should start at zero, increment by 1 on each iteration and exit when the counter variable's value is equal to the length of the word parameter.

Task 3:
Add an if statement inside the for loop whose condition works as follows:

Access each of the letters inside the passed in word using the counter variable, with word[i]. 

Check if the current word[i] is equal to the value of match.

Task 4:
console.log the following inside the body of the if statement: console.log('Found the', match, 'at', i).

Task 5:
Write the else condition. Here you'll just console log the following: console.log('---No match found at', i).

Task 6:
Call the letterFinder and pass it as its first argument as the string "test" and as its second argument, the string "t". */

function letterFinder (word, match) {
    for (var i = 0; i < word.length; i++) {
        if (word[i] == match) {
            console.log('Found the', match, 'at', i)
        } else {
            console.log('---No match found at', i)
        }
    }
}
letterFinder("test", "t")

/* (1) creating an object with properties and their values: 
by using the object literal syntax */

var assistantManager = {
    rangeTilesPerTurn:3,
    socialSkills: 3,
    streetSmarts: 30,
    health: 40,
    socialAbility: "young and ambitious",
    greeting: "Let's make some money"
}

// example: 
var table = {
    legs: 3,
    color: "brown",
    priceUSD: 100,
}
console.log(table);
console.log(table.color);

// example:
var hous = {
    rooms: 3,
    color: "brown",
    priceUSD: 10000,
}
console.log(hous);

/* (2) building objects with dot notation:
example: */
var house2 = {};
house2.rooms = 4;
house2.color = "pink";
house2.priceUSD = 12345;
console.log(house2);
// add a new property:
house2.windows = 10;
console.log(house2);
// to update already existing properties:
house2.windows = 11;
console.log(house2);

// (3) building objects using brackets notation:
var house2 = {};
house2["rooms"] = 4;
house2['color']= "pink";
house2["priceUSD"]= 12345;
console.log(house2);

// we can access and update properties on objects using a combination of both (dot notation) and (brackets notation)
var car = {}
car.color = "red";
car["color"] = "green";
car["speed"] = 200;
car.speed = 100;
console.log(car);

// space inside property:

car["number of doors"] = 4;
console.log(car);

// add numbers also:
car["2022"] = 1901;
console.log(car);

// bracket notation can evaluate expressions
var arr0fKeys = ['speed', 'altitude', 'color'];
var drone = {
    speed: 100,
    altitude: 200,
    color: "red",
}
for (var i = 0; i < arr0fKeys.length; i++){
    console.log(drone[arr0fKeys[i]])
}

// to add new items to an array, we can use push() method:

var fruits = [];
fruits.push("apple");
fruits.push('pear');
console.log(fruits);
// to remove the last items from an array, we can use the pop() method:

fruits.pop();
console.log(fruits);

// we can build a function that takes all its arguments and pushes them into an array:

function arrayBuilder(one, two, three) {
    var arr = [];
    arr.push(one);
    arr.push(two);
    arr.push(three);
    console.log(arr);
}
arrayBuilder('apple', 'pear', 'plum');    // ----->>   call the arrBuilder()

/* also, i don't have to console.log the newly built array.
Instead, i can return it*/

function arrayBuilder(one, two, three) {
    var arr = [];
    arr.push(one);
    arr.push(two);
    arr.push(three);
    return arr;
}
simpleArr = arrayBuilder('apple', 'pear', 'plum');
console.log(simpleArr);


// Math.random()

// generate a decimal number between 0 and 0.99
Math.random();

// save it to a variable:
var decimal = Math.random();

// log the value of decimal to the console 
console.log(decimal);

// log the value of decimal MUTIPLIED BY 10
console.log(decimal * 10);

//Math.ceil()

// Rounded up any decimal number to the nearest integer
// var rounded = Math.ceil(0.0001);
// var rounded = Math.ceil(0.5);
// var rounded = Math.ceil(0.99);
// var rounded = Math.ceil(1.01);
// var rounded = Math.ceil(1.5);
// var rounded = Math.ceil(2.99);

console.log(rounded);

// Random integer

/* Get a random decimal number between 0 and 0.99 ...
and save it to a variable */
var decimal = Math.random() * 10;

// Rounding up the value of decimal 
var rounded = Math.ceil(decimal);

// log the value of rounded to the console
console.log(rounded);


// For loop over arrays 
var letters = ['a', 'b', 'c'];
for (var i = 0; i< letters.length; i++ ){
    console.log(letters[i]);
}

// For loop over string 
var letters = "abc";
for (var i=0; i < letters.length; i++){
    console.log(letters[i]);
}

// example:
var veggies = ['onion', 'parsley', 'carrot'];
console.log(veggies.length);

console.log(veggies[0]);
console.log(veggies[1]);

for (var i = 0; i < veggies.length; i++) {
    console.log(veggies[i]);
}

// example:
var greeting = 'Howdy';
console.log(greeting.length);

console.log(greeting[0]);
console.log(greeting[1]);

for (var i = 0; i < greeting.length; i++) {
    console.log(greeting[i]);
}

// example:
var greet = 'Hello';
var user = 'Lisa';

// console.log(greet.pop())            // get error

console.log(greet + user);            //Hello Lisa
console.log(greet.concat(user));     //Hello Lisa

//example:
var greet = "Hello, ";
var place = "world";

greet.length;     // 7
// charAt() to read each individual character at a specific index in a string, starting from zero
greet.charAt(0);  // 'H'

// concat() method joins two strings:
"wo".concat("rl").concat("d");     // 'world'

// The indexOf returns the location of the first position that matches a character:
"ho-ho-ho".indexOf('h');    // 0
"ho-ho-ho".indexOf('o');    // 1
"ho-ho-ho".indexOf('-');    // 2

// The lastIndexOf finds the last match, otherwise it works the same as indexOf.

// The split method chops up the string into an array of sub-strings:
"ho-ho-ho".split("-");     // ['ho', 'ho', 'ho']

// to change the casing of strings:
greet.toUpperCase();       // "HELLO, "
greet.toLowerCase();       // "hello, "

/* Task:
Create a new empty array literal and assign it to the variable clothes.

Add 5 of your favorite items of clothing as strings using the push() method.

Remove the fifth piece of clothing from the array using the pop() method.

Add a new piece of clothing using the push() method.

Use console.log to show the third item from the clothes array in the console.

Create a new empty object literal and assign it to the variable favCar.

Using the dot notation, assign a color property to the favCar object and give it a string value with the color of your choice.

Using the dot notation, assign a covertible property to the favCar object and give it a boolean value of your choice.

Use the console to log the entire favCar object. */

var clothes = [];
clothes.push("T-shirt");
clothes.push("Sweater");
clothes.push("Jacket");
clothes.push("Coat");
clothes.push("Jeans");
clothes.pop();
clothes.push("Socks");
console.log(clothes[2]);
var favCar = {};
favCar.color = "black";
favCar.covertible = 4;
console.log(favCar);

// We can add new key-value pairs to existing objects using the dot notation and the assignment operator. 
var car = {};
car.color = "red";      // update the value of a property of the car object

//add a method to the car object so that it can be called as car.turnkey()
car.turnKey = function(){
    console.log('engine running');
}

// I'll build a new object literally named car. I type var, space, car, space, equal sign, space, followed by a set of curly braces, and finally a semicolon.
var car = {};
car.mileage = 98765;
car.color = "red";
console.log(car);
// now I've added two properties to my object.

//  I want to add a method to my car object.

var car = {};
car.mileage = 98765;
car.color = "red";
console.log(car);
car.turnTheKey = function() {
    console.log("The engine is running")
}
console.log(car);
// I begin by typing car dot turnTheKey, equals, and then I type the code for my function. So function, open-close parentheses. Then the two curly braces where I will place my code. Finally, inside the curly braces, I type the console dot log followed by the message "The engine is running".


// example of adding properties and methods to an object
var car = {};
car.mileage = 98765;
car.color ="red";
console.log(car);
car.turnTheKey = function() {
    console.log("The engine is running")
}
car.lightsOn = function() {
    console.log("the lights are on.")
}
console.log(car);
car.turnTheKey();
car.lightsOn();

//  to run it, I need to append an opening and a closing parenthesis so that the JavaScript engine can process my JavaScript code. 
