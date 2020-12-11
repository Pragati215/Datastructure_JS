/*****************************************************************
*@problem: To check parentheses must appear in a balanced manner.
* @author : Pragati D
* In this file we give input as string
*****************************************************************/

let Paranthesis = require('./ParenthesisMatchingBusinessLogic.js');
let readline = require('readline-sync');
let string = readline.question("Enter your input : \n");
console.log(Paranthesis.isParenthesisMatching(string));