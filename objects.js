//use properties to access data in objects
var ourCat = {
    "name" : "Lep",
    "legs" : 4,
    "tails" : 1,
    "friends": ["everything"] 
};

//accessing objects properties with dot notation
var testObj = {
    "hat" : "ballcap",
    "shirt" : "jazzi",
    "shoes" : "cleats"
};

var hatValue = testObj.hat;
var shirtValue = testObj.shirt;

//accessing objects properties with bracket notation -property names with spaces
var testObjB = {
    "an entry" : "hamburger",
    "my side" : "west",
    "the drink" : "juice"
};

var entryValue = testObjB["an entry"];
var drinkValue = testObjB['the drink'];

//accessing objects properties with variables
var testObjC = {
    16 : "hamburger",
    17 : "west",
    18: "juice"
};

var number= 16;
var snackValue= testObjC[number];


//updating object properties
var ourCat = {
    "name" : "Lep",
    "legs" : 4,
    "tails" : 1,
    "friends": ["everything"] 
};
ourCat.name = "Kitty";

//adding new properties to an object
var ourCat = {
    "name" : "Lep",
    "legs" : 4,
    "tails" : 1,
    "friends": ["everything"] 
};
ourCat.run = "fast";
ourCat["meows"] = "meow meow"

//deleting properties from objects
delete ourCat.meows;

//using objects lookups
function phoneticLookup(val){
    var result = "";
    var lookup = {
        "name" : "Lep",
        "legs" : 4,
        "tails" : 1,
        "friends": ["everything"] 
    };
    result = lookup[val];
    return result;
}
console.log(phoneticLookup("tails"));

//testing objects for properties
var myObj= {
    "name" : "Lep",
    "legs" : 4,
    "tails" : 1,
    "friends": ["everything"] 
};
function checkObj(checkProp){
    if(myObj.hasOwnProperty(checkProp)){
        return myObj[checkProp];
    }
    else{
        return "Not Found"
    }
}
console.log(checkObj("me"));

//manipulating complex objects
var myProps= [{
    "name" : "Lep",
    "legs" : 4,
    "tails" : 1,
    "friends": [
        "everything",
    "everyone"] 
},
{
    "artist" : "Lovely"
}
];


//Accessing nested objects