var readlineSync = require('readline-sync');
let stack = require('./StackMain');

function stackOperations(userInput) {

    switch (parseInt(userInput)) {

        case 1:
            var lengthOfStack = readlineSync.questionInt("Enter the size of stack: ");

            while (stack.sizeOfStack() < lengthOfStack) {
                let num = readlineSync.question("Enter number to push-");
                stack.push(parseInt(num));
                this.size++;
            }
        break;
        case 2:
            console.log("pop the number from stack-");
            readlineSync.question(stack.pop());
            break;
        case 3:
            console.log("display stack");
            readlineSync.question(stack.display());
            break;
        case 4:
            console.log("exit");
            break;
        default:
            console.log("wrong choice ");
            break;
    }
}

for (i = 0; i < 9; i++) {

    let userInput = readlineSync.questionInt("enter choice 1.push 2.pop 3.display 4.exit :");
    if (userInput == 4) {
        return ;
    }
    console.log(stackOperations(userInput));

}