//binary search word list program
let readlineSync = require('readline-sync');

function binarySearch(arr, object) {
    let first = 0;
    let last = arr.length + 1;

    while (first <= last) {
        let middle = Math.floor((first + last) / 2);

        if (arr[middle] === object) {
            // found the key
            return middle;
        } else if (arr[middle] < object) {
            // continue searching to the right
            start = middle + 1;
        } else {
            // search searching to the leff
            end = middle - 1;
        }
    }

    return -1;
}

arr = new Array();

let lengthOfArr = readlineSync.question("Enter the length of array : ");
for (let i = 0; i < lengthOfArr; i++) {
    let num = readlineSync.question("Enter word: ");
    arr.push(num);
}
object = readlineSync.question("Enter word to be searched : ");

console.log(binarySearch(arr, object));