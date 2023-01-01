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
var myStorage = {
    "car" : {
        "inside" : {
            "glove box" : "maps",
            "passenger" : "crumbs"
        },
        "outside" : {
            "trunk" : "jack"
        }
    }
};
var gloveBoxContents = myStorage.car.inside["glove box"];
console.log(gloveBoxContents)

// accessing nested arrays
var myPlants = [
    {
        type : "flowers",
        list : [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type : "trees",
        list : [
            "fir",
            "pine",
            "birch"
        ]
    }
];
var secondTree = myPlants[1].list[1];
console.log(secondTree);

//record collection  
var collection = {
    "2489" : {
        "album" : "Slippery When Wet",
        "artist" : "Bon Jovi",
        "tracks" : [
            "let Ot Rock",
            "You give Love a Bad Name"
        ]
    },
    "2490" : {
        "album" : "1999",
        "artist" : "Prince",
        "tracks" : [
            "1999",
            "Little Red Corvette"
        ]
    },
    "2491" : {
        "artist" : "Robert Palmer",
        "tracks" : [ ]
    },
    "5439" : {
        "album" : "ABBA Gold",
    },
}

var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value){
    if(value = ""){
        delete collection[id][prop];
    }else if(prop === "tracks"){
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
    }else{
        collection[id][prop] = value;
    }
    return collection;
}
console.log(updateRecords(5439, "artist", "ABBA"))

//iterate with while loop
var myArr = [];
var i = 0
while (i < 5){
    myArr.push(i);
    i++;
}
console.log(myArr);

//iterate with for loop
var ourArr = [];

for(var i = 0; i<5 ; i++){
    ourArr.push(i);
}

//iterate odd numbers with for loop
var ourArrB = [];

for(var i = 1; i < 15 ; i+= 2){
    ourArrB.push(i);
}
console.log(ourArrB);

//count backwards with for loop
var ourArrC = [];

for(var i = 10; i > 0 ; i-= 2){
    ourArrC.push(i);
}
console.log(ourArrC);

//iterate through an array with for loop
var ourArrD = [9, 10, 11, 12, 13];
var ourTotal = 0;

for(var i = 0; i<ourArrD.length ; i++){
    ourTotal += ourArrD[i];
}
console.log(ourTotal);

//nesting for loops
function multiplyAll(arr){
    var product = 1;

    for (var i = 0; i < arr.length; i++){
        for (var j = 0; j < arr[i].length; j++){
            product *= arr[i][j]
        }
    }
    return product;
}
var product = multiplyAll([[1,2],[3,4],[5,6,7]]);
console.log(product);

//iterate with Do...While loop
var yourArr = [];
var k = 10;

do{
    yourArr.push(k);
    k++;
}while(k < 5)

console.log(k, yourArr);

//profile lookup
var contacts = [
    {
        "firstName" : "Akira",
        "lastName" : "Laine",
        "number" : "0987654321",
        "likes" : ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName" : "Harry",
        "lastName" : "Porter",
        "number" : "05678904321",
        "likes" : ["Chips", "Cycling", "Magic"]
    },
    {
        "firstName" : "Sharlock",
        "lastName" : "Holmes",
        "number" : "08796543221",
        "likes" : ["Intriguing cases", "Violin"]
    },
    {
        "firstName" : "Kristian",
        "lastName" : "Von",
        "number" : "unknown",
        "likes" : ["JavaScript", "Singing"]
    }
];
function lookUpProfile(name, props){
    for (var p = 0; p < contacts.length; p++){
        if(contacts[p].firstName === name){
            return contacts[p][props] || "No such property";
        }
    }
    return "No such contacts"
}

var data = lookUpProfile("Akira", "likes");
console.log(data);

//generate random functions
