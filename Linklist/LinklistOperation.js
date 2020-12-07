var readlineSync = require("readline-sync");
let list = require("./LinklistMain");

function linklistOperations(userInput) {

    switch (userInput) {
        case 1:
            var lengthOflist = readlineSync.questionInt("enter the size of list: ");

            while (list.sizeOfList() < lengthOflist) {
                let element = readlineSync.question("Enter number to add-");
                list.add(parseInt(element));
                this.size++;
            }
            break;
        case 2:
            console.log("Search the number from Linklist-");
            let element = readlineSync.question("enter index to search -")
            readlineSync.question(list.search(element));
            break;
        case 3:
            console.log("Delete element from linklist");
            let indexOfNum = readlineSync.question("enter index to delete no.-");
            console.log(list.removeFrom(indexOfNum));
            break;

        case 4:
            console.log("Display Linklist");
            readlineSync.question(list.display());
            break;
        case 5:
            console.log("Exit");
            break;
        default:
            console.log("wrong choice ");
            break;
    }
}

for (i = 0; i < 9; i++) {

    let userInput = readlineSync.question("enter choice 1.add 2.search 3.Delete 4.display 5.exit :");
    if (userInput == 5) {
        return;
    }
    console.log(linklistOperations(parseInt(userInput)));
}