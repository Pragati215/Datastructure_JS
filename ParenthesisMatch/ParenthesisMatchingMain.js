
let Paranthesis = require('./ParenthesisMatchingBusinessLogic.js');
let readline = require('readline-sync');
let string = readline.question("Enter your input : \n");
console.log(Paranthesis.isParenthesisMatching(string));