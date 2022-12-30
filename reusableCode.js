//reusable function
function ourReusableFunction(){
    console.log("Hello World");
}
ourReusableFunction();

//passing values to functions with arguments
function ourReusableFunction(a,b){
    console.log(a-b);
}
ourReusableFunction(10,3);

//global scopes and functions
var myGlobal = 10;
function ourReusableFunction(){
    //reusable variable
    reusable = 5; //works only on browser - not in Scrimba

    var myOutput = "";
    if(typeof myGlobal != "undefined"){
        myOutput  += "myGlpbal: " + myGlobal;
    }
    console.log(myOutput);
}
ourReusableFunction();

//locak scopes and functions
function ourReusableFunction(){
    var myVar = 9;
    console.log(myVar);
}
ourReusableFunction();

//global  vs local scope in function
//the local variable takes presidence over the global function
//return a variable from a function
function minusSvene(num){
    return num - 7;
}
console.log(minusSvene(10));

function timesFive(num){
    return num*5;
}
console.log(timesFive(2));

//understanding undefined value returned from function
var sum =0;


function addThree(){
    sum = sum+ 3; //return value is undefined
}

//assignment with return  value
var changed = 0;

function change(num) {
    return (num + 5)/ 3;
}
changed = change(10);