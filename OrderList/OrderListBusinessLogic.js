let readline = require('readline-sync');
let fs = require('fs');
let OrderList = require('./OrderListMain');
let fileData = fs.readFileSync('./ReadOrderList.txt');
let arr = fileData.toString().split(' ');
console.log(arr);

arr.forEach(element => {
    OrderList.sortOfList(parseInt(element));
});

let display = OrderList.printList();
console.log(display);

fs.writeFileSync('./WriteOrderList.txt', display);

let findNum = readline.question("enter the number you want to delete:");
let check = OrderList.searchData(findNum);
if (check) {
    OrderList.deleteAtNode(findNum);
}
else {
    OrderList.sortOfList(findNum);
}

let displayFile = OrderList.showList();
console.log(displayFile);

fs.writeFileSync('./WriteOrderList.txt', displayFile);





