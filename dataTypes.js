//undefined - hasn't been defined
//null - nothing
//boolean - true or false
//symbol - a unique primitive value
//object - stores key ; value pair
//variable - allows one to manipulate data

var myName = "Dev";
myName = 8;

var a;
var b = 2;
a = 7;
b = a;
console.log(a)

//initializing variables
var c = 5;
var d = 10;
var e = "I am a";

c = c + 1;
d = d + 5;
e = e + "String";

//variable names are case sensitive
var studyApp;
studyApp = 10;

//addition
var sum = 10 + 10;
console.log(sum)

//subtraction
var diff = 30 - 3;
console.log(diff)

//multiplication
var multiply = 8 * 8;
console.log(multiply)

//division
var div = 16/2;
console.log(div)

//incrementing numbers
var myVar = 87;
myVar ++;
console.log(myVar)

//decrementing
myVar --;
console.log(myVar)

//decimal numbers/floats
var myDecimal = 0.6;

//multipying decimal nums
var product = 2.0 * 2.5;
console.log(product)

//division
var quotient = 4.4 / 2.0;
console.log(quotient)

//remainder - determine if a number is even or odd
var remainder;
remainder = 11% 3;
console.log(remainder)

//compund assignment with augmented addition/multiplication/division/subtraction
a += 12;
a /= 4;

//declare string variables
var herName = "Leo";

//escaping literal quotes
var myStr = "I am a \"double quoted\" string inside \"double quotes\" ";
console.log(myStr)

//quoting strings with single quotes
var newString = '<a href="http://www.example.com" target = "_blank"</a>';
//you can also use backticks - ``

//escape sequence in strings
var anotherString = "FirstLine \n\t\\SecondLine\nThirdLine";
console.log(anotherString)

//concatenating strings with plus operater
var concString = "I come first." + "I come second";
var newConcStr = "I come first.";
newConcStr += "I come second";
console.log(newConcStr)

//finding the length of the string
var firstNameLength = 0;
var firstName = "Ada";

firstNameLength = firstName.length;

//bracket notation to find first character in string
//bracket notation - getting a character at a specific index of a string
//using 0 based indexing
var firstLetterOfFirstName = "";
var firstName = "Ada";
firstLetterOfFirstName = firstName[0];

//Strings immutability
var myStr = "Jello World";
myStr[0] = "Hello World";

//bracket notation to find nth character in a string
var thirdLetter =  firstName[2];
var lastLetter = firstName[firstName.length - 1];

//bracket notation to get the nth character
var secondToLast = firstName[firstName.length -2]
