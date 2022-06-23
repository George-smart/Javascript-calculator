// Console Calculator
console.log('Start Calculating')
let num1, operator, num2, resultStr;
num1 = parseInt(prompt("enter your first value"))
operator = prompt('Enter the operator')
num2 = parseInt(prompt(`${num1} ${operator} what value `))
resultStr = 'Answer is '


switch(operator){
    case '+':
        console.log(`${resultStr} ${num1 + num2}`)
        break
    case '-':
        console.log(`${resultStr} ${num1 - num2}`)
        break
    case '/':
        console.log(`${resultStr} ${num1 / num2}`)
        break
    case '*':
        console.log(`${resultStr} ${num1 * num2}`)
        break
    case '%':
        console.log(`${resultStr} ${num1 % num2}`)
        break
    default:
        console.log("INVALID OPERATION PLEASE ENTER A VALID INPUT") 
}




