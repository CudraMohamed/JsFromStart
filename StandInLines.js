function nextInLine(arr, item){
    arr.push(item);
    return arr.shift();
}
var testArr = [1,2,3,4,5];

console.log("Before:" + JSON.stringify(testArr)); //changing an array to a string that can easily be printed out on the screen
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

//Booleans
function returnTrue(){
    return true;
}

//conditional lgic with if statements
function trueOrFalse(isItTrue){
    if(isItTrue){
        return "Yes, it is"
    }
    return "false"
}
console.log(trueOrFalse(true));

//coomparison operators
//equality operator
function testEqual(val){
    if(val == 12){
        return "Yes, it is";
    }
    return "false";
}
console.log(testEqual(10));