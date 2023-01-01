//used instead of nsed i else
function caseSwitch(val){
    var answer ="";
    switch(val){
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
    }
    return   answer;
}
console.log(caseSwitch(4));

//default option on a switch statement
function switchStuff(val){
    var answer ="";
    switch(val){
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
        default:
            answer === "stuff";
            break;
    }
    return   answer;
}
console.log(switchStuff(4));

//multiple identical switch statement
function caseSwitch(val){
    var answer ="";
    switch(val){
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
    }
    return   answer;
}
console.log(caseSwitchB(4));function caseSwitch(val){
    var answer ="";
    switch(val){
        case 1:
        case 2:
        case 3:
            answer = "low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "mid";
            break;
    }
    return   answer;
}
console.log(caseSwitchB(4));