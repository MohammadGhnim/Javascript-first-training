//----------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*   ------------------------------------------------                   Comments in JavaScript:                    -----------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------------------------------------------------

1- Single-line comments               // this is a comment!

2- Multi-line comments                  /*
                                        this
                                        is
                                        a
                                        multi-line
                                        comment
                                        */
console.log("Hello, World");
// ----> Hello, world

console.log("%cHello, World", "color: blue; font-size: 40px");
// ----> the color of the letters will be blue, and the font size will be 40px. 

console.log("Hello " + "there, " + "World");
// Hello there, World

console.log("Hello ", "there, ", "World");
// Hello  there,  World

/*  --------------------------             Exercise: Declaring variables           ------------------------------
Tasks
1- Declare a new variable named petDog and give it the name Rex.*/
var petDog = "Rex";

// 2- Declare a new variable named petCat and give it the name Pepper.
var petCat = "Pepper";

// 3- Console.log the petDog variable.
var petDog = 'Rex'; 
console.log(petDog);
//----> Rex

// 4- Console.log the petCat variable.
var petCat = 'Pepper'; 
console.log(petCat);
// ----> Pepper

// 5- Console.log the text "My pet dog's name is: " and the petDog variable.
var petDog = 'Rex'; 
console.log("My pet dog's name is: " + petDog);
// My pet dog's name is: Rex

// 6- Console.log the text "My pet cat's name is: " and the petCat variable.
var petCat = 'Pepper'; 
console.log("My pet cat's name is: " + petCat);
// ----> My pet cat's name is: Pepper

// 7- Declare another variable and name it catSound. Assign the string of "purr" to it.
var catSound = "purr";

// 8- Declare another variable and name it dogSound. Assign the string of "woof" to it.
var dogSound = "woof";

// 9- Console.log the variable petDog, then the string "says", then the variable dogSound.
var petDog = 'Rex'; 
var dogSound = "woof"; 
console.log(petDog, "says", dogSound);
// ----> Rex says woof

// 10- Console.log the variable petCat, then the string "says", then the variable catSound.
var petCat = 'Pepper'; 
var catSound = "purr"; 
console.log(petCat, "says", catSound);
// ----> Pepper says purr

// 11- Reassign the value stored in catSound to the string "meow".
var catSound = "purr"; // Task 7 solution
catSound = "meow";


// 12- Console.log the variable petCat, then the string "now says", then the variable catSound.
var petCat = 'Pepper'; 
var catSound = "meow"; 
console.log(petCat, "now says", catSound);
// ----> Pepper now says meow

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*-------------------------------------------------                           Data Types:                         -----------------------------------------------------------
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
1- String      "Hello World"
2- Number      3456
3- Boolean     a- True   b- False
4- Null        Absence of a value 
5- Undefind    unassigned Value
6- BigInt      very large range of numbers (2^53)
7- Symbol      unique identifier
*/
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------                          Operators                          -------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------


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

/*   ---------------------------------------                Exercise:        -------------------------------------

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
favCar.covertible = true;
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


// using Typeof:

// var test = typeof('what is this?');                            // run ---> string

// var test = typeof(10);                                         // run ---> number

// var test = typeof(3.14);                                       // run ---> number

// var test = typeof(true);                                       // run ---> bolean

// var test = typeof(false);                                      // run ---> bolean

// var test = typeof(1 < 2);                                      // run ---> bolean

// var test = typeof([1,2,3]);                                    // run ---> object

// var test = typeof({ firstProperty: 1 });                       // run ---> object

// var test = typeof(function abc(){ console.log('abc'); });      // run ---> function

console.log(test);


// Bugs and Errors:

function addNums(a, b) {
    console.log(a + b);
}
addNums(1, 2);                                                   // ----> 1 + 2 = 3   
console.log("Still running");                                    // ----> 3 and Still running

function addNums(a, b) {
    console.log(a + b);
}

// 1- Bug:
addNums("1", 2);                                         // [("1") = String, (+) = Add, (2) = Number], the result will be = "12" ---> String  (concatenation)
console.log("Still running");                            // ---->  12 and Still running     "This is a Bug"

// 2- Error:
console.log(c + d);                                      // console: ReferenceError: c is not defined
console.log('This line never runs');                     // Does not excute

// Types of error: 1- Syntax Error   2- Type Error   3- Reference Error

/*  var word = "hello;  ----> Syntax Error
    console: SyntaxError: Invalid or unexpected token

    (5).pop; ----> Type Error 
    console: Type Error: 5.pop is not a function    */
// Error handling: 
// 1- catch
try {
    console.log(c + d)
} catch(err) {
    console.log(err)
}   
console.log('This line now runs');
//----> Console: This line now runs                      
// 2- throw
try {
    throw new error();
} catch(err) {
    console.log(err)
}
console.log('This line now runs');
// ---->  ReferenceError: This line now runs

// example:
console.log(a + b);
console.log("This line is never reached")
// -----> Console: ReferenceError: c is not defined


throw new ReferenceError();
// ----> console: ReferenceError

try {
    console.log(a + b)
} catch(err) {
    console.log(err)
    console.log('There was an error')
    console.log('the error was saved in the error log')
}   
console.log('My programm does not stop');
/* ----> ReferenceError: a is not defined
.
.
.
There was an error
the error was saved in the error log
My programm does not stop */

// example:
try {
    throw new ReferenceError();
} catch(err) {
    console.log(err)
    console.log('There was a Reference error')
}   
console.log('My programm does not stop');

/* ----> console: ReferenceError
.
.
.
There was a Reference error
My programm does not stop */


/* Most common errors:
1- ReferenceError
2- SyntaxError
3- TypeError
4- RangeError
other error includes:
!- aggregateError
2- Error
3- InternalError
4- URIError

1- ReferenceError:
one tries to use variables that haven't been declared anywhere.

example:
console.log(username);
----> Uncaught ReferenceError: username is not defined

2- SyntaxError:
Any kind of invalid JavaScript code will cause a SyntaxError.

example:
var a "there's no assignment operator here";
---- > SyntaxError: Unexpected string

3- TypeError:
trying to run a method on a non-supported data type.

example:
"hello".pop()
----> TypeError: "hello".pop is not a function

4- RangeError:
when we're giving a value to a function, but that value is out of the allowed range of acceptable input values.

example:
(10).toString(2);
----> '1010'

(10).toString(100);
----> RangeError: toString() radix argument must be between 2 and 36 */

/* Undefined, null and empty values
1- Null datatype: 
var letters = 'abc';
letters.match(/a/);
----> console: ['a', index:o, input:'abc', groups: undefined]

var letters = 'abc';
letters.match(/d/);
----> console: null 

var noise;
console.log(noise);
----> console: undefined

noise = 'thunder';
console.log(noise);
----> console: thunder

var food;
console.log(food);
----> console: undefined

var game = {
    score: 1000
}

game.Score;
----> console: undefind   (s,S)

3- empty strings:
var name1 = '';
var name2 = "";          */

/* Exercise: Error prevention
Instructions
Task 1: Code a function declaration
You need to code a function declaration named addTwoNums, which accepts numbers a and b and console logs a + b.*/
function addTwoNums(a,b) {
    console.log(a + b) //display the result
}

/* Task 2: Invoke the addTwoNums function with a number and a string
You need to invoke the addTwoNums using the following arguments: 5 and "5". */
function addTwoNums(a,b) {
    console.log(a + b)
}
addTwoNums(5, "5") // "55"

/* Task 3: Update the addTwoNums function with a try...catch block
Add the try and catch blocks inside the function definition's body. 
For now, just make sure that the console log of a + b is inside the try block. 
Additionally, the catch block should catch an error named err and, inside the body of the catch block, you need to console log the err value. */
function addTwoNums(a,b) {
    try {
        console.log(a + b)
    } catch(err) {
        console.log(err)
    }
}

/* Task 4: If the passed-in arguments are not numbers, throw an error
If either of the arguments passed to the addTwoNums are not numbers, you'll throw an error.

Specifically, code a conditional with the following logic:

if the typeof the a parameter is not equal to 'number', throw a new ReferenceError. Inside the ReferenceError, pass a custom error message of 'the first argument is not a number'.

else if the typeof the b parameter is not equal to 'number', throw a new ReferenceError. Inside the ReferenceError, pass a custom error message of 'the second argument is not a number'.

else, console log a + b  

Once you've completed this task, all the code inside the try block will be inside these conditional statements. */
function addTwoNums(a,b) {
    try {
        if(typeof(a) != 'number') {
            throw new ReferenceError('the first argument is not a number')
        } else if (typeof(b) != 'number') {
            throw new ReferenceError('the second argument is not a number')
        } else {
            console.log(a + b)
        }
    } catch(err) {
        console.log(err)
    }
}

/* Task 5: Update the catch block
Inside the catch block, update the code from console.log(err) to console.log("Error!", err). */
function addTwoNums(a,b) {
    try {
        if(typeof(a) != 'number') {
            throw new ReferenceError('the first argument is not a number')
        } else if (typeof(b) != 'number') {
            throw new ReferenceError('the second argument is not a number')
        } else {
            console.log(a + b)
        }
    } catch(err) {
        console.log("Error!", err)
    }
}

/*  Task 6: Invoke the addTwoNums function
Invoke the addTwoNums function using 5 and "5" as arguments. 
    Task 7: Add another console log under the addTwoNums function invocation
Add another line of code that console logs the string "It still works". */
function addTwoNums(a,b) {
    try {
        if(typeof(a) != 'number') {
            throw new ReferenceError('the first argument is not a number')
        } else if (typeof(b) != 'number') {
            throw new ReferenceError('the second argument is not a number')
        } else {
            console.log(a + b)
        }
    } catch(err) {
        console.log("Error!", err)
    }
}
addTwoNums(5, "5")
console.log("It still works")

//------------------------------------------------------------------------------------------------------------------------------------------------------
/* 
Programming Paradigms:     
1- Functional Programming(FP)  
There is a clear distinction between data and functions in functional programming as data can exist outside of functions.
*/

var shoes = 100;                                           //---->Data
var stateTax = 1.1;
function totalPrice(price, tax) {                          //---->Function
    return price * tax;                                    //---->Returns value
}
var toPay = totalPrice(shoes, stateTax);                   //---->Arguments
console.log(toPay);
// ----> 110.00000000000001

var currencyOne = 100;
var currencyTwo = 0;
var exchangeRate = 1.2;
function convertCurrency(amount, rate) {
    return amount * rate;
}

currencyTwo = convertCurrency(currencyOne, exchangeRate);

console.log(currencyTwo);
// ----> 120


/*2- Object-oriented programming (oop)
you combine both data and functions into objects.
*/


// ----------------------------------------------------------------------------------------------------------------------------------------------------------
/* -----------------------------             Return value from Functions            ---------------------------
by default: */
console.log('Hello');
//----> Hello (undefined)

function consoleLog(val) {
    console.log(val)
    return val
}
console.log('Hello');
//----> Hello ('Hello')


//example:
// I'll first code a function that returns a double of a number that it received:
function doubleIt(num) {
    return num * 2
}

// Now I'll code another function that builds an object with a specific value:
function objectMaker(val) {
    return {
        prop: val
    }
}

// I can call the objectMaker() function with any value I like, such as:
objectMaker(20);

// The returned value will be an object with a single prop key set to 20:
//----> {prop:20}

//Now consider this code:
doubleIt(10).toString()
// ---> The above code returns the number 20 as a string, that is: "20".

// I can even combine my custom function calls as follows:
objectMaker( doubleIt(100) );
// This will now return the following value: -----> {prop: 200}

// --------------------------------------------------------------------------------------------------------------------------------------------------
//        ----------------------------                     Function calling and recursion                -----------------------------

function example(){
    console.log('line one');
    console.log('line two');
    console.log('line three');
}
//----> undefined

function example(){
    console.log('line one');
    console.log('line two');
    console.log('line three');
}

example()
/* ---->line one
        line two
        line three
*/

let counter = 3;
function example() {
    console.log(counter);
    counter = counter - 1;
    if (counter === 0) return;
    example();
}
// ----> undefined
//then:
example();
/*----> 3
        2
        1
*/
// --------------------------------------------------------------------------------------------------------------------------------------------------------------
// ----------------------------                  Scope               -----------------------------------

var num1 = 10;                          //-----> global scope
function score(){                       //-----> local scope  
    console.log(num1);
}
score();
//----> 10


/*scope types:
1- local
2- global 
*/  


var num1 = 10;                          //-----> global scope


function score(){      
    var num2 = 20;                     //-----> local scope  
    console.log(num2);
}


var globalVar = "I'm in the global scope";

function scopeTest() {
    var localVar = " I'm scoped to the function";
    console.log(globalVar);
}

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------

// ------------------------                           The functional programming paradigm                      -----------------------------------------------------

/* functional programming (FP)
example:
we use a lot of functions and variables:
*/
function getTotal(a,b) {
    return a + b
}
var num1 = 2;
var num2 = 3;

var total = getTotal(num1 + num2);

// we keep data and functionality separate and pass data into functions only when we want something computed:
function getDistance(mph, h){
    return mph * h
}
var mp = 60,
var h = 2;
var distance = getDistance(mph, h);

// functions return new values and then use those values somewhere else in the code:
function getDistance(mph, h) {
    return mph * h
}
var mph = 60;
var h = 2;
var distance = getDistance(mph, h);

console.log(distance);
// ----> 120


/* object-oriented programming (OOP)
we group data and functionality as properties and methods inside objects. 

For example, if I have a virtualPet object, I can give it a sleepy property and a nap() method:
*/
var virtualPet = {
    sleepy: true,
    nap: function() {}
}

// In OOP, methods update properties stored in the object instead of generating new return values.
// creating an Object:
var virtualPet = {
    sleepy: true,
    nap: function() {
        this.sleepy = false
    }
}
console.log(virtualPet.sleepy)
// ----> true

var virtualPet = {
    sleepy:true,
    nap: function() {
        this.sleepy = false
    }
}
virtualPet.nap()
console.log(virtualPet.sleepy);
// ----> false


/* Functional Programming (OP) paradigm works by keeping the data and functionality separate. 
    OOP, works by keeping the data and functionality grouped in meaningful objects. 
    يعمل نموذج البرمجة الوظيفية عن طريق إبقاء البيانات والوظائف منفصلة.
    البرمجة الموجهة للكائنات ، تعمل عن طريق الحفاظ على البيانات والوظائف مجمعة في كائنات ذات معنى.

First-class functions:
It means that a function in JavaScript is just another value that we can:

a) pass to other functions

b) save in a variable

c) return from other functions

*/
function addTwoNums(a, b) {
    console.log(a + b);
}

function randomNum() {
    return Math.floor((Math.random() * 10) + 1);
}
function specificNum() { return 42 };

var useRandom = true;

var getNum;

if(useRandom) {
    getNumber = randomNum
} else {
    getNumber = specificNum
}

addTwoNums(getNumber(), getNumber())
// ----> 16

/*Higher-order functions

A higher-order function is a function that has either one or both of the following characteristics:

a) It accepts other functions as arguments

b) It returns functions when invoked  */
function addTwoNums(getNumber1, getNumber2) {
    console.log(getNumber1()+ getNumber2());
}

addTwoNums(specificNum, specificNum);
// ----> 84

function addTwoNums(getNumber1, getNumber2) {
    console.log(getNumber1()+ getNumber2());
}

addTwoNums(specificNum, randomNum);
// ----> returned number is 42 + some random number 
// ----> 47 with me


/* Pure functions and side-effects:
A pure function returns the exact same result as long as it's given the same values.
 */
function addTwoNums(a, b) {
    console.log(a + b);
}
addTwoNums(5, 6);
// ----> 11

/* 
Another rule for a function to be considered pure is that it should not have side-effects. 
A side-effect is any instance where a function makes a change outside of itself.

This includes: 

1- changing variable values outside of the function itself, or even relying on outside variables 

2- calling a Browser API (even the console itself!) 

3- calling Math.random() - since the value cannot be reliably repeated 
*/

// -----------------------------------------------------------------------------------------------------------------------------------------------------------
// --------------------------------                   scoping                     -----------------------------------------
var num1 = 10;                                  //---> Global scope

function score() {                              // Local scope
    var num2 = 20;
    console.log(num2); 
}
//----> 20


let color ='red';                     // global scope

if (color == 'red') {                 // Block scope Curly Braces)   Two separate variables with the same name 
    let color == 'blue';                 
}
console.log(color);  // red

// -----------------------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------                    comparing var, let and const                        ---------------------------------------------------


// var keyword

// 1- we can access a var variable before initialization ...
        // .... as long as the var variable is eventualy initialized
        // .... anywhere in our code 
        // console.log(user);

// 2- we can declare and redeclare the same var variable without errors
//var user = "Mary";
//var user = "Joanna";
//var user = "Mark";

//console.log(user);       ----> Mark


/*
let keyword

1- we cannot access a let variable before we declare it
2- we can declare an unassigned variable with let 
3- we  can't redeclare a let variable 
4- but we can re-assign it
*/

/*
const keyword

1- the const variable must be initialized 
2- we can't access the const variable before initialization
3- we can't redeclare a const variable



                                var                  let                         const
                Lenient <-------------------------------------------------------------------->  Strict
*/


//------------------------------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------                    Object-oriented-programming                         ----------------------------------------------
//------------------------------------------------------------------------------------------------------------------------------------------------------------------

// group data = (oop)
// seoarate data = (fp)


// Object-oriented programming:
var purchase1 = {                                                              //---> object
    shoes: 100,
    stateTax:1.2,
    totalPrice: function() {                                                   //---> Method  
        var calculation = purchse1.shoes * purchse1.stateTax;
        console.log('Total price:', calculation);
    }
}
purchase1.totalPrice();    // 120
purchase1.shoesPrice;      // 100
purchase1.stateTax;        // 1.2

var purchase2 = {
    shoes: 50,
    stateTax: 1.2,
    totalPrice: function() {
        var calculation = purchase2.shoes * purchase2.stateTax;
        console.log('Total price:', calculation);
    }
}

purchase2.totalPrice();    // 60


var purchase1 = {
    shoes: 100,
    stateTax: 1.2,
    totalPrice: function() {
        var calculation = this.shoes * this.stateTax;
        console.log('Total price:', calculation);
    }
}
purchase1.totalPrice();    // 120


// examples:
// 1- functional programming

var shoes = 100;
var stateTax = 1.2;
function totalPrice(shoes, tax) {
    return shoes * tax;
}

var toPay = totalPrice(shoes, stateTax);

console.log(toPay);
// ----> 120



// 2- object-oriented programming
// 1)
var purchase1 = {
    shoes: 100,
    stateTax: 1.2,
    totalPrice: function() {
        var calculation = purchase1.shoes * purchase1.stateTax;
        console.log('Total price:', calculation);
    }
}
purchase1.totalPrice();    
//-----> Total price: 120

// 2)
var purchase2 = {
    shoes: 50,
    stateTax: 1.2,
    totalPrice: function() {
        var calculation = purchase2.shoes * purchase2.stateTax;
        console.log('total price:', calculation);
    }
}
purchase2.totalPrice();
//  ----> total price: 60

// 3)
var purchase1 = {
    shoes: 100,
    stateTax: 1.2,
    totalPrice: function() {
        var calculation = this.shoes * this.stateTax;
        console.log('Total price:', calculation);
    }
}
purchase1.totalPrice();   

var purchase2 = {
    shoes: 50,
    stateTax: 1.2,
    totalPrice: function() {
        var calculation = this.shoes * this.stateTax;
        console.log('Total price:', calculation);
    }
}
purchase2.totalPrice();

/* Total price: 120
   Total price: 60 */


// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------                              classes                                 -------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
class Car {
    constructor(color, speed) {
        this.color = color;
        this.speed = speed;
    }

    turboOn() {
        console.log("turbo is on!")
    }
} 

const car1 = new Car("red", 120)
car1.turboOn();
//-----> turbo is on!


// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ----------------------------------------                          Object Oriented Programming principles                            -----------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


/*The Benefits of OOP:

1- Allows you to write modular code,

2- Makes your code more flexible and

3- Makes your code reusable.


The Principles of OOP:

1- inheritance, 
2- encapsulation, 
3- abstraction,
4- polymorphism
*/

class Animal {/* ... class code here... */}

var myDog = Objrct.create(Animal)
console.log(Animal)
//----> [class Animal]


class Animal {/* ... class code here... */}

var myDog = new Animal()
console.log(Animal)
//----> [class Animal]

/*
1- OOP Principles: Inheritance
t works like this: 

There is a base class of a "thing".

There is one or more sub-classes of "things" that inherit the properties of the base class (sometimes also referred to as the "super-class")

There might be some other sub-sub-classes of "things" that inherit from those classes in point 2.

*/
class Animal { /* ...class code here... */ }
class Bird extends Animal { /* ...class code here... */ }
class Eagle extends Bird { /* ...class code here... */ }

/*
2- OOP Principles: Encapsulation
In the simplest terms, encapsulation has to do with making a code implementation "hidden" from other users, 
in the sense that they don't have to know how my code works in order to "consume" the code.
 */
"abc".toUpperCase();

/*
3- OOP Principles: Abstraction
Abstraction is all about writing code in a way that will make it more generalized.

* An abstraction is about extracting the concept of what you're trying to do, rather than dealing with a specific manifestation of that concept. 

* Encapsulation is about you not having access to, or not being concerned with, how some implementation works internally.
*/


/*
OOP Principles: Polymorphism
Polymorphism is a word derived from the Greek language meaning "multiple forms". 
An alternative translation might be: "something that can take on many shapes".

* A door has a bell. It could be said that the bell is a property of the door object. 
This bell can be rung. When would someone ring a bell on the door? Obviously, to get someone to show up at the door.

* Now consider a bell on a bicycle. A bicycle has a bell. It could be said that the bell is a property of the bicycle object. This bell could also be rung. 
However, the reason, the intention, and the result of somebody ringing the bell on a bicycle is not the same as ringing the bell on a door.
*/

const bicycle = {
    bell: function() {
        return "Ring, ring! Watch out, please!"
    }
}
const door = {
    bell: function() {
        return "Ring, ring! Come here, please!"
    }
}

// So, I can access the bell() method on the bicycle object, using the following syntax: 
bicycle.bell(); // "Get away, please"

// I can also access the bell() method on the door object, using this syntax:  
door.bell(); // "Come here, please"

//Now, to make this code truly polymorphic, I will add another function declaration:
function ringTheBell(thing) {
    console.log(thing.bell())
}

/*Now I have declared a ringTheBell() function. It accepts a thing parameter - which I expect to be an object, namely, either the bicycle object or the door object.

So now, if I call the ringTheBell() function and pass it the bicycle as its single argument, here's the output:*/
ringTheBell(bicycle); // Ring, ring! Watch out, please!

/* However, if I invoke the ringTheBell() function and pass it the door object, I'll get the following output: */
ringTheBell(door); // "Ring, ring! Come here, please!"


/* Here's another example,the concatenation operator, used by calling the built-in concat() method.

If I use the concat() method on two strings, it behaves exactly the same as if I used the + operator. */
"abc".concat("def"); // 'abcdef'

//I can also use the concat() method on two arrays. Here's the result: 
["abc"].concat(["def"]); // ['abc', 'def']

//Consider using the + operator on two arrays with one member each:  
["abc"] + ["def"]; // ["abcdef"]


// Here's an example of polymorphism using classes in JavaScript:
class Bird {
    useWings() {
        console.log("Flying!")
    }
}
class Eagle extends Bird {
    useWings() {
        super.useWings()
        console.log("Barely flapping!")
    }
}
class Penguin extends Bird {
    useWings() {
        console.log("Diving!")
    }
}
var baldEagle = new Eagle();
var kingPenguin = new Penguin();
baldEagle.useWings(); // "Flying! Barely flapping!"
kingPenguin.useWings(); // "Diving!"

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------                           Constructors                                         --------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------                           Inheritance                                           -------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// prototype:
var bird = {
    hasWings: true,
    canFly: true,
    hasFeathers: true
}

var eagle1 = Object.create(bird);
console.log("eagle1: ", eagle1);
//-----> eagle1: {}

console.log("eagle1 has wings:", eagle1.hasWings);
console.log("eagle1 can fly:", eagle1.canFly);
console.log("eagle1 has feathers:", eagle1.hasFeathers);
/*
----> eagle1:  {}
----> eagle1 has wings: true
---->eagle1 can fly: true
----> eagle1 has feathers: true
 */

var eagle2 = Object.create(bird);
console.log("eagle2 has wings:", eagle2.hasWings);
/* 
----> eagle1:  {}
----> eagle1 has wings: true
---->eagle1 can fly: true
----> eagle1 has feathers: true
----> eagle2 has wings: true 
*/

var penguin1 = Object.create(bird);
penguin1.canFly = false;
console.log("penguin1: ", penguin1);
/*
----> eagle1:  {}
----> eagle1 has wings: true
---->eagle1 can fly: true
----> eagle1 has feathers: true
----> eagle2 has wings: true 
----> penguin1:  { canFly: false }
*/
console.log("penguin1 has feathers:", penguin1.hasFeathers);
console.log("penguin1 can fly: ", penguin1.canFly);
/*
----> eagle1:  {}
----> eagle1 has wings: true
----> eagle1 can fly: true
----> eagle1 has feathers: true
----> eagle2 has wings: true 
----> penguin1:  { canFly: false }
----> penguin1 has feathers: true
----> penguin1 can fly:  false
*/


//--------------------------------------------------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------                   Creating classes                  ---------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------


//  Train class.
class Train {
    constructor() {                   // The constructor will be used to build properties on the future object instance of the Train class.
        this.color = color;            // This here: It's the future object instance of the Train class.
        this.lightsOn = lightsOn;
    }
}

new Train()                            // Inside the parentheses, you need to pass values such as "red" and false, for example, meaning that the color property is set to "red" and the lightsOn property is set to false.

// we need to assign it to a variable.
var myFirstTrain = new Train('red', false);
console.log(myFirstTrain); // Train {color: 'red', lightsOn: false}
var mySecondTrain = new Train('blue', false);
var myThirdTrain = new Train('blue', false);

//You can also add methods to classes
class Train {
    constructor(color, lightsOn) {
        this.color = color;
        this.lightsOn = lightsOn;
    }
    toggleLights() {
        this.lightsOn = !this.lightsOn;
    }
    lightsStatus() {
        console.log('Lights on?', this.lightsOn);
    }
    getSelf() {
        console.log(this);
    }
    getPrototype() {
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
    }
}

/*
1- The toggleLights method uses the logical not operator, !. 
This operator will change the value stored in the lightsOn property of the future instance object of the Train class; 
hence the !this.lightsOn. And the = operator to its left means that it will get assigned to this.lightsOn, 
meaning that it will become the new value of the lightsOn property on that given instance object.

2- The lightsStatus() method on the Train class just reports the current status of the lightsOn variable of a given object instance.

3- The getSelf() method prints out the properties on the object instance it is called on.

4- The getPrototype() console logs the prototype of the object instance of the Train class. 
The prototype holds all the properties shared by all the object instances of the Train class. 
To get the prototype, you'll be using JavaScript's built-in Object.getPrototypeOf() method, and passing it this object - 
meaning, the object instance inside of which this method is invoked.

Now you can build a brand new train using this updated Train class:
*/
var train4 = new Train('red', false);


//And now, you can run each of its methods, one after the other, to confirm their behavior:
train4.toggleLights(); // undefined
train4.lightsStatus(); // Lights on? true
train4.getSelf(); // Train {color: 'red', lightsOn: true}
train4.getPrototype(); // {constructor: f, toggleLights: f, ligthsStatus: f, getSelf: f, getPrototype: f}

class HighSpeedTrain extends Train {
    constructor(passengers, highSpeedOn, color, lightsOn) {
        super(color, lightsOn);
        this.passengers = passengers;
        this.highSpeedOn = highSpeedOn;
    }
}
// In JavaScript classes, super is used to specify what property gets inherited from the super-class in the sub-class.

// Now let's add another method that will be specific to the HighSpeedTrain class: the toggleHighSpeed() method.
class HighSpeedTrain extends Train {
    constructor(passengers, highSpeedOn, color, lightsOn) {
        super(color, lightsOn);
        this.passengers = passengers;
        this.highSpeedOn = highSpeedOn;
    }
    toggleHighSpeed() {
        this.highSpeedOn = !this.highSpeedOn;
        console.log('High speed status:', this.highSpeedOn);
    }
}

/*
Additionally, imagine you realized that you don't like how the toggleLights() method from the super-class works, 
and you want to implement it a bit differently in the sub-class. You can add it inside the HighSpeedTrain class. 
*/
class HighSpeedTrain extends Train {
    constructor(passengers, highSpeedOn, color, lightsOn) {
        super(color, lightsOn);
        this.passengers = passengers;
        this.highSpeedOn = highSpeedOn;
    }
    toggleHighSpeed() {
        this.highSpeedOn = !this.highSpeedOn;
        console.log('High speed status:', this.highSpeedOn);
    }
    toggleLights() {
        super.toggleLigths();
        super.lightsStatus();
        console.log('Lights are 100% operational.');
    }
}

// Well in the super-class, the toggleLights() method was defined as follows:
toggleLights() {
    this.lightsOn = !this.lightsOn;
}

// Finally, you also add the third line in the re-implemented toggleLights() method, namely:
console.log('Lights are 100% operational.');

// Now you're ready to build some train objects.
var train5 = new Train('blue', false);
var highSpeed1 = new HighSpeedTrain(200, false, 'green', false);

// Now you can test the behavior of train5, by calling, for example, the toggleLights() method, then the lightsStatus() method:
train5.toggleLights(); // undefined
train5.lightsStatus(); // Lights on? true

// Here's the entire completed code for this lesson:
class Train {
    constructor(color, lightsOn) {
        this.color = color;
        this.lightsOn = lightsOn;
    }
    toggleLights() {
        this.lightsOn = !this.lightsOn;
    }
    lightsStatus() {
        console.log('Lights on?', this.lightsOn);
    }
    getSelf() {
        console.log(this);
    }
    getPrototype() {
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
    }
}

class HighSpeedTrain extends Train {
    constructor(passengers, highSpeedOn, color, lightsOn) {
        super(color, lightsOn);
        this.passengers = passengers;
        this.highSpeedOn = highSpeedOn;
    }
    toggleHighSpeed() {
        this.highSpeedOn = !this.highSpeedOn;
        console.log('High speed status:', this.highSpeedOn);
    }
    toggleLights() {
        super.toggleLights();
        super.lightsStatus();
        console.log('Lights are 100% operational.');
    }
}

var myFirstTrain = new Train('red', false);
console.log(myFirstTrain); // Train {color: 'red', lightsOn: false}
var mySecondTrain = new Train('blue', false);
var myThirdTrain = new Train('blue', false);

var train4 = new Train('red', false);
train4.toggleLights(); // undefined
train4.lightsStatus(); // Lights on? true
train4.getSelf(); // Train {color: 'red', lightsOn: true}
train4.getPrototype(); // {constructor: f, toggleLights: f, ligthsStatus: f, getSelf: f, getPrototype: f}

var train5 = new Train('blue', false);
var highSpeed1 = new HighSpeedTrain(200, false, 'green', false);

train5.toggleLights(); // undefined
train5.lightsStatus(); // Lights on? true
highSpeed1.toggleLights(); // Lights on? true, Lights are 100% operational.


// Using class instance as another class' constructor's property
// Consider the following example:
class StationaryBike {
    constructor(position, gears) {
        this.position = position
        this.gears = gears
    }
}

class Treadmill {
    constructor(position, modes) {
        this.position = position
        this.modes = modes
    }
}

class Gym {
    constructor(openHrs, stationaryBikePos, treadmillPos) {
        this.openHrs = openHrs
        this.stationaryBike = new StationaryBike(stationaryBikePos, 8)
        this.treadmill = new Treadmill(treadmillPos, 5)
    }
}

var boxingGym = new Gym("7-22", "right corner", "left corner")

console.log(boxingGym.openHrs) //
console.log(boxingGym.stationaryBike) //
console.log(boxingGym.treadmill) //

/*
----> 7-22
----> StationaryBike { position: 'right corner', gears: 8 }
----> Treadmill { position: 'left corner', modes: 5 }
*/

/* 
In this example, there are three classes defined: StationaryBike, Treadmill, and Gym.

The StationaryBike class is coded so that its future object instance will have the position and gears properties. 
The position property describes where the stationary bike will be placed inside the gym, and the gears propery gives the number of gears that that stationary bike should have.

The Treadmill class also has a position, and another property, named modes (as in "exercise modes").

The Gym class has three parameters in its constructor function: openHrs, stationaryBikePos, treadmillPos.

This code allows me to instantiate a new instance object of the Gym class, and then when I inspect it, I get the following information:

the openHrs property is equal to "7-22" (that is, 7am to 10pm)

the stationaryBike property is an object of the StationaryBike type, containing two properties: position and gears

the treadmill property is an object of the Treadmill type, containing two properties: position and modes
*/


// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------                               Default Parameters                           --------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------


/*
A useful a ES6 feature allows me to set a default parameter inside a function definition  First, .

For example, consider a function declaration without default parameters set:
*/
function noDefaultParams(number) {
    console.log('Result:', number * number)
}

/*
Obviously, the noDefaultParams function should return whatever number it receives, squared.

However, what if I call it like this:
*/
noDefaultParams(); // Result: NaN

// Consider now, the following improvement, using default parameters:
function withDefaultParams(number = 10) {
    console.log('Result:', number * number)
}


// Consider the following class definition:
class NoDefaultParams {
    constructor(num1, num2, num3, string1, bool1) {
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
        this.string1 = string1;
        this.bool1 = bool1;
    }
    calculate() {
        if(this.bool1) {
            console.log(this.string1, this.num1 + this.num2 + this.num3);
            return;
        }
        return "The value of bool1 is incorrect"
    }
}


/*
Now I'll instantiate an object of the NoDefaultParams class, and run the calculate() method on it. 
Obviously, the bool1 should be set to true on invocation to make this work, but I'll set it to false on purpose, to highlight the point I'm making.
*/
var fail = new NoDefaultParams(1,2,3,false);
fail.calculate(); // 'The value of bool1 is incorrect'


// However, now that you know about default parameters, this example can be improved as follows:
class WithDefaultParams {
    constructor(num1 = 1, num2 = 2, num3 = 3, string1 = "Result:", bool1 = true) {
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
        this.string1 = string1;
        this.bool1 = bool1;
    }
    calculate() {
        if(this.bool1) {
            console.log(this.string1, this.num1 + this.num2 + this.num3);
            return;
        }
        return "The value of bool1 is incorrect"
    }
}
var better = new WithDefaultParams();
better.calculate(); // Result: 6

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------