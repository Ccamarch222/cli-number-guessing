#! /usr/bin/env node
import inquirer from "inquirer";
//will genrate a rendom number
//user input for guessing number
//cmpare user input with computer genrated number and show result
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessingNumber",
        type: "number",
        message: "please guess a number between 1-6 :",
    },
]);
if (answer.userGuessingNumber === randomNumber) {
    console.log("Congtratulation! you guessed a right number.");
}
else {
    console.log("you guessec rong number between.");
}
