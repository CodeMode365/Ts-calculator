const upperScreen = document.getElementById("upper-screen") //all inputs
const lowerScreen = document.getElementById("display") //users current input


let calculated: boolean = false //to check if the value if calculated result or not

//button clicks
const buttons = Array.from(document.getElementsByClassName('key'))


//calculation vairbales
// let lowerScreenValue: string
let allValues: string[] = []
let operators: string[] = []

buttons.forEach(btn => [

    btn.addEventListener('click', () => {
        if (allValues[allValues.length - 1] == "") allValues.pop() //clear the empty value
        //reset the calculated values
        if (calculated) {
            if ((btn.innerHTML == "*") || (btn.innerHTML == "/") || (btn.innerHTML == "+") || (btn.innerHTML == "-")) {
                reset("", allValues[allValues.length - 1])
            } else {
                reset()
            }
            calculated = false
        }

        switch (btn.innerHTML) {

            case "AC":
                reset("0")
                break;

            case "+":
            case "-":
            case "/":
            case "*":
                if (allValues[0]) {
                    //for negative numbers calcutaion
                    if ((operators[operators.length - 1] == "-") && (btn.innerHTML == "-")) {
                        if ((upperScreen!.innerText)[upperScreen!.innerText.length - 1] != (upperScreen!.innerText)[upperScreen!.innerText.length - 2] &&
                            (upperScreen!.innerText)[upperScreen!.innerText.length - 1] != (upperScreen!.innerText)[upperScreen!.innerText.length - 3]) {
                            lowerScreen!.innerText += "-"
                            upperScreen!.innerText += `${btn.innerHTML}`
                        }
                    }
                    else if (operators.length + 1 > allValues.length) {
                        break;
                    }
                    else {
                        upperScreen!.innerText += `${btn.innerHTML}`
                        operators.push(btn.innerHTML)
                        lowerScreen!.innerText = ""
                    }

                }

                break;

            case "=":
                if (operators.length >= 1 && allValues.length >= 2) {

                    if ((operators.length + 1 == allValues.length) && allValues[allValues.length - 1] == "") {
                        operators.pop()
                        allValues.pop()
                    }

                    const result = calculte(operators, allValues)
                    lowerScreen!.innerText = `${result}`
                    upperScreen!.innerText += `=${result}`
                    calculated = true
                }
                else {

                }
                break;
            case ".":
                if (lowerScreen!.innerText.length > 0 && !((lowerScreen!.innerText).includes("."))) {
                    lowerScreen!.innerText += "."
                    upperScreen!.innerText += "."
                }
                break;
        }

        if (!isNaN((parseInt(btn.innerHTML)))) {

            if (lowerScreen!.innerText.length >= 15) { //limit the digit length
                alert("Digit limit met")
            } else {

                if (lowerScreen!.innerText == "0") {
                    lowerScreen!.innerText = ""
                }

                upperScreen!.innerText += btn.innerHTML
                lowerScreen!.innerText += btn.innerHTML
            }
        }

        // lowerScreenValue = lowerScreen.innerText
        allValues = upperScreen!.innerText.split(/[\+\-\*\/=]/g)
        // console.log(operators)
        // console.log(allValues)
    })
])

//calculator function
function calculte(oprs: string[], vals: string[]): number {

    const oper = [...oprs]
    const values = [...vals]

    let output = 0

    while (values.length > 1) {

        let operatorIndex: number = 0
        let val1: number
        let val2: number
        let result: number

        if (oper.includes("*")) {
            operatorIndex = oper.indexOf("*")
        }
        else if (oper.includes("/")) {
            operatorIndex = oper.indexOf("/")
        }
        else if (oper.includes("-")) {
            operatorIndex = oper.indexOf("-")
        }
        else if (oper.includes("+")) {
            operatorIndex = oper.indexOf("+")
        }


        val1 = Number(values[operatorIndex])
        val2 = Number(values[operatorIndex + 1])
        result = operation(oper[operatorIndex], val1, val2)

        console.log(values)
        values.splice(operatorIndex, 2, result.toString())
        oper.splice(operatorIndex, 1)

    }

    output = Number(values[0])
    return output
}


//calculate
function operation(operator: string, val1: number, val2: number): number {

    let output: number = 0

    switch (operator) {
        case "*":
            output = val1 * val2;
            break;
        case "/":
            output = val1 / val2;
            break;
        case "+":
            output = val1 + val2;
            break;
        case "-":
            output = val1 - val2;
            break;
    }
    return output
}

//reset
function reset(screenVal: string = "", upperValue: string = ""): void {
    upperScreen!.innerText = upperValue
    lowerScreen!.innerText = screenVal
    allValues = [upperValue]
    // lowerScreenValue = ""
    operators = []
}

export {}