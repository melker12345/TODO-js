const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
}); 

const data = []

rl.question("Action: 1, 2, 3", (userInput) =>{
    if (userInput === "1") {
        data.push(userInput)
    } else if (userInput === "2") {
        data.pop(userInput)
    } else {
        // Code to execute if neither condition1 nor condition2 is true
    }
    console.log(data)
    rl.close()
} )