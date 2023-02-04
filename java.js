// ----- TASK SIX ----- //
// function for task #6, second strat
const createTables = function(factor1) {
    let str = ""; // this variable is to hold one table at a time

    for(let factor2 = 1; factor2 <= 12; factor2++) {
        let product = factor1 * factor2;
        str += (factor1 + " x " + factor2 + " = " + product + "<br>");
    }

    console.log(str + "FUNCTION");
    str += "-------------------<br>";
    return str;
}

// functioon for task #6, third strat
const firstFactor = function(delim) {
    let bigStr = ""; 
    for(let factor1 = 1; factor1 <= delim; factor1++) {
    
        bigStr += secondFactor(factor1, delim);
    }
    return bigStr;
};

const secondFactor = function(factor, delim) {
    let str = ""; // this variable is to hold one table at a time

    for(let factor2 = 1; factor2 <= delim; factor2++) {
        let product = factor * factor2;
        str += (factor + " x " + factor2 + " = " + product + "<br>");
    }

    str += "-------------------<br>";
    return str;
};

//////////////////////////////////////////////// main body

// FIRST STRAT //
let heading = document.querySelector(".tableHeader");
let forTables = document.querySelector(".table");
let productStr = ""; // this variable is to hold one table at a time
let overallStr = ""; // this variable holds all of the tables and will print them to the screen

//This outer for loop is to maintain the first factor, 1 new table for every number between 1 and 12
for(let factor1 = 1; factor1 <= 12; factor1++) {
    heading.innerHTML = "For Loop Times Table"; // title for loop's tables

    // This inner loop is meant to multiply each first factor times a number between 1 and 12; gets the //multiplication result
    for(let factor2 = 1; factor2 <= 12; factor2++) {
        let product = factor1 * factor2;
        productStr += (factor1 + " x " + factor2 + " = " + product + "<br>");
    }
    overallStr += productStr + "-------------------<br>";
    productStr = "";
}
forTables.innerHTML = `${overallStr}`; //prints ALL times tables

// SECOND STRAT //
let functionHeading = document.querySelector(".functionHeader");
let functionTable = document.querySelector(".functionTable");
let bigStr = ""; // this variable holds all of the tables and will print them to the screen

//This for loop is to maintain the first factor, 1 new table for every number between 1 and 12
for(let factor1 = 1; factor1 <= 12; factor1++) {
    functionHeading.innerHTML = "Function Times Table"; // title for function's tables
    
    bigStr += createTables(factor1);
}
functionTable.innerHTML = `${bigStr}`; //prints ALL times tables

// THIRD STRAT //
let doubleFuncHeader = document.querySelector(".doubleFuncHeader");
let doubleFuncTable = document.querySelector(".doubleFuncTable");
let funcStr = "";
delim = 12;

doubleFuncHeader.innerHTML = "Double Function Tables";
funcStr += firstFactor(delim);
doubleFuncTable.innerHTML = `${funcStr}`;
