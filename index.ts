#! /usr/bin/env node 
 
import inquirer from "inquirer";

let myBalance = 10000; // Dollar
const myPin = 1234;

let atmPin = await inquirer.prompt([
    {
        name: "myATMpin",
        type: "number",
        message: `Please enter your 4 digits PIN code: `,
    },
]);

if (atmPin.myATMpin === myPin) {
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: `Please select option: `,
            type: "list",
            choices: ["Fast Cash", "Cash Withdrawal", "Balance Inquiry"],
        },
    ]);
    if (operationAns.operation === "Fast Cash") {
        let fastCashAns = await inquirer.prompt([
            {
                name: "fastCash",
                message: `Please select amount: `,
                type: "list",
                choices: ["1000","3000", "5000", "10000","15000","20000"],
            },
        ]);
        if(fastCashAns.fastCash == myBalance){
            myBalance -= fastCashAns.fastCash;
            console.log(`Your remaining balance is: $${myBalance}`);
        }
        else if(fastCashAns.fastCash < myBalance){
            myBalance -= fastCashAns.fastCash;
            console.log(`Your remaining balance is: $${myBalance}`);
        }
        else if(fastCashAns.fastCash > myBalance){
            console.log(`You have insufficient balance: $${myBalance}`);
        }
    }
    else if (operationAns.operation === "Cash Withdrawal") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: `Please enter amount: `,
            },
        ]);
        if(amountAns.amount == myBalance){
            myBalance -= amountAns.amount;
            console.log(`Your remaining balance is: $${myBalance}`);
        }
        else if(amountAns.amount < myBalance){
            myBalance -= amountAns.amount;
            console.log(`Your remaining balance is: $${myBalance}`);
        }
        else if(amountAns.amount > myBalance){
            console.log(`You have insufficient balance: $${myBalance}`);
        }
        
    } 
    else if (operationAns.operation === "Balance Inquiry") {
        console.log(`Your current balance is: $${myBalance}`);
    } 
    
} else {
    console.log("Incorrect pin number!!!");
}
