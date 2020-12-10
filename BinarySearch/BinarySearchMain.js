let readlineSync = require('readline-sync');
let BinarySearch = require('./BinarySearchWordList');

arr = new Array();
let lengthOfArr = readlineSync.question("Enter the length of array : ");
for (let i = 0; i < lengthOfArr; i++) {
    let num = readlineSync.question("Enter word: ");
    arr.push(num);
}
object = readlineSync.question("Enter word to be searched : ");

console.log(BinarySearch.binarySearch(arr, object));