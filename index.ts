// const initialStateScreen: HTMLDivElement = document.getElementById("display")
// const allOpeartionScreen: HTMLDivElement = document.getElementById("upper-screen")

// const allButtons = Array.from(document.getElementsByClassName("key"))


// let operators: string[] = []
// let operands: string[] = []
// let output: string = ""

// let inputValue: string = ""

// let calulated = false //check if the screen value presented is calculated value or not

// allButtons.forEach((btn) => {
//     btn.addEventListener("click", (): void => {
//         if (calulated) {
//             console.log(operands)
//             if ((btn.innerHTML == "*") || (btn.innerHTML == "/") || (btn.innerHTML == "+") || (btn.innerHTML == "-")) {
//                 resetScreen("", operands[0])
//             } else {
//                 resetScreen()
//             }
//             calulated = false
//         }



//         //operation to be performed if an operator is pressed
//         switch (btn.innerHTML) {
//             case "AC":
//                 resetScreen()
//                 break;
//             case "+":
//             case "-":
//             case "*":
//             case "/":
//                 if (!calulated)
//                     operators.push(btn.innerHTML)
//                 operands.push(inputValue)
//                 initialStateScreen.innerText = ""
//                 allOpeartionScreen.innerText += btn.innerHTML
//                 inputValue = ""
//                 break;

//             case "=":
//                 if (operators.length >= 1 && operands.length >= 2) {

//                     if ((operators.length + 1 == operands.length) && operands[operands.length - 1] == "") {
//                         operators.pop()
//                         operands.pop()
//                     }
//                     operands.push(inputValue)
//                     if (operators.length >= operands.length) operators.pop()
//                     const result = calculate(operators, operands)
//                     operands = [result]
//                     operators = []
//                     allOpeartionScreen.innerText += `= ${result}`
//                     initialStateScreen.innerText = `${result}`
//                     calulated = true
//                 }
//                 break;

//             case ".":
//                 if (initialStateScreen.innerText.length > 0 && !((initialStateScreen.innerText).includes("."))) {
//                     inputValue += "."
//                     initialStateScreen.innerText += "."
//                     allOpeartionScreen.innerText += "."

//                 }
//                 break;
//         }

//         //operation to be performed if a numeric value is entered
//         if (!isNaN(Number(btn.innerHTML))) {
//             if (initialStateScreen.innerText == "0") {
//                 initialStateScreen.innerText = ""
//             }
//             inputValue += btn.innerHTML
//             allOpeartionScreen.innerText += btn.innerHTML
//             initialStateScreen.innerText += btn.innerHTML
//         }
//         // console.log(operators)
//         // console.log(operands)
//     })
// })


// //reset screen
// function resetScreen(initial: string = "0", operatedValue: string = ""): void {
//     operands = []
//     operators = []
//     inputValue = ""
//     allOpeartionScreen.innerHTML = operatedValue
//     initialStateScreen.innerText = initial
// }

// //calculate
// function calculate(operators: string[], operands: string[]): string {
//     const opers: string[] = [...operators] //copy of operators array variable
//     const opnds: string[] = [...operands] //copy of operands array variable 

//     while (opnds.length > 1) {
//         // console.log(opnds)
//         let result: string
//         let indexOfOpr: number = 0
//         let num1: string
//         let num2: string

//         if (opers.includes("*")) {
//             indexOfOpr = opers.indexOf("*")
//         } else if (opers.includes("/")) {
//             indexOfOpr = opers.indexOf("/")
//         } else if (opers.includes("-")) {
//             indexOfOpr = opers.indexOf("-")
//         } else if (opers.includes("+")) {
//             indexOfOpr = opers.indexOf("+")
//         }
//         // console.log(opers, indexOfOpr)
//         num1 = opnds[Number(indexOfOpr)]
//         num2 = opnds[Number(indexOfOpr) + 1]
//         result = calcResult(opers[indexOfOpr], Number(num1), Number(num2))
//         opnds.splice(indexOfOpr, 2, result)
//         opers.splice(indexOfOpr, 1)
//     }
//     // console.log(opnds)
//     return opnds[0]
// }
// //perform actual calcutation
// function calcResult(operator: string, num1: number, num2: number): string {
//     // console.log('final')
//     let output = 0
//     switch (operator) {
//         case '*':
//             output = num1 * num2
//             break;
//         case "/":
//             output = num1 / num2
//             break;
//         case "+":
//             output = num1 + num2
//             break;
//         case "-":
//             output = num1 - num2
//             break;
//         default:
//             break

//     }
//     // console.log(output)
//     return output.toString()
// }