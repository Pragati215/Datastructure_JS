let readline = require('readline-sync');
let fs = require('fs');
let OrderList = require('../OrderList/OrderListMain');
let fileData = fs.readFileSync('./ReadUnOrderList.txt');
let arr = fileData.toString().split(' ');
console.log(arr);

arr.forEach(element => {
    OrderList.addAtNode(element);
});

let display = OrderList.printList();
console.log(display);

fs.writeFileSync('./WriteUnOrderList.txt', display);

let name = readline.question("enter the name you want to delete:");
let check = OrderList.searchData(name);
if (check) {
    OrderList.deleteAtNode(name);
}
else {
    OrderList.addAtNode(name);
}

let displayFile = OrderList.showList();
console.log(displayFile);

fs.writeFileSync('./WriteUnOrderList.txt', displayFile);
