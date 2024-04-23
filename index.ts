#! /usr/bin/env node
import inquirer from "inquirer"


const currencies: any = {
    USD: 1,
    EUR: 0.91,
    INR: 74.57,
    PKR: 278.55,
}
let answer = await inquirer.prompt([{
    name: "from",
    type: "list",
    message: "Select the currency you want to convert from",
    choices: ["USD","EUR","INR","PKR"]
},
{
    name: "to",
    type: "list",
    message: "Select the currency you want to convert into",
    choices: ["USD","EUR","INR","PKR"]
},
{
    name: "amount",
    type: "number",
    message: "Enter the amount you want to convert",
    
}
])
let fromCurrency = currencies[answer.from]
let toCurrency = currencies[answer.to]
let amount = answer.amount
let baseCurrency = amount/fromCurrency
let converted = baseCurrency*toCurrency
let  convertedAmount = Math.floor(converted)
console.log(`your converted amount is ${convertedAmount}`)