#! /usr/bin/env node

import inquirer from "inquirer";

const randomNumbre = Math.floor(Math.random() * 6 + 1);
console.log(randomNumbre);


const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please guess a number between 1-6:"
    }
]);

if (answers.userGuessedNumber === randomNumbre){
    console.log("congtratulations! you guessed right number.");
    
}else {
      console.log("yuo guessed wrong number");
      
}




