//1. deposit money
//2. Determine number of lines to bet on
//3. collect a bet amount
//4. spin the slot machine
//5. check if the usr won
//6. givr the user their  winings
//7. play again

const prompt = require("prompt-sync")();
//1. Deposit money
const deposit = () => {
    while (true) {
        const depositAmount = prompt("Enter a deposit amount: ");
        const numberDepositAmount = parseFloat(depositAmount);

        if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
            console.log("Invalid amount, try again.")
        } else {
            return numberDepositAmount
        }
    }
}

 const depositAmount = deposit()
console.log(depositAmount)