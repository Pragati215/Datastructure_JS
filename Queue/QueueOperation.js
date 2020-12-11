var readlineSync = require('readline-sync');
let queue = require('./QueueMain');

function queueOperations() {

    for (i = 0; i < 10; i++) {
        let userInput = readlineSync.question("enter choice 1.enqueue 2.dequeque 3.display 4. exit");
        if (userInput == 4) return;

        switch (parseInt(userInput)) {
            case 1:
                var lengthOfQueue = readlineSync.questionInt("enter the size of queue: ");
                while ( lengthOfQueue > 0 ) {
                    let element = readlineSync.question("Enter number to enqueue");
                    queue.enqueue(parseInt(element));
                    lengthOfQueue--;
                }
                break;
            case 2:
                console.log("dequeue the number from list");
                readlineSync.question(queue.dequeue());
                break;
            case 3:
                console.log("display queue");
                readlineSync.question(queue.display());
                break;
            case 4:
                console.log("exit");
                break;
            default:
                console.log("wrong choice ");
                break;
        }

    }

}
queueOperations();
