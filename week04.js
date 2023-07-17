//1. Create an array called ages
const ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log(ages);

/*1.A Programatically subtract the value of the first element ///from the valie of the last element*/

const newAges = ages[ages.length - 1] - ages[0];
console.log(newAges);
/*1.B Add a new age to the array repeat step 1.A to make sure it works for arrays of different lengths*/

ages.push(22);
console.log(ages);
const extendedAges = ages[ages.length - 1] - ages[0];
console.log(extendedAges);

/*1.C Use a loop to iterate through the array and calculate the average age*/
let total = 0;
for (let age of ages) { 
    let i = 0; i < ages.length; i++; {
        total += ages[i];
    }
}

let average = total / ages.length;

//2. Create an array called names
let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
console.log(names);

/*2.A Use a loop to iterate through the array and calculate the average number of letters per name
(Create a loop that iterates throught an array and adds all the elements. Count the number of letters*/

let letters = " ";
for (let i = 0; i < names.length; i++) {
    letters = letters += names[i];
}
console.log(letters);
console.log(letters.length);
console.log(letters.length / names.length);

/*2B. Use a loop to iterate through the array again and concatenate all the names together separated by spaces*/
let a = " ";
for (let i = 0; i < names.length; i++) {
a = a += names[i];
}

console.log(a);
console.log(names.join( " " ));

/*3. How do you access the last element of any array? You use the .length property and since arrays are zero based you - 1 to get the index of the last element arrayName.length - 1.*/

/*4. How do you access the first element of any array? The first element in an array is at index 0 so you state the name of the array follow by the index in brackets arrayName[0].*/

/*5. Create a new array called nameLenghts*/

let nameLengths = ["Lena", "Chris", "Pumpkin", "Loki"];
console.log(nameLengths);
/*iterate over the loop and add the length of each name to the nameLengths array*/

for (let i = 0; i < nameLengths.length; i++) {
    nameLengths[i] = nameLengths[i].length;

}

console.log(nameLengths);

/*6. Write a loop to iterate over the nameLengths array and calculate the summ of all the elements in the array*/

let sum = nameLengths.reduce(function(a, b)  {
   return a + b;
});

console.log(sum);

/*7. Write a fuction that takes two parameters, word and n as arguments and returns the word concatenated to itself n number of times.*/
let repeatedWord = "";
function repeat(word, n) {
    while (n > 0) {
    repeatedWord += word;
    n--;
    } 
    return repeatedWord;
}
repeat("Hello", 3);
console.log(repeatedWord);

/*8. Write a function that takes two parameters, firstName and lastName and returns a full name, firstName(space)lastName.*/

function fullName (firstName, lastName) {
    return firstName + " " + lastName;
}
console.log(fullName("Lena", "Bach"));


/*9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100*/

let array1 = [2, 33, 42, 49, 56, 18];
function value (array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
        } return sum / array.length;
} 
console.log(value(array1));
if (sum > 100) {
    console.log("true");
} else {
    console.log("false");
}
/*10. Write a function that takes an array of numbers and returns the average of all the elements in the array*/

let numbers = [15, 28, 40, 52, 65, 26];
let mean = numbers.reduce (function(a, b){
    return a + b;
});
console.log(mean);

/*11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array*/

let arrayA= [6, 11, 29, 37, 53, 8];
let arrayB= [9, 37, 57, 65, 66];

function largerAverage (arrayOne, arrayTwo) {
    let one = arrayA.reduce (function (a, b) {
        return a + b;
    })
    let two = arrayB.reduce (function(a, b) {
        return a + b;
    })
    if (one > two ) {
        console.log("true");
    } else {
        console.log("false");
    }
}
console.log(largerAverage(arrayA, arrayB));

/*12. Write a function called willBuyDrink that takes a boolean isHotOutside and a number moneyInPocket and returns true if it is hot outisde and if moneyInPocket is greater than 10.50*/

function willBuyDrink (temperature, moneyInPocket) {
    if (temperature > 90) {
        isHotOutside = true;
    if (isHotOutside = true && moneyInPocket > 10.50) {
        return true;
    }   
    } else {
        return false;
    }
}
console.log (willBuyDrink(99, 10.51));

/*13. I like to play Dungeons and Dragons(D&D). In D&D whenever we want our character to perform any action in game we roll a twenty-sided dice (d20).  The d20 roll is used to determine the successful of an action. If the roll on a d20 is equal to or greater than the difficulty for any particular action then the action is successful, if not then the action is unsuccessful. I would like to write a simple program to represent the outcome of a player character's action in game.*/

/*Create a random number generator, a function that takes in two parameters a minimum value and a maximum value and creates a random number between those values including those values.*/

const random = (min,max) => Math.floor(Math.random() * (max - min + 1)) + min;

const diceRoll = () => random(1, 20);

/*Roll the d20 for the player character*/

let playerCharacter = diceRoll();

/*Store the result of the dice roll*/

let result = "";

/*Determine the success of result*/

let difficulty = 17;
playerCharacter = "Gandalf";

if(playerCharacter >= difficulty) {
    result = `${playerCharacter}'s action is successful`;
} else {
    result = `${playerCharacter} has failed`;
}

/*Print the result*/
console.log(result);




















