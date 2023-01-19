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
// to upate already existing properties:
house2.windows = 11;
console.log(house2);