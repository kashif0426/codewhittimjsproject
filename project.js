// 1. Despot some money
// 2. Determine the number of line to bet on
// 3. Collect a bet amount 
// 4. Spin the slot machine
// 5. Check if the user won
// 6. Give the user their winnings
// 7. Play again

const prompt = require("prompt-sync")();

const deposit = () => {
    while (true) {
        const depositAmount = prompt("Enter a deposit amount: ");
        const numberdepositAmount = parseFloat(depositAmount);

        if (isNaN(numberdepositAmount) || numberdepositAmount <=0){
            console.log("Invalid deposit amount, try again.");
        }

        else{
            return numberdepositAmount;
        }
    }
};

const getNumberOfLines = () => {
    while (true) {
        const lines = prompt("Enter the number of line to bet on (1-3): ");
        const numberOfLines = parseFloat(lines);

        if (isNaN(numberOfLines) || numberOfLines <=0 || numberOfLines > 3){
            console.log("Invalid number of lines, try again.");
        }

        else{
            return numberOfLines;
        }
    }
};

const getbet = (balance) => {
    while (true) {
        const bet = prompt("Enter the total bet: ");
        const numberBet = parseFloat(bet);

        if (isNaN(numberBet) || numberBet <=0 || numberBet > balance){
            console.log("Invalid bet, try again.");
        }

        else{
            return numberBet;
        }
    }
};

let balance = deposit();
const numberOfLines = getNumberOfLines();
const bet = getbet(balance);